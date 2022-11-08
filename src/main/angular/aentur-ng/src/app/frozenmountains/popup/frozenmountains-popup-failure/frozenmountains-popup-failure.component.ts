import { Component } from '@angular/core';

@Component({
  selector: 'app-frozenmountains-popup-failure',
  templateUrl: './frozenmountains-popup-failure.component.html',
  styleUrls: ['./frozenmountains-popup-failure.component.css']
})
export class FrozenmountainsPopupFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
