import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { RestService } from 'src/app/rest-service';
import { ItemVO } from 'src/app/vo/item-vo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playerInventory: ItemVO[]=[];
  playerWeapon: ItemVO | null=null;
  playerArmor: ItemVO | null=null;
  playerTalisman: ItemVO | null=null;
  gold: number = 0;


  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getInventory();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
    this.loadGold();
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

  private async getEquipedWeapon() {
    const observ: Observable<HttpResponse<ItemVO|null>> = this.rest
        .sendGet<ItemVO|null>("/api/player/equiped-weapon", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerWeapon = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  private async getEquipedArmor() {
    const observ: Observable<HttpResponse<ItemVO|null>> = this.rest
        .sendGet<ItemVO|null>("/api/player/equiped-armor", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerArmor = resp.body;
      },
      err => {
        console.error("Error BE call: " + err);
        return;
      }
    );
  }

  private async getEquipedTalisman() {
    const observ: Observable<HttpResponse<ItemVO|null>> = this.rest
        .sendGet<ItemVO|null>("/api/player/equiped-talisman", new HttpHeaders({
          "Accept": "application/json"
        }));

    await firstValueFrom(observ).then(
      resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }
        this.playerTalisman = resp.body;
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


  backToMap() {
    location.href="/?navPage=worldmap";
  }

}
