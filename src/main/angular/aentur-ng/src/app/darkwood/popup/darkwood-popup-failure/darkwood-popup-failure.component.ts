import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/rest-service';
import { EnemyVO } from 'src/app/vo/enemy-vo';
import { RewardVO } from 'src/app/vo/reward-vo';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-darkwood-popup-failure',
  templateUrl: './darkwood-popup-failure.component.html',
  styleUrls: ['./darkwood-popup-failure.component.css']
})
export class DarkwoodPopupFailureComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }

  ngOnInit(): void {
  }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
