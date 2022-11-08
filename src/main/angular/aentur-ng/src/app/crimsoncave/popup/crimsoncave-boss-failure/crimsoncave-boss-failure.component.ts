import { Component } from '@angular/core';

@Component({
  selector: 'app-crimsoncave-boss-failure',
  templateUrl: './crimsoncave-boss-failure.component.html',
  styleUrls: ['./crimsoncave-boss-failure.component.css']
})
export class CrimsoncaveBossFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
