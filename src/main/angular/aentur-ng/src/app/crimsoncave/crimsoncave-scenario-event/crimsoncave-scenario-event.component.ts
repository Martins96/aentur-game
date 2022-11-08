import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { RestService } from 'src/app/rest-service';
import { Observable, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-crimsoncave-scenario-event',
  templateUrl: './crimsoncave-scenario-event.component.html',
  styleUrls: ['./crimsoncave-scenario-event.component.css']
})
export class CrimsoncaveScenarioEventComponent implements OnInit {

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
