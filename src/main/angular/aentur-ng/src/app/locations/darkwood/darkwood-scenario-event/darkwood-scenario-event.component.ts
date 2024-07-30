import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { EventChoiceVO, EventResponseVO, EventVO } from 'src/app/vo/event-vo';

@Component({
  selector: 'app-darkwood-scenario-event',
  templateUrl: './darkwood-scenario-event.component.html',
  styleUrls: ['./darkwood-scenario-event.component.css']
})
export class DarkwoodScenarioEventComponent implements OnInit {

  @Output()
  endScenario: EventEmitter<boolean>=new EventEmitter();

  location: string = "darkwood";

  event: EventVO|undefined=undefined;
  eventResultMessage: string|undefined=undefined;
  eventResultImage: string|undefined=undefined;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.loadRandomEvent();
  }

  loadRandomEvent() {
    const observ: Observable<HttpResponse<EventVO>> = this.rest
        .sendGet<EventVO>("/api/event/get-random-event-new/"+this.location, new HttpHeaders({
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

    const observ: Observable<HttpResponse<EventResponseVO>> = this.rest
        .sendPost("/api/event/apply-effect-new", eventRequest, new HttpHeaders({
          "content-type": "application/json",
          "accept": "application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Call BE failed ", resp);
          return;
        }
        
        this.eventResultMessage = resp.body.eventResult;
        this.eventResultImage = 'assets/' + this.location + '/events/results/' + resp.body.imageResultName + '.jpg';
      }, err => {
        console.error("Call BE failed: ", err);
      }
    )
  }

  endScenarioFnc(event: boolean): void {
    this.endScenario.emit(event);
  }

}
