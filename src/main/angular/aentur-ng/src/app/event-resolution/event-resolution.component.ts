import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { RestService } from '../rest-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DarkwoodPopupFailureComponent } from '../locations/darkwood/popup/darkwood-popup-failure/darkwood-popup-failure.component';

@Component({
  selector: 'app-event-resolution',
  templateUrl: './event-resolution.component.html',
  styleUrls: ['./event-resolution.component.css']
})
export class EventResolutionComponent implements OnInit {

  @Output()
  endScenario: EventEmitter<boolean>=new EventEmitter();

  @Input()
  eventResultMessage: string = "";
  @Input()
  eventResultImage: string|undefined = "";

  disableButton:boolean = false;

  constructor(private rest: RestService, private dialogFail: MatDialog) { }

  ngOnInit(): void {
  }

  async nextStepAction(): Promise<void> {
    this.disableButton = true;
    const adventureFailed: boolean = await this.isAdventureFailed();
    if (adventureFailed) {
      this.openDialogFailure();
    } else {
      await this.nextPathStep();
      this.endScenario.emit(true);
    }
  }

  async isAdventureFailed(): Promise<boolean> {
    const observ: Observable<HttpResponse<boolean>> = this.rest
        .sendGet<boolean>("/api/adventure/isfailed", new HttpHeaders({
          'accept': 'application/json'
        }));

    let result: boolean=false;
    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }
        result = resp.body;
      },
      err => {
        console.error("Error calling BE", err);
      }
    )

    return result;
  }

  async nextPathStep(): Promise<void> {
    const observ: Observable<HttpResponse<void>> = this.rest
        .sendGet<void>("/api/player/increase-step", new HttpHeaders({
          "accept":"application/json"
        }));

    await firstValueFrom(observ).then(
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

  openDialogFailure() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(DarkwoodPopupFailureComponent, dialogConfig);
  }

}
