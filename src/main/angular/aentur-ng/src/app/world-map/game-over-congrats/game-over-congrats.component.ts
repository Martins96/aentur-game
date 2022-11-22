import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-game-over-congrats',
  templateUrl: './game-over-congrats.component.html',
  styleUrls: ['./game-over-congrats.component.css']
})
export class GameOverCongratsComponent implements OnInit {

  canLoad: boolean = false;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    const observ: Observable<HttpResponse<boolean|null>> = this.rest
        .sendGet<boolean|null>("/api/completation/is-game-completed", new HttpHeaders({
          "Accept": "application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        if (!resp.body) {
          // game is not over yet
          location.href="/?navPage=worldmap";
        } else {
          this.canLoad = true;
        }
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

}
