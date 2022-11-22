import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { RewardVO } from 'src/app/vo/reward-vo';

@Component({
  selector: 'app-flamevolcano-boss-success',
  templateUrl: './flamevolcano-boss-success.component.html',
  styleUrls: ['./flamevolcano-boss-success.component.css']
})
export class FlamevolcanoBossSuccessComponent implements OnInit {

  reward: RewardVO|undefined = undefined;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getReward();
  }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

  private async getReward() {
    const observ: Observable<HttpResponse<RewardVO>> = this.rest
        .sendGet<RewardVO>("/api/boss/reward", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.reward = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

}
