import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-battle-info',
  templateUrl: './battle-info.component.html',
  styleUrls: ['./battle-info.component.css']
})
export class BattleInfoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BattleInfoComponent>) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }



}
