import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { EnemyVO } from 'src/app/vo/enemy-vo';
import { RewardVO } from 'src/app/vo/reward-vo';

@Component({
  selector: 'app-frozenmountains-popup-success',
  templateUrl: './frozenmountains-popup-success.component.html',
  styleUrls: ['./frozenmountains-popup-success.component.css']
})
export class FrozenmountainsPopupSuccessComponent implements OnInit {

  reward: RewardVO|undefined=undefined;

  constructor(
    public dialogRef: MatDialogRef<FrozenmountainsPopupSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EnemyVO,
    private rest: RestService
  ) { }

  ngOnInit(): void {

    const observ: Observable<HttpResponse<RewardVO>> = this.rest
        .sendGet<RewardVO>("/api/enemy/reward/assign-and-get/"+this.data.id, new HttpHeaders());

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Call BE failed: ", resp);
          return;
        }
        this.reward = resp.body;
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }

  close(): void {
    this.dialogRef.close();
  }

}
