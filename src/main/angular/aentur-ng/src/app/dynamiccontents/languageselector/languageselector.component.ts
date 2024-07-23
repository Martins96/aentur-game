import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-languageselector',
  templateUrl: './languageselector.component.html',
  styleUrls: ['./languageselector.component.css']
})
export class LanguageselectorComponent {

  constructor(private rest: RestService) { }

  setLanguage(lang: string) {
    const observ: Observable<HttpResponse<null>> = this.rest
        .sendGet<null>("/api/content/setlanguage/"+lang, new HttpHeaders({
          "Accept": "application/json"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || resp.status != 204) {
          console.error("Error BE call: ", resp);
        } else {
          window.location.reload();
        }
      },
      err => {
        console.error("Error BE call: ", err);
      }
    );
  }
}
