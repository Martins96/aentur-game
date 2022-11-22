import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { BossActionVO } from 'src/app/vo/boss-vo';

@Component({
  selector: 'app-boss-action',
  templateUrl: './boss-action.component.html',
  styleUrls: ['./boss-action.component.css']
})
export class BossActionComponent {

  showActionResult: boolean=false;
  bossAct: BossActionVO|undefined=undefined;
  bonusRoll: string="ARMA";
  
  playerHealth: number=-1;
  bossHealth: number=-1;

  @Output()
  bossIsOver: EventEmitter<string> = new EventEmitter<string>();

  constructor(private rest: RestService) { 
    this.changeBonus();
    this.refreshStats();
  }

  async closeActionResult(): Promise<void> {
    this.checkBossAdventure();
    this.changeBonus();
    this.showActionResult = false;
    this.refreshStats();
  }

  private async checkBossAdventure(): Promise<void> {
    const observ: Observable<HttpResponse<boolean>> = this.rest
        .sendGet<boolean>("/api/boss/is-failed", new HttpHeaders({
          'accept': 'application/json'
        }));

    let result: boolean=false;
    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }
        result = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
    if (result) {
      console.debug("Adventure failed with boss");
      this.bossIsOver.emit("failed");
      return;
    }
    const observ2: Observable<HttpResponse<boolean>> = this.rest
        .sendGet<boolean>("/api/boss/is-success", new HttpHeaders({
          'accept': 'application/json'
        }));

    await firstValueFrom(observ2).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }
        result = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
    if (result) {
      console.debug("Adventure success with boss");
      this.bossIsOver.emit("success");
      return;
    }
  }

  private changeBonus() {
    const bonus: number = Math.floor(Math.random() * 3); // 0, 1 or 2
    if (bonus === 0)
      this.bonusRoll = "ARMA";
    if (bonus === 1)
      this.bonusRoll = "ARMATURA";
    if (bonus === 2)
      this.bonusRoll = "TALISMANO";
  }

  submitRoll(rolld20: string): void {
    if (!rolld20)
      return;

    const observ: Observable<HttpResponse<BossActionVO>> = this.rest
        .sendPost<BossActionVO>("/api/boss/action", rolld20 ,new HttpHeaders({
          'accept': 'application/json',
          'content-type': 'application/json'
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error calling BE: ", resp);
          return;
        }
        this.bossAct = resp.body;
        this.showActionResult = true;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
    
    this.refreshStats();
  }

  private refreshStats(): void {
    const observ: Observable<HttpResponse<number>> = this.rest
        .sendGet<number>("/api/adventure/player-health", new HttpHeaders({
          'accept': 'application/json'
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error calling BE: ", resp);
          return;
        }
        this.playerHealth = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )

    const observ2: Observable<HttpResponse<number>> = this.rest
        .sendGet<number>("/api/adventure/boss-health", new HttpHeaders({
          'accept': 'application/json'
        }));

    firstValueFrom(observ2).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error calling BE: ", resp);
          return;
        }
        this.bossHealth = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
  }

}
