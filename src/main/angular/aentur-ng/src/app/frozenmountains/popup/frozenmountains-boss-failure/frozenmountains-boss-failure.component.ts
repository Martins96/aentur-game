import { Component } from '@angular/core';

@Component({
  selector: 'app-frozenmountains-boss-failure',
  templateUrl: './frozenmountains-boss-failure.component.html',
  styleUrls: ['./frozenmountains-boss-failure.component.css']
})
export class FrozenmountainsBossFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
