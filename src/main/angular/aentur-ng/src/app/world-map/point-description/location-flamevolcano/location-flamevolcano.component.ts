import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-flamevolcano',
  templateUrl: './location-flamevolcano.component.html',
  styleUrls: ['./location-flamevolcano.component.css']
})
export class LocationFlamevolcanoComponent {

  @Input()
  isCompleted: boolean = false;

  constructor() { }

  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
