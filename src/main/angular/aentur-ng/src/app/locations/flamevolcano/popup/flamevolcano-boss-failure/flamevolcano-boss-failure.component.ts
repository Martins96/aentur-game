import { Component } from '@angular/core';

@Component({
  selector: 'app-flamevolcano-boss-failure',
  templateUrl: './flamevolcano-boss-failure.component.html',
  styleUrls: ['./flamevolcano-boss-failure.component.css']
})
export class FlamevolcanoBossFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
