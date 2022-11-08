import { Component } from '@angular/core';

@Component({
  selector: 'app-location-crimsoncave',
  templateUrl: './location-crimsoncave.component.html',
  styleUrls: ['./location-crimsoncave.component.css']
})
export class LocationCrimsoncaveComponent {

  constructor() { }

  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
