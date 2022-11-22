import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { BossVO } from 'src/app/vo/boss-vo';

@Component({
  selector: 'app-boss-management',
  templateUrl: './boss-management.component.html',
  styleUrls: ['./boss-management.component.css']
})
export class BossManagementComponent implements OnInit {

  @Input()
  bossLocation: string|undefined=undefined;

  @Output()
  bossIsOver: EventEmitter<string>=new EventEmitter();

  boss: BossVO|undefined = undefined;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.init();
    this.getBoss();
  }

  private init(): void {
    const observ: Observable<HttpResponse<void>> = this.rest
        .sendGet<void>("/api/boss/init/"+this.bossLocation, new HttpHeaders({
        }));
    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error calling BE: ", resp);
          return;
        }
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
  }

  private getBoss(): void {
    const observ: Observable<HttpResponse<BossVO>> = this.rest
        .sendGet<BossVO>("/api/boss/get-by-location/"+this.bossLocation, new HttpHeaders({
          'accept': 'application/json'
        }));
    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }
        this.boss = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )
  }

  bossIsOverFnc(status: string): void {
    this.bossIsOver.emit(status);
  }

}
