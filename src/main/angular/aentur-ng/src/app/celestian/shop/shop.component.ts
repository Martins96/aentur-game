import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { ItemVO } from 'src/app/vo/item-vo';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  playerInventory: ItemVO[]=[];
  merchantItems: ItemVO[]=[];
  gold: number = 0;

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getInventory();
    this.getMerchant();
    this.loadGold();
  }

  backToMap() {
    location.href="/?navPage=worldmap";
  }

  private async getInventory() {
    const observ: Observable<HttpResponse<ItemVO[]>> = this.rest
        .sendGet<ItemVO[]>("/api/player/inventory", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerInventory = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  private async getMerchant() {
    const observ: Observable<HttpResponse<ItemVO[]>> = this.rest
        .sendGet<ItemVO[]>("/api/shop/items", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.merchantItems = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  private async loadGold() {
    const observ: Observable<HttpResponse<number>> = this.rest
        .sendGet<number>("/api/player/gold", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.gold = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  itemBought(item: ItemVO): void {
    this.playerInventory.push(item);
    const index = this.merchantItems.indexOf(item);

    if (index !== -1) {
      this.merchantItems.splice(index, 1);
    }
    this.gold = this.gold - item.goldValue;
  }

  itemSold(item: ItemVO): void {
    const index = this.playerInventory.indexOf(item);

    if (index !== -1) {
      this.playerInventory.splice(index, 1);
    }

    this.gold = this.gold + (item.goldValue / 2);
  }


}
