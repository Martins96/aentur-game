import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-flamevolcano-scenario-event',
  templateUrl: './flamevolcano-scenario-event.component.html',
  styleUrls: ['./flamevolcano-scenario-event.component.css']
})
export class FlamevolcanoScenarioEventComponent implements OnInit {

  @Output()
  endScenario: EventEmitter<boolean>=new EventEmitter();

  disableButton:boolean = false;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
  }

  async nextStepAction(): Promise<void> {
    this.disableButton = true;
    await this.nextPathStep();
    this.endScenario.emit(true);
  }

  async nextPathStep(): Promise<void> {
    const observ: Observable<HttpResponse<void>> = this.rest
        .sendGet<void>("/player/increase-step", new HttpHeaders({
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

}
