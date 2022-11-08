import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RestService } from 'src/app/rest-service';
import { EnemyVO } from 'src/app/vo/enemy-vo';
import { CrimsoncavePopupFailureComponent } from '../popup/crimsoncave-popup-failure/crimsoncave-popup-failure.component';
import { CrimsoncavePopupSuccessComponent } from '../popup/crimsoncave-popup-success/crimsoncave-popup-success.component';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-crimsoncave-scenario-enemy',
  templateUrl: './crimsoncave-scenario-enemy.component.html',
  styleUrls: ['./crimsoncave-scenario-enemy.component.css']
})
export class CrimsoncaveScenarioEnemyComponent implements OnInit {

  randomID: EnemyVO|undefined=undefined;

  @Input()
  monsterLvl: '1'|'sup'|undefined=undefined;

  @Output()
  endScenario: EventEmitter<boolean>=new EventEmitter();

  constructor(
      private dialogSuccess: MatDialog,
      private dialogFail: MatDialog,
      private rest: RestService) { }

  ngOnInit(): void {
    const observ: Observable<HttpResponse<number>> = this.rest
        .sendGet<number>("/location/crimsoncave/random/lvl"+this.monsterLvl, new HttpHeaders({
          "accept":"application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body === undefined || resp.body === null || resp.body < 0) {
          console.error("Call BE failed ", resp);
          return;
        }

        const observ: Observable<HttpResponse<EnemyVO>> = this.rest
            .sendGet<EnemyVO>("/enemy/enemy-by-id/"+resp.body, new HttpHeaders());

        firstValueFrom(observ).then(
          resp2 => {
            if (!resp2 || !resp2.ok || !resp2.body) {
              return;
            }
            this.randomID = resp2.body;
            
          }, err2 => {
            console.error("Call BE failed: ", err2);
          }
        )


      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }


  adventureIsOver(adventureStatus: string) {
    if (!adventureStatus)
      return;

    if (adventureStatus === 'success') {
      // Proceed to next adventure step
      this.openDialogSuccess(); // -> this will add a reward
      return;
    }

    if (adventureStatus === 'fail') {
      // Stop adventure
      this.openDialogFailure();
      return;
    }
  }

  async nextPathStep(): Promise<void> {
    const observ: Observable<HttpResponse<void>> = this.rest
        .sendGet<void>("/player/increase-step", new HttpHeaders({
          "accept":"application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }

  private async nextStep(): Promise<void> {
    await this.nextPathStep();
    this.endScenario.emit(true);
  }


  openDialogSuccess() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;

    this.dialogSuccess.open(CrimsoncavePopupSuccessComponent, dialogConfig)
        .afterClosed().subscribe(
          () => this.nextStep()
        );
  }
  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(CrimsoncavePopupFailureComponent, dialogConfig);
  }

}
