import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { RestService } from 'src/app/rest-service';
import { EnemyAttackVO, EnemyVO } from 'src/app/vo/enemy-vo';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-enemy-management',
  templateUrl: './enemy-management.component.html',
  styleUrls: ['./enemy-management.component.css']
})
export class EnemyManagementComponent implements OnInit {

  @Input()
  enemy: EnemyVO|undefined = undefined;

  @Output()
  adventureIsOver: EventEmitter<string> = new EventEmitter<string>();

  enemyTurn: boolean = true;
  adventureEnd: boolean = false;

  playerHealth: number=-1;
  enemyHealth: number=-1;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.refreshStats();
    this.checkFailure();
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
        .sendGet<number>("/api/adventure/monster-health", new HttpHeaders({
          'accept': 'application/json'
        }));

    firstValueFrom(observ2).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error calling BE: ", resp);
          return;
        }

        this.enemyHealth = resp.body == null ? 0 : resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
  }

  turnCompleted(completed: boolean): void {
    if (!completed)
      return;
    
    this.checkFailure();
    this.checkSuccess();
    this.refreshStats();
    this.enemyTurn = !this.enemyTurn;
  }


  private async checkFailure(): Promise<void> {
    const adventureFailed: boolean = await this.isAdventureFailed();
    if (adventureFailed) {
      this.adventureEnd = true;
      this.adventureIsOver.emit("fail");
    }
  }

  private async checkSuccess(): Promise<void> {
    const adventureSuccess = await this.isAdventureSuccess();
    if (adventureSuccess){
      this.adventureEnd = true;
      this.adventureIsOver.emit("success");
    }
  }

  async isAdventureFailed(): Promise<boolean> {
    const observ: Observable<HttpResponse<boolean>> = this.rest
        .sendGet<boolean>("/api/adventure/isfailed", new HttpHeaders({
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

    return result;
  }


  async isAdventureSuccess(): Promise<boolean> {
    const observ: Observable<HttpResponse<boolean>> = this.rest
        .sendGet<boolean>("/api/adventure/issuccess", new HttpHeaders({
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

    return result;
  }

}
