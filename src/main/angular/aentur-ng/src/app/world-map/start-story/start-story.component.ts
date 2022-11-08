import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-start-story',
  templateUrl: './start-story.component.html',
  styleUrls: ['./start-story.component.css']
})
export class StartStoryComponent implements OnInit {

  currentSlide: number = 1;

  constructor( private dialogRef: MatDialogRef<StartStoryComponent>) { }

  ngOnInit(): void {
  }

  
  close() {
    this.dialogRef.close();
  }

  prev() {
    if (this.currentSlide < 2)
      return;
    this.currentSlide--;
  }

  next() {
    if (this.currentSlide > 4)
      return;
    this.currentSlide++;
  }
}
