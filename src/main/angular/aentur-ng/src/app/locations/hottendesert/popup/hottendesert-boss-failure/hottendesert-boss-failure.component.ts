import { Component } from '@angular/core';

@Component({
  selector: 'app-hottendesert-boss-failure',
  templateUrl: './hottendesert-boss-failure.component.html',
  styleUrls: ['./hottendesert-boss-failure.component.css']
})
export class HottendesertBossFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
