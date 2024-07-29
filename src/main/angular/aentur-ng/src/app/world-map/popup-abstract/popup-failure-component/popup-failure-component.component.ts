import { Component, OnInit } from '@angular/core';

@Component({template: ''})
export class PopupFailureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
