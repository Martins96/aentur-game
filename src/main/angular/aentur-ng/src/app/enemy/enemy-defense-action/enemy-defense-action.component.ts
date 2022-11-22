import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from 'src/app/rest-service';
import { EnemyDefenseVO } from 'src/app/vo/enemy-vo';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-enemy-defense-action',
  templateUrl: './enemy-defense-action.component.html',
  styleUrls: ['./enemy-defense-action.component.css']
})
export class EnemyDefenseActionComponent implements OnInit {

  @Input()
  monsterId: number|undefined=undefined;

  @Output()
  completed: EventEmitter<boolean> = new EventEmitter<boolean>();

  defense: EnemyDefenseVO|undefined=undefined;
  buttonDisabled: boolean = false;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.buttonDisabled = false;
    const observ: Observable<HttpResponse<EnemyDefenseVO>> = this.rest
        .sendGet<any>("/api/enemy/defence/random-for-monster/"+this.monsterId, new HttpHeaders({
          'accept': 'application/json'
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error calling BE: ", resp);
          return;
        }
        this.defense = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
  }

  async success(): Promise<void> {
    this.buttonDisabled = false;

    const observ: Observable<HttpResponse<void>> = this.rest
        .sendGet<any>("/api/enemy/decrease-health", new HttpHeaders({
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

  async failure(): Promise<void> {
    this.buttonDisabled = false;

    this.completed.emit(true);
  }

}
