import { Component } from '@angular/core';

@Component({
  selector: 'app-flamevolcano-popup-failure',
  templateUrl: './flamevolcano-popup-failure.component.html',
  styleUrls: ['./flamevolcano-popup-failure.component.css']
})
export class FlamevolcanoPopupFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
