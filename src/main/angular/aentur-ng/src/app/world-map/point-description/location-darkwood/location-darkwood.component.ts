import { Component } from '@angular/core';

@Component({
  selector: 'app-location-darkwood',
  templateUrl: './location-darkwood.component.html',
  styleUrls: ['./location-darkwood.component.css']
})
export class LocationDarkwoodComponent {

  constructor() { }

  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
