import { Component } from '@angular/core';

@Component({
  selector: 'app-iceland-popup-failure',
  templateUrl: './iceland-popup-failure.component.html',
  styleUrls: ['./iceland-popup-failure.component.css']
})
export class IcelandPopupFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }
}
