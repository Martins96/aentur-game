import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-point-description',
  templateUrl: './point-description.component.html',
  styleUrls: ['./point-description.component.css']
})
export class PointDescriptionComponent implements OnInit {

  @Input()
  pointID: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
