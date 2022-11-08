import { Component } from '@angular/core';

@Component({
  selector: 'app-location-frozenmountains',
  templateUrl: './location-frozenmountains.component.html',
  styleUrls: ['./location-frozenmountains.component.css']
})
export class LocationFrozenmountainsComponent {

  constructor() { }


  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
