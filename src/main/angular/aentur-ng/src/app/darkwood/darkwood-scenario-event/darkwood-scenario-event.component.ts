import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable, firstValueFrom } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { EventChoiceVO, EventVO } from 'src/app/vo/event-vo';
import { DarkwoodPopupFailureComponent } from '../popup/darkwood-popup-failure/darkwood-popup-failure.component';

@Component({
  selector: 'app-darkwood-scenario-event',
  templateUrl: './darkwood-scenario-event.component.html',
  styleUrls: ['./darkwood-scenario-event.component.css']
})
export class DarkwoodScenarioEventComponent implements OnInit {

  @Output()
  endScenario: EventEmitter<boolean>=new EventEmitter();

  private location: string = "darkwood";

  disableButton:boolean = false;

  event: EventVO|undefined=undefined;
  eventResult: string|undefined=undefined;

  constructor(private rest: RestService,
    private dialogFail: MatDialog) { }

  ngOnInit(): void {
    this.loadRandomEvent();
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


  loadRandomEvent() {
    const observ: Observable<HttpResponse<EventVO>> = this.rest
        .sendGet<EventVO>("/api/event/get-random-event/"+this.location, new HttpHeaders({
          "accept": "application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Call BE failed ", resp);
          return;
        }
        
        this.event = resp.body;
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }


  sendChoice(i: number, rolld12Str: string, rolld100Str: string) {
    if (!rolld12Str || !parseInt(rolld12Str)) {
      alert("Il campo del tiro D12 deve essere valorizzato con un numero")
      return;
    }
    let rolld12: number = parseInt(rolld12Str);
    if (rolld12 < 1 ||rolld12 > 12) {
      alert("Il campo del tiro D12 contiene numeri non corretti");
      return;
    }
    if (!rolld100Str || !parseInt(rolld100Str)) {
      alert("Il campo del tiro D100 deve essere valorizzato con un numero");
      return;
    }
    let rolld100: number = parseInt(rolld100Str);
    if (rolld100 < 1 || rolld100 > 100) {
      alert("Il campo del tiro D100 contiene numeri non corretti");
      return;
    }

    if (!this.event || !this.event.eventID) {
      alert("Errore nel codice :(");
      return;
    }

    let eventRequest: EventChoiceVO = new EventChoiceVO();
    eventRequest.setLocation= this.location;
    eventRequest.setEventID= this.event.eventID;
    eventRequest.setChoice= i;
    eventRequest.setRollD12= rolld12;
    eventRequest.setRollD100= rolld100;

    const observ: Observable<HttpResponse<string>> = this.rest
        .sendPostGetRawText("/api/event/apply-effect", eventRequest, new HttpHeaders({
          "content-type": "application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Call BE failed ", resp);
          return;
        }
        
        this.eventResult = resp.body;
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
