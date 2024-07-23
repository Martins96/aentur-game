import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { PointDescriptionComponent } from './world-map/point-description/point-description.component';
import { LocationHomeComponent } from './world-map/point-description/location-home/location-home.component';
import { StartStoryComponent } from './world-map/start-story/start-story.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { HomeComponent } from './celestian/home/home.component';
import { ShopComponent } from './celestian/shop/shop.component';
import { ItemCardComponent } from './cards/item-card/item-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemCardShopComponent } from './cards/item-card-shop/item-card-shop.component';
import { DarkwoodComponent } from './darkwood/darkwood/darkwood.component';
import { LocationDarkwoodComponent } from './world-map/point-description/location-darkwood/location-darkwood.component';
import { BattleInfoComponent } from './world-map/battle-info/battle-info.component';
import { DarkwoodScenarioEnemyComponent } from './darkwood/darkwood-scenario-enemy/darkwood-scenario-enemy.component';
import { DarkwoodScenarioEventComponent } from './darkwood/darkwood-scenario-event/darkwood-scenario-event.component';
import { EnemyCardComponent } from './cards/enemy-card/enemy-card.component';
import { EnemyManagementComponent } from './enemy/enemy-management/enemy-management.component';
import { EnemyAttackActionComponent } from './enemy/enemy-attack-action/enemy-attack-action.component';
import { EnemyDefenseActionComponent } from './enemy/enemy-defense-action/enemy-defense-action.component';
import { DarkwoodPopupSuccessComponent } from './darkwood/popup/darkwood-popup-success/darkwood-popup-success.component';
import { DarkwoodPopupFailureComponent } from './darkwood/popup/darkwood-popup-failure/darkwood-popup-failure.component';
import { DarkwoodScenarioBossComponent } from './darkwood/darkwood-scenario-boss/darkwood-scenario-boss.component';
import { BossManagementComponent } from './enemy/boss-management/boss-management.component';
import { BossActionComponent } from './enemy/boss-management/boss-action/boss-action.component';
import { DarkwoodBossSuccessComponent } from './darkwood/popup/darkwood-boss-success/darkwood-boss-success.component';
import { DarkwoodBossFailureComponent } from './darkwood/popup/darkwood-boss-failure/darkwood-boss-failure.component';
import { IcelandComponent } from './iceland/iceland/iceland.component';
import { IcelandScenarioBossComponent } from './iceland/iceland-scenario-boss/iceland-scenario-boss.component';
import { IcelandScenarioEnemyComponent } from './iceland/iceland-scenario-enemy/iceland-scenario-enemy.component';
import { IcelandScenarioEventComponent } from './iceland/iceland-scenario-event/iceland-scenario-event.component';
import { LocationIcelandComponent } from './world-map/point-description/location-iceland/location-iceland.component';
import { IcelandPopupSuccessComponent } from './iceland/popup/iceland-popup-success/iceland-popup-success.component';
import { IcelandPopupFailureComponent } from './iceland/popup/iceland-popup-failure/iceland-popup-failure.component';
import { IcelandBossFailureComponent } from './iceland/popup/iceland-boss-failure/iceland-boss-failure.component';
import { IcelandBossSuccessComponent } from './iceland/popup/iceland-boss-success/iceland-boss-success.component';
import { FrozenmountainsComponent } from './frozenmountains/frozenmountains/frozenmountains.component';
import { FrozenmountainsScenarioBossComponent } from './frozenmountains/frozenmountains-scenario-boss/frozenmountains-scenario-boss.component';
import { FrozenmountainsScenarioEnemyComponent } from './frozenmountains/frozenmountains-scenario-enemy/frozenmountains-scenario-enemy.component';
import { FrozenmountainsScenarioEventComponent } from './frozenmountains/frozenmountains-scenario-event/frozenmountains-scenario-event.component';
import { FrozenmountainsBossFailureComponent } from './frozenmountains/popup/frozenmountains-boss-failure/frozenmountains-boss-failure.component';
import { FrozenmountainsBossSuccessComponent } from './frozenmountains/popup/frozenmountains-boss-success/frozenmountains-boss-success.component';
import { FrozenmountainsPopupSuccessComponent } from './frozenmountains/popup/frozenmountains-popup-success/frozenmountains-popup-success.component';
import { FrozenmountainsPopupFailureComponent } from './frozenmountains/popup/frozenmountains-popup-failure/frozenmountains-popup-failure.component';
import { LocationFrozenmountainsComponent } from './world-map/point-description/location-frozenmountains/location-frozenmountains.component';
import { LocationFlamevolcanoComponent } from './world-map/point-description/location-flamevolcano/location-flamevolcano.component';
import { FlamevolcanoComponent } from './flamevolcano/flamevolcano/flamevolcano.component';
import { FlamevolcanoScenarioBossComponent } from './flamevolcano/flamevolcano-scenario-boss/flamevolcano-scenario-boss.component';
import { FlamevolcanoScenarioEventComponent } from './flamevolcano/flamevolcano-scenario-event/flamevolcano-scenario-event.component';
import { FlamevolcanoScenarioEnemyComponent } from './flamevolcano/flamevolcano-scenario-enemy/flamevolcano-scenario-enemy.component';
import { FlamevolcanoBossFailureComponent } from './flamevolcano/popup/flamevolcano-boss-failure/flamevolcano-boss-failure.component';
import { FlamevolcanoBossSuccessComponent } from './flamevolcano/popup/flamevolcano-boss-success/flamevolcano-boss-success.component';
import { FlamevolcanoPopupFailureComponent } from './flamevolcano/popup/flamevolcano-popup-failure/flamevolcano-popup-failure.component';
import { FlamevolcanoPopupSuccessComponent } from './flamevolcano/popup/flamevolcano-popup-success/flamevolcano-popup-success.component';
import { LocationCrimsoncaveComponent } from './world-map/point-description/location-crimsoncave/location-crimsoncave.component';
import { CrimsoncaveComponent } from './crimsoncave/crimsoncave/crimsoncave.component';
import { CrimsoncaveScenarioBossComponent } from './crimsoncave/crimsoncave-scenario-boss/crimsoncave-scenario-boss.component';
import { CrimsoncaveScenarioEventComponent } from './crimsoncave/crimsoncave-scenario-event/crimsoncave-scenario-event.component';
import { CrimsoncaveScenarioEnemyComponent } from './crimsoncave/crimsoncave-scenario-enemy/crimsoncave-scenario-enemy.component';
import { CrimsoncaveBossSuccessComponent } from './crimsoncave/popup/crimsoncave-boss-success/crimsoncave-boss-success.component';
import { CrimsoncaveBossFailureComponent } from './crimsoncave/popup/crimsoncave-boss-failure/crimsoncave-boss-failure.component';
import { CrimsoncavePopupFailureComponent } from './crimsoncave/popup/crimsoncave-popup-failure/crimsoncave-popup-failure.component';
import { CrimsoncavePopupSuccessComponent } from './crimsoncave/popup/crimsoncave-popup-success/crimsoncave-popup-success.component';
import { LocationHottendesertComponent } from './world-map/point-description/location-hottendesert/location-hottendesert.component';
import { HottendesertComponent } from './hottendesert/hottendesert/hottendesert.component';
import { HottendesertScenarioBossComponent } from './hottendesert/hottendesert-scenario-boss/hottendesert-scenario-boss.component';
import { HottendesertScenarioEnemyComponent } from './hottendesert/hottendesert-scenario-enemy/hottendesert-scenario-enemy.component';
import { HottendesertScenarioEventComponent } from './hottendesert/hottendesert-scenario-event/hottendesert-scenario-event.component';
import { HottendesertBossFailureComponent } from './hottendesert/popup/hottendesert-boss-failure/hottendesert-boss-failure.component';
import { HottendesertBossSuccessComponent } from './hottendesert/popup/hottendesert-boss-success/hottendesert-boss-success.component';
import { HottendesertPopupSuccessComponent } from './hottendesert/popup/hottendesert-popup-success/hottendesert-popup-success.component';
import { HottendesertPopupFailureComponent } from './hottendesert/popup/hottendesert-popup-failure/hottendesert-popup-failure.component';
import { GameOverCongratsComponent } from './world-map/game-over-congrats/game-over-congrats.component';
import { DynamiccontentsComponent } from './dynamiccontents/dynamiccontents/dynamiccontents.component';
import { LanguageselectorComponent } from './dynamiccontents/languageselector/languageselector.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    PointDescriptionComponent,
    LocationHomeComponent,
    StartStoryComponent,
    HomeComponent,
    ShopComponent,
    ItemCardComponent,
    ItemCardShopComponent,
    DarkwoodComponent,
    LocationDarkwoodComponent,
    BattleInfoComponent,
    DarkwoodScenarioEnemyComponent,
    DarkwoodScenarioEventComponent,
    EnemyCardComponent,
    EnemyManagementComponent,
    EnemyAttackActionComponent,
    EnemyDefenseActionComponent,
    DarkwoodPopupSuccessComponent,
    DarkwoodPopupFailureComponent,
    DarkwoodScenarioBossComponent,
    BossManagementComponent,
    BossActionComponent,
    DarkwoodBossSuccessComponent,
    DarkwoodBossFailureComponent,
    IcelandComponent,
    IcelandScenarioBossComponent,
    IcelandScenarioEnemyComponent,
    IcelandScenarioEventComponent,
    LocationIcelandComponent,
    IcelandPopupSuccessComponent,
    IcelandPopupFailureComponent,
    IcelandBossFailureComponent,
    IcelandBossSuccessComponent,
    FrozenmountainsComponent,
    FrozenmountainsScenarioBossComponent,
    FrozenmountainsScenarioEnemyComponent,
    FrozenmountainsScenarioEventComponent,
    FrozenmountainsBossFailureComponent,
    FrozenmountainsBossSuccessComponent,
    FrozenmountainsPopupSuccessComponent,
    FrozenmountainsPopupFailureComponent,
    LocationFrozenmountainsComponent,
    LocationFlamevolcanoComponent,
    FlamevolcanoComponent,
    FlamevolcanoScenarioBossComponent,
    FlamevolcanoScenarioEventComponent,
    FlamevolcanoScenarioEnemyComponent,
    FlamevolcanoBossFailureComponent,
    FlamevolcanoBossSuccessComponent,
    FlamevolcanoPopupFailureComponent,
    FlamevolcanoPopupSuccessComponent,
    LocationCrimsoncaveComponent,
    CrimsoncaveComponent,
    CrimsoncaveScenarioBossComponent,
    CrimsoncaveScenarioEventComponent,
    CrimsoncaveScenarioEnemyComponent,
    CrimsoncaveBossSuccessComponent,
    CrimsoncaveBossFailureComponent,
    CrimsoncavePopupFailureComponent,
    CrimsoncavePopupSuccessComponent,
    LocationHottendesertComponent,
    HottendesertComponent,
    HottendesertScenarioBossComponent,
    HottendesertScenarioEnemyComponent,
    HottendesertScenarioEventComponent,
    HottendesertBossFailureComponent,
    HottendesertBossSuccessComponent,
    HottendesertPopupSuccessComponent,
    HottendesertPopupFailureComponent,
    GameOverCongratsComponent,
    DynamiccontentsComponent,
    LanguageselectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
