import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from '../rest-service';
import { StartStoryComponent } from './start-story/start-story.component';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  activePointId: string;

  constructor(private dialog: MatDialog, private rest: RestService) {
    this.activePointId = "";
  }

  ngOnInit(): void {
    const observ: Observable<HttpResponse<undefined>> = this.rest
        .sendGet<undefined>("/api/location/reset-adventure-stats", new HttpHeaders());

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }




  selectPoint(event: PointerEvent | MouseEvent): void {
    this.activePointId = (event.target as Element).id;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "500ms"

    this.dialog.open(StartStoryComponent, dialogConfig);
  }
}
