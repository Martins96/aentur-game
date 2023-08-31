import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-home',
  templateUrl: './location-home.component.html',
  styleUrls: ['./location-home.component.css']
})
export class LocationHomeComponent implements OnInit {

  @Input()
  isCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  moveTo(page: string) {
    location.href = "?navPage="+page;
  }

}
