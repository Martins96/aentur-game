import { Component, OnInit, Input } from '@angular/core';
import { EnemyVO } from 'src/app/vo/enemy-vo';

@Component({
  selector: 'app-enemy-card',
  templateUrl: './enemy-card.component.html',
  styleUrls: ['./enemy-card.component.css']
})
export class EnemyCardComponent implements OnInit {

  @Input()
  enemy: EnemyVO|undefined=undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
