import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { ItemVO } from 'src/app/vo/item-vo';

@Component({
  selector: 'app-item-card-shop',
  templateUrl: './item-card-shop.component.html',
  styleUrls: ['./item-card-shop.component.css']
})
export class ItemCardShopComponent implements OnInit {

  @Input()
  item: ItemVO|undefined=undefined;
  @Input()
  merchant: string='N';
  @Input('gold')
  playerGold: number = 0;

  @Output() 
  itemEmitter: EventEmitter<ItemVO> = new EventEmitter<ItemVO>();

  goldSell: number=0;
  goldBuy: number=0;


  constructor(private rest: RestService) { }

  ngOnInit(): void {
    if (this.item) {
      this.goldSell = this.item.goldValue / 2;
      this.goldBuy = this.item.goldValue;
    }
  }

  sell(): void {
    const confrm: boolean = confirm("Sei sicuro di vendere l'oggetto: " + this.item?.name + "\nper " + this.goldSell + " oro?");
    if (!confrm)
      return;

    const observ: Observable<HttpResponse<ItemVO[]>> = this.rest
        .sendPost<ItemVO[]>("/shop/sell/"+this.item?.id);

    firstValueFrom(observ).then(
      resp => {
        this.itemEmitter.emit(this.item);
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  buy(): void {
    const confrm: boolean = confirm("Sei sicuro di comprare l'oggetto: " + this.item?.name + "\nper " + this.goldBuy + " oro?");
    if (!confrm)
      return;

    const observ: Observable<HttpResponse<ItemVO[]>> = this.rest
        .sendPost<ItemVO[]>("/shop/buy/"+this.item?.id);

    firstValueFrom(observ).then(
      resp => {
        this.itemEmitter.emit(this.item);
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

}
