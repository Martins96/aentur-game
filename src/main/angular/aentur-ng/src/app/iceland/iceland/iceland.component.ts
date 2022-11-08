import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { ItemVO } from 'src/app/vo/item-vo';
import { StepVO } from 'src/app/vo/StepVO';
import { BattleInfoComponent } from 'src/app/world-map/battle-info/battle-info.component';

@Component({
  selector: 'app-iceland',
  templateUrl: './iceland.component.html',
  styleUrls: ['./iceland.component.css']
})
export class IcelandComponent implements OnInit {

  constructor(private rest: RestService, private dialog: MatDialog) { }

  playerWeapon: ItemVO | null=null;
  playerArmor: ItemVO | null=null;
  playerTalisman: ItemVO | null=null;

  currentMonsterLvl: '1'|'sup'|undefined=undefined;

  stepPath:StepVO = new StepVO(1, 'ENEMY');

  backgroundImgID: number = 0;

  ngOnInit(): void {
    this.randomBackgroundImg()
    this.resetStats();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
  }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "250ms"

    this.dialog.open(BattleInfoComponent, dialogConfig);
  }

  private async getEquipedWeapon() {
    const observ: Observable<HttpResponse<ItemVO|null>> = this.rest
        .sendGet<ItemVO|null>("/player/equiped-weapon", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerWeapon = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  private async getEquipedArmor() {
    const observ: Observable<HttpResponse<ItemVO|null>> = this.rest
        .sendGet<ItemVO|null>("/player/equiped-armor", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerArmor = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  private async getEquipedTalisman() {
    const observ: Observable<HttpResponse<ItemVO|null>> = this.rest
        .sendGet<ItemVO|null>("/player/equiped-talisman", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerTalisman = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  refreshPathStep() {
    this.randomBackgroundImg();
    const observ: Observable<HttpResponse<StepVO>> = this.rest
        .sendGet<StepVO>("/player/current-step", new HttpHeaders({
          "accept":"application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Call BE failed ", resp);
          return;
        }
        
        this.currentMonsterLvl = resp.body.number === 1 ? '1' : 'sup';
        this.stepPath = resp.body;
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }

  resetStats(): void {
    const observ: Observable<HttpResponse<undefined>> = this.rest
        .sendGet<undefined>("/location/reset-adventure-stats", new HttpHeaders());

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
    
    this.currentMonsterLvl = '1';
  }


  endScenario(event: boolean): void {
    this.refreshPathStep();
  }

  async randomBackgroundImg(): Promise<void> {
    this.backgroundImgID = Math.floor(Math.random() * 10);
  }

}
