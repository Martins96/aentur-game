import { Component } from '@angular/core';

@Component({
  selector: 'app-iceland-boss-failure',
  templateUrl: './iceland-boss-failure.component.html',
  styleUrls: ['./iceland-boss-failure.component.css']
})
export class IcelandBossFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
