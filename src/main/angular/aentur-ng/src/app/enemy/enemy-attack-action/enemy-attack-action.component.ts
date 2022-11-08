import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from 'src/app/rest-service';
import { EnemyAttackVO } from 'src/app/vo/enemy-vo';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-enemy-attack-action',
  templateUrl: './enemy-attack-action.component.html',
  styleUrls: ['./enemy-attack-action.component.css']
})
export class EnemyAttackActionComponent implements OnInit {

  @Input()
  monsterId: number|undefined=undefined;

  @Output()
  completed: EventEmitter<boolean> = new EventEmitter<boolean>();

  attack: EnemyAttackVO|undefined=undefined;

  buttonDisabled: boolean = false;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.buttonDisabled = false;
    const observ: Observable<HttpResponse<EnemyAttackVO>> = this.rest
        .sendGet<any>("/enemy/attack/random-for-monster/"+this.monsterId, new HttpHeaders({
          'accept': 'application/json'
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error calling BE: ", resp);
          return;
        }
        this.attack = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
  }

  async success(): Promise<void> {
    this.buttonDisabled = true;
    this.completed.emit(true);
  }

  async failure(): Promise<void> {
    this.buttonDisabled = true;
    const observ: Observable<HttpResponse<void>> = this.rest
        .sendGet<any>("/player/decrease-health", new HttpHeaders({
          'accept': 'application/json'
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok)
          console.error("Error calling BE: ", resp);
      },
      err => {
        console.error("Error calling BE", err);
      }
    )

    this.completed.emit(true);
  }

}
