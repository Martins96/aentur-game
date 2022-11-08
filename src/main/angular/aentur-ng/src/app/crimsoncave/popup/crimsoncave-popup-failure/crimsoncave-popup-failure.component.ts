import { Component } from '@angular/core';

@Component({
  selector: 'app-crimsoncave-popup-failure',
  templateUrl: './crimsoncave-popup-failure.component.html',
  styleUrls: ['./crimsoncave-popup-failure.component.css']
})
export class CrimsoncavePopupFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
