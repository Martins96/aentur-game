import { Routes, UrlMatchResult, UrlSegment } from "@angular/router";
import { HomeComponent } from "./celestian/home/home.component";
import { ShopComponent } from "./celestian/shop/shop.component";
import { CrimsoncaveComponent } from "./crimsoncave/crimsoncave/crimsoncave.component";
import { DarkwoodComponent } from "./darkwood/darkwood/darkwood.component";
import { FlamevolcanoComponent } from "./flamevolcano/flamevolcano/flamevolcano.component";
import { FrozenmountainsComponent } from "./frozenmountains/frozenmountains/frozenmountains.component";
import { HottendesertComponent } from "./hottendesert/hottendesert/hottendesert.component";
import { IcelandComponent } from "./iceland/iceland/iceland.component";
import { WorldMapComponent } from "./world-map/world-map.component";

export class RoutesUtils {

    static getRoutes(): Routes {
        return [
        {
          matcher: (u) => this.checkQSUrl(u, [""]),
          component: WorldMapComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "worldmap"),
          component: WorldMapComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "home"),
          component: HomeComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "shop"),
          component: ShopComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "darkwood"),
          component: DarkwoodComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "iceland"),
          component: IcelandComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "frozenmountains"),
          component: FrozenmountainsComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "flamevolcano"),
          component: FlamevolcanoComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "crimsoncave"),
          component: CrimsoncaveComponent
        },
        {
          matcher: (u) => this.checkQSUrl(u, "hottendesert"),
          component: HottendesertComponent
        },
        { path: "", component: WorldMapComponent }
      
      ]
    }
      
    private static checkQSUrl(url: UrlSegment[], flowsToMatch: string|string[]): UrlMatchResult | null{
        
      const params: any = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, p: string) => searchParams.get(p),
      });
      let page = params.navPage;
      
      let selFlows: string[] = []; 
      if (flowsToMatch instanceof Array) {
        selFlows = flowsToMatch;
      } else {
        selFlows.push(flowsToMatch);
      }
  
      for (const s of selFlows) {
        if (page === s) {
          return {
            consumed: url
          }
        }
      }
      
  
  
      return null;
      
    }

}