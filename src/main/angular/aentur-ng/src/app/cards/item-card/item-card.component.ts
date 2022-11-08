import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { ItemVO } from 'src/app/vo/item-vo';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input('item')
  item: ItemVO|null=null;

  @Input('equipable')
  equipable: string="N";



  constructor(private rest: RestService) { }

  ngOnInit(): void {
  }

  equip(): void {
    if (!this.item)
      return;
    const observ: Observable<HttpResponse<any>> = this.rest
        .sendPost<any>("/player/equip/"+this.item.id, "", new HttpHeaders());

    firstValueFrom(observ).then(
      resp => {
        window.location.reload();
      },
      err => {
        console.error(err);
      }
    )
  }

  delete(): void {
    if (!this.item)
      return;

    const confirmation: boolean = confirm("Sei sicuro di voler eliminare l'oggetto " + this.item.name + "?");
    if (!confirmation)
      return;

    const observ: Observable<HttpResponse<any>> = this.rest
        .sendDelete<any>("/player/delete/"+this.item.id);

    firstValueFrom(observ).then(
      resp => {
        window.location.reload();
      },
      err => {
        console.error(err);
      }
    )
  }

}
