import { Component } from '@angular/core';

@Component({
  selector: 'app-location-iceland',
  templateUrl: './location-iceland.component.html',
  styleUrls: ['./location-iceland.component.css']
})
export class LocationIcelandComponent {

  constructor() { }

  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
