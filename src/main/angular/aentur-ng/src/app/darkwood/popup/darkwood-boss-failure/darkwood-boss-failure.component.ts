import { Component } from '@angular/core';

@Component({
  selector: 'app-darkwood-boss-failure',
  templateUrl: './darkwood-boss-failure.component.html',
  styleUrls: ['./darkwood-boss-failure.component.css']
})
export class DarkwoodBossFailureComponent {

  constructor() { }


  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
