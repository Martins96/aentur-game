import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { EnemyVO } from 'src/app/vo/enemy-vo';
import { FlamevolcanoPopupFailureComponent } from '../popup/flamevolcano-popup-failure/flamevolcano-popup-failure.component';
import { FlamevolcanoPopupSuccessComponent } from '../popup/flamevolcano-popup-success/flamevolcano-popup-success.component';

@Component({
  selector: 'app-flamevolcano-scenario-enemy',
  templateUrl: './flamevolcano-scenario-enemy.component.html',
  styleUrls: ['./flamevolcano-scenario-enemy.component.css']
})
export class FlamevolcanoScenarioEnemyComponent implements OnInit {

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
        .sendGet<number>("/location/flamevolcano/random/lvl"+this.monsterLvl, new HttpHeaders({
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

    this.dialogSuccess.open(FlamevolcanoPopupSuccessComponent, dialogConfig)
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

    this.dialogFail.open(FlamevolcanoPopupFailureComponent, dialogConfig);
  }

}
