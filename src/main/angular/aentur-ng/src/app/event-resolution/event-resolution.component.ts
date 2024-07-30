import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { RestService } from '../rest-service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DarkwoodPopupFailureComponent } from '../locations/darkwood/popup/darkwood-popup-failure/darkwood-popup-failure.component';
import { PopupFailureComponent } from '../world-map/popup-abstract/popup-failure-component/popup-failure-component.component';
import { CrimsoncavePopupFailureComponent } from '../locations/crimsoncave/popup/crimsoncave-popup-failure/crimsoncave-popup-failure.component';
import { FlamevolcanoPopupFailureComponent } from '../locations/flamevolcano/popup/flamevolcano-popup-failure/flamevolcano-popup-failure.component';
import { FrozenmountainsPopupFailureComponent } from '../locations/frozenmountains/popup/frozenmountains-popup-failure/frozenmountains-popup-failure.component';
import { HottendesertPopupFailureComponent } from '../locations/hottendesert/popup/hottendesert-popup-failure/hottendesert-popup-failure.component';
import { ComponentType } from '@angular/cdk/portal';
import { IcelandPopupFailureComponent } from '../locations/iceland/popup/iceland-popup-failure/iceland-popup-failure.component';

@Component({
  selector: 'app-event-resolution',
  templateUrl: './event-resolution.component.html',
  styleUrls: ['./event-resolution.component.css']
})
export class EventResolutionComponent implements OnInit {

  @Output()
  endScenario: EventEmitter<boolean>=new EventEmitter();

  @Input()
  location: string = "";
  @Input()
  eventResultMessage: string = "";
  @Input()
  eventResultImage: string|undefined = "";

  disableButton:boolean = false;

  failurePopup: ComponentType<PopupFailureComponent>|undefined;

  constructor(private rest: RestService, private dialogFail: MatDialog) { }

  ngOnInit(): void {
    switch(this.location) {
      case 'darkwood':
        this.failurePopup = DarkwoodPopupFailureComponent;
        break;
      case 'crimsoncave':
        this.failurePopup = CrimsoncavePopupFailureComponent;
        break;
      case 'flamevolcano':
        this.failurePopup = FlamevolcanoPopupFailureComponent;
        break;
      case 'frozenmountains':
        this.failurePopup = FrozenmountainsPopupFailureComponent;
        break;
      case 'iceland':
        this.failurePopup = IcelandPopupFailureComponent;
        break;
      case 'hottendesert':
        this.failurePopup = HottendesertPopupFailureComponent;
        break;

      default:
        console.error("Error loading popup component, unable to manage location: " + this.location);
        throw new Error("Error loading popup component, unable to manage location: " + this.location);
    }
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
    if (this.failurePopup == undefined) {
      console.error("Error loading popup component");
      throw new Error("Error loading popup component");
    }

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms"
    dialogConfig.closeOnNavigation = true;

    this.dialogFail.open(this.failurePopup, dialogConfig);
  }

}
