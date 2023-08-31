import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-hottendesert',
  templateUrl: './location-hottendesert.component.html',
  styleUrls: ['./location-hottendesert.component.css']
})
export class LocationHottendesertComponent {

  @Input()
  isCompleted: boolean = false;

  constructor() { }

  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
