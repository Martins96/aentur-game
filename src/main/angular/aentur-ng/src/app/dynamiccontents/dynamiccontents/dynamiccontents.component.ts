import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, firstValueFrom } from 'rxjs';
import { RestService } from 'src/app/rest-service';

@Component({
  selector: 'app-dynamiccontents',
  templateUrl: './dynamiccontents.component.html',
  styleUrls: ['./dynamiccontents.component.css']
})
export class DynamiccontentsComponent implements OnInit{

  @Input('key')
  propertyKey: string = "";
  dynamicContent: string = "";
  

  constructor(private rest: RestService, private sanitizer: DomSanitizer) { }

  public ngOnInit() {
    let dynamicContentText: string|null = null;

    const observ: Observable<HttpResponse<string>> = this.rest
        .sendGetRawText("/api/content/get?key="+this.propertyKey, new HttpHeaders({
          "Accept": "text/html"
        }));

    firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.dynamicContent = resp.body;
      },
      err => {
        console.error("Error BE call: ", err);
        return;
      }
    );

  }

}
