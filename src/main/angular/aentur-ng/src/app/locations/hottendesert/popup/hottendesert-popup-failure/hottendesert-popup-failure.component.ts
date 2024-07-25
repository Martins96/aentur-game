import { Component } from '@angular/core';

@Component({
  selector: 'app-hottendesert-popup-failure',
  templateUrl: './hottendesert-popup-failure.component.html',
  styleUrls: ['./hottendesert-popup-failure.component.css']
})
export class HottendesertPopupFailureComponent {

  constructor() { }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
