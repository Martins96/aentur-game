"use strict";
(self["webpackChunkaentur_ng"] = self["webpackChunkaentur_ng"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.utils */ 1207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = _routes_utils__WEBPACK_IMPORTED_MODULE_0__.RoutesUtils.getRoutes();
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'aentur-ng';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head")(1, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aentur, La grande avventura di Ae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world-map/world-map.component */ 3220);
/* harmony import */ var _world_map_point_description_point_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world-map/point-description/point-description.component */ 6471);
/* harmony import */ var _world_map_point_description_location_home_location_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./world-map/point-description/location-home/location-home.component */ 5877);
/* harmony import */ var _world_map_start_story_start_story_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./world-map/start-story/start-story.component */ 1653);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _celestian_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./celestian/home/home.component */ 342);
/* harmony import */ var _celestian_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./celestian/shop/shop.component */ 2601);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cards/item-card/item-card.component */ 5267);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _cards_item_card_shop_item_card_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards/item-card-shop/item-card-shop.component */ 2136);
/* harmony import */ var _darkwood_darkwood_darkwood_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./darkwood/darkwood/darkwood.component */ 5264);
/* harmony import */ var _world_map_point_description_location_darkwood_location_darkwood_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./world-map/point-description/location-darkwood/location-darkwood.component */ 4628);
/* harmony import */ var _world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./world-map/battle-info/battle-info.component */ 8397);
/* harmony import */ var _darkwood_darkwood_scenario_enemy_darkwood_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./darkwood/darkwood-scenario-enemy/darkwood-scenario-enemy.component */ 9439);
/* harmony import */ var _darkwood_darkwood_scenario_event_darkwood_scenario_event_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./darkwood/darkwood-scenario-event/darkwood-scenario-event.component */ 5017);
/* harmony import */ var _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cards/enemy-card/enemy-card.component */ 3422);
/* harmony import */ var _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./enemy/enemy-management/enemy-management.component */ 7413);
/* harmony import */ var _enemy_enemy_attack_action_enemy_attack_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./enemy/enemy-attack-action/enemy-attack-action.component */ 5151);
/* harmony import */ var _enemy_enemy_defense_action_enemy_defense_action_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./enemy/enemy-defense-action/enemy-defense-action.component */ 808);
/* harmony import */ var _darkwood_popup_darkwood_popup_success_darkwood_popup_success_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./darkwood/popup/darkwood-popup-success/darkwood-popup-success.component */ 9202);
/* harmony import */ var _darkwood_popup_darkwood_popup_failure_darkwood_popup_failure_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./darkwood/popup/darkwood-popup-failure/darkwood-popup-failure.component */ 1890);
/* harmony import */ var _darkwood_darkwood_scenario_boss_darkwood_scenario_boss_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./darkwood/darkwood-scenario-boss/darkwood-scenario-boss.component */ 9329);
/* harmony import */ var _enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./enemy/boss-management/boss-management.component */ 2102);
/* harmony import */ var _enemy_boss_management_boss_action_boss_action_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./enemy/boss-management/boss-action/boss-action.component */ 4992);
/* harmony import */ var _darkwood_popup_darkwood_boss_success_darkwood_boss_success_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./darkwood/popup/darkwood-boss-success/darkwood-boss-success.component */ 5379);
/* harmony import */ var _darkwood_popup_darkwood_boss_failure_darkwood_boss_failure_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./darkwood/popup/darkwood-boss-failure/darkwood-boss-failure.component */ 4789);
/* harmony import */ var _iceland_iceland_iceland_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./iceland/iceland/iceland.component */ 1389);
/* harmony import */ var _iceland_iceland_scenario_boss_iceland_scenario_boss_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./iceland/iceland-scenario-boss/iceland-scenario-boss.component */ 1816);
/* harmony import */ var _iceland_iceland_scenario_enemy_iceland_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./iceland/iceland-scenario-enemy/iceland-scenario-enemy.component */ 8444);
/* harmony import */ var _iceland_iceland_scenario_event_iceland_scenario_event_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./iceland/iceland-scenario-event/iceland-scenario-event.component */ 3782);
/* harmony import */ var _world_map_point_description_location_iceland_location_iceland_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./world-map/point-description/location-iceland/location-iceland.component */ 3740);
/* harmony import */ var _iceland_popup_iceland_popup_success_iceland_popup_success_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./iceland/popup/iceland-popup-success/iceland-popup-success.component */ 4435);
/* harmony import */ var _iceland_popup_iceland_popup_failure_iceland_popup_failure_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./iceland/popup/iceland-popup-failure/iceland-popup-failure.component */ 9694);
/* harmony import */ var _iceland_popup_iceland_boss_failure_iceland_boss_failure_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iceland/popup/iceland-boss-failure/iceland-boss-failure.component */ 5186);
/* harmony import */ var _iceland_popup_iceland_boss_success_iceland_boss_success_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./iceland/popup/iceland-boss-success/iceland-boss-success.component */ 3254);
/* harmony import */ var _frozenmountains_frozenmountains_frozenmountains_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./frozenmountains/frozenmountains/frozenmountains.component */ 5805);
/* harmony import */ var _frozenmountains_frozenmountains_scenario_boss_frozenmountains_scenario_boss_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./frozenmountains/frozenmountains-scenario-boss/frozenmountains-scenario-boss.component */ 4489);
/* harmony import */ var _frozenmountains_frozenmountains_scenario_enemy_frozenmountains_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./frozenmountains/frozenmountains-scenario-enemy/frozenmountains-scenario-enemy.component */ 8872);
/* harmony import */ var _frozenmountains_frozenmountains_scenario_event_frozenmountains_scenario_event_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./frozenmountains/frozenmountains-scenario-event/frozenmountains-scenario-event.component */ 252);
/* harmony import */ var _frozenmountains_popup_frozenmountains_boss_failure_frozenmountains_boss_failure_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./frozenmountains/popup/frozenmountains-boss-failure/frozenmountains-boss-failure.component */ 3561);
/* harmony import */ var _frozenmountains_popup_frozenmountains_boss_success_frozenmountains_boss_success_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./frozenmountains/popup/frozenmountains-boss-success/frozenmountains-boss-success.component */ 5140);
/* harmony import */ var _frozenmountains_popup_frozenmountains_popup_success_frozenmountains_popup_success_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./frozenmountains/popup/frozenmountains-popup-success/frozenmountains-popup-success.component */ 8227);
/* harmony import */ var _frozenmountains_popup_frozenmountains_popup_failure_frozenmountains_popup_failure_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./frozenmountains/popup/frozenmountains-popup-failure/frozenmountains-popup-failure.component */ 489);
/* harmony import */ var _world_map_point_description_location_frozenmountains_location_frozenmountains_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./world-map/point-description/location-frozenmountains/location-frozenmountains.component */ 6794);
/* harmony import */ var _world_map_point_description_location_flamevolcano_location_flamevolcano_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./world-map/point-description/location-flamevolcano/location-flamevolcano.component */ 9791);
/* harmony import */ var _flamevolcano_flamevolcano_flamevolcano_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./flamevolcano/flamevolcano/flamevolcano.component */ 208);
/* harmony import */ var _flamevolcano_flamevolcano_scenario_boss_flamevolcano_scenario_boss_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./flamevolcano/flamevolcano-scenario-boss/flamevolcano-scenario-boss.component */ 2712);
/* harmony import */ var _flamevolcano_flamevolcano_scenario_event_flamevolcano_scenario_event_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./flamevolcano/flamevolcano-scenario-event/flamevolcano-scenario-event.component */ 2338);
/* harmony import */ var _flamevolcano_flamevolcano_scenario_enemy_flamevolcano_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./flamevolcano/flamevolcano-scenario-enemy/flamevolcano-scenario-enemy.component */ 8223);
/* harmony import */ var _flamevolcano_popup_flamevolcano_boss_failure_flamevolcano_boss_failure_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./flamevolcano/popup/flamevolcano-boss-failure/flamevolcano-boss-failure.component */ 788);
/* harmony import */ var _flamevolcano_popup_flamevolcano_boss_success_flamevolcano_boss_success_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./flamevolcano/popup/flamevolcano-boss-success/flamevolcano-boss-success.component */ 6226);
/* harmony import */ var _flamevolcano_popup_flamevolcano_popup_failure_flamevolcano_popup_failure_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./flamevolcano/popup/flamevolcano-popup-failure/flamevolcano-popup-failure.component */ 4194);
/* harmony import */ var _flamevolcano_popup_flamevolcano_popup_success_flamevolcano_popup_success_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./flamevolcano/popup/flamevolcano-popup-success/flamevolcano-popup-success.component */ 6243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/core */ 2560);


























































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_55__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_2__.WorldMapComponent,
        _world_map_point_description_point_description_component__WEBPACK_IMPORTED_MODULE_3__.PointDescriptionComponent,
        _world_map_point_description_location_home_location_home_component__WEBPACK_IMPORTED_MODULE_4__.LocationHomeComponent,
        _world_map_start_story_start_story_component__WEBPACK_IMPORTED_MODULE_5__.StartStoryComponent,
        _celestian_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _celestian_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__.ShopComponent,
        _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_8__.ItemCardComponent,
        _cards_item_card_shop_item_card_shop_component__WEBPACK_IMPORTED_MODULE_9__.ItemCardShopComponent,
        _darkwood_darkwood_darkwood_component__WEBPACK_IMPORTED_MODULE_10__.DarkwoodComponent,
        _world_map_point_description_location_darkwood_location_darkwood_component__WEBPACK_IMPORTED_MODULE_11__.LocationDarkwoodComponent,
        _world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_12__.BattleInfoComponent,
        _darkwood_darkwood_scenario_enemy_darkwood_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_13__.DarkwoodScenarioEnemyComponent,
        _darkwood_darkwood_scenario_event_darkwood_scenario_event_component__WEBPACK_IMPORTED_MODULE_14__.DarkwoodScenarioEventComponent,
        _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_15__.EnemyCardComponent,
        _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_16__.EnemyManagementComponent,
        _enemy_enemy_attack_action_enemy_attack_action_component__WEBPACK_IMPORTED_MODULE_17__.EnemyAttackActionComponent,
        _enemy_enemy_defense_action_enemy_defense_action_component__WEBPACK_IMPORTED_MODULE_18__.EnemyDefenseActionComponent,
        _darkwood_popup_darkwood_popup_success_darkwood_popup_success_component__WEBPACK_IMPORTED_MODULE_19__.DarkwoodPopupSuccessComponent,
        _darkwood_popup_darkwood_popup_failure_darkwood_popup_failure_component__WEBPACK_IMPORTED_MODULE_20__.DarkwoodPopupFailureComponent,
        _darkwood_darkwood_scenario_boss_darkwood_scenario_boss_component__WEBPACK_IMPORTED_MODULE_21__.DarkwoodScenarioBossComponent,
        _enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_22__.BossManagementComponent,
        _enemy_boss_management_boss_action_boss_action_component__WEBPACK_IMPORTED_MODULE_23__.BossActionComponent,
        _darkwood_popup_darkwood_boss_success_darkwood_boss_success_component__WEBPACK_IMPORTED_MODULE_24__.DarkwoodBossSuccessComponent,
        _darkwood_popup_darkwood_boss_failure_darkwood_boss_failure_component__WEBPACK_IMPORTED_MODULE_25__.DarkwoodBossFailureComponent,
        _iceland_iceland_iceland_component__WEBPACK_IMPORTED_MODULE_26__.IcelandComponent,
        _iceland_iceland_scenario_boss_iceland_scenario_boss_component__WEBPACK_IMPORTED_MODULE_27__.IcelandScenarioBossComponent,
        _iceland_iceland_scenario_enemy_iceland_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_28__.IcelandScenarioEnemyComponent,
        _iceland_iceland_scenario_event_iceland_scenario_event_component__WEBPACK_IMPORTED_MODULE_29__.IcelandScenarioEventComponent,
        _world_map_point_description_location_iceland_location_iceland_component__WEBPACK_IMPORTED_MODULE_30__.LocationIcelandComponent,
        _iceland_popup_iceland_popup_success_iceland_popup_success_component__WEBPACK_IMPORTED_MODULE_31__.IcelandPopupSuccessComponent,
        _iceland_popup_iceland_popup_failure_iceland_popup_failure_component__WEBPACK_IMPORTED_MODULE_32__.IcelandPopupFailureComponent,
        _iceland_popup_iceland_boss_failure_iceland_boss_failure_component__WEBPACK_IMPORTED_MODULE_33__.IcelandBossFailureComponent,
        _iceland_popup_iceland_boss_success_iceland_boss_success_component__WEBPACK_IMPORTED_MODULE_34__.IcelandBossSuccessComponent,
        _frozenmountains_frozenmountains_frozenmountains_component__WEBPACK_IMPORTED_MODULE_35__.FrozenmountainsComponent,
        _frozenmountains_frozenmountains_scenario_boss_frozenmountains_scenario_boss_component__WEBPACK_IMPORTED_MODULE_36__.FrozenmountainsScenarioBossComponent,
        _frozenmountains_frozenmountains_scenario_enemy_frozenmountains_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_37__.FrozenmountainsScenarioEnemyComponent,
        _frozenmountains_frozenmountains_scenario_event_frozenmountains_scenario_event_component__WEBPACK_IMPORTED_MODULE_38__.FrozenmountainsScenarioEventComponent,
        _frozenmountains_popup_frozenmountains_boss_failure_frozenmountains_boss_failure_component__WEBPACK_IMPORTED_MODULE_39__.FrozenmountainsBossFailureComponent,
        _frozenmountains_popup_frozenmountains_boss_success_frozenmountains_boss_success_component__WEBPACK_IMPORTED_MODULE_40__.FrozenmountainsBossSuccessComponent,
        _frozenmountains_popup_frozenmountains_popup_success_frozenmountains_popup_success_component__WEBPACK_IMPORTED_MODULE_41__.FrozenmountainsPopupSuccessComponent,
        _frozenmountains_popup_frozenmountains_popup_failure_frozenmountains_popup_failure_component__WEBPACK_IMPORTED_MODULE_42__.FrozenmountainsPopupFailureComponent,
        _world_map_point_description_location_frozenmountains_location_frozenmountains_component__WEBPACK_IMPORTED_MODULE_43__.LocationFrozenmountainsComponent,
        _world_map_point_description_location_flamevolcano_location_flamevolcano_component__WEBPACK_IMPORTED_MODULE_44__.LocationFlamevolcanoComponent,
        _flamevolcano_flamevolcano_flamevolcano_component__WEBPACK_IMPORTED_MODULE_45__.FlamevolcanoComponent,
        _flamevolcano_flamevolcano_scenario_boss_flamevolcano_scenario_boss_component__WEBPACK_IMPORTED_MODULE_46__.FlamevolcanoScenarioBossComponent,
        _flamevolcano_flamevolcano_scenario_event_flamevolcano_scenario_event_component__WEBPACK_IMPORTED_MODULE_47__.FlamevolcanoScenarioEventComponent,
        _flamevolcano_flamevolcano_scenario_enemy_flamevolcano_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_48__.FlamevolcanoScenarioEnemyComponent,
        _flamevolcano_popup_flamevolcano_boss_failure_flamevolcano_boss_failure_component__WEBPACK_IMPORTED_MODULE_49__.FlamevolcanoBossFailureComponent,
        _flamevolcano_popup_flamevolcano_boss_success_flamevolcano_boss_success_component__WEBPACK_IMPORTED_MODULE_50__.FlamevolcanoBossSuccessComponent,
        _flamevolcano_popup_flamevolcano_popup_failure_flamevolcano_popup_failure_component__WEBPACK_IMPORTED_MODULE_51__.FlamevolcanoPopupFailureComponent,
        _flamevolcano_popup_flamevolcano_popup_success_flamevolcano_popup_success_component__WEBPACK_IMPORTED_MODULE_52__.FlamevolcanoPopupSuccessComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_55__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_56__.BrowserAnimationsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_57__.MatDialogModule] }); })();


/***/ }),

/***/ 3422:
/*!**********************************************************!*\
  !*** ./src/app/cards/enemy-card/enemy-card.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnemyCardComponent": () => (/* binding */ EnemyCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function EnemyCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.enemy.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/enemies/" + ctx_r0.enemy.id + "e.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.enemy.description);
} }
function EnemyCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error :(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class EnemyCardComponent {
    constructor() {
        this.enemy = undefined;
    }
    ngOnInit() {
    }
}
EnemyCardComponent.ɵfac = function EnemyCardComponent_Factory(t) { return new (t || EnemyCardComponent)(); };
EnemyCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnemyCardComponent, selectors: [["app-enemy-card"]], inputs: { enemy: "enemy" }, decls: 3, vars: 2, consts: [[1, "card-container"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "title"], [1, "image"], [3, "src"], [1, "description"], [1, "empty"]], template: function EnemyCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EnemyCardComponent_div_1_Template, 9, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnemyCardComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enemy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.enemy);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".card-container[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    width: 400px;\r\n    border: 1px solid tomato;\r\n    box-shadow: 0 0 5px black;\r\n    border-radius: 3px;\r\n    background-color: rgb(255, 177, 177);\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    padding: 1px 10px;\r\n    margin: 0;\r\n    background-color: rgba(0,0,0,0.05);\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    width: 250px;\r\n    object-fit: cover;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    border-bottom: 1px dotted lightgrey;\r\n    align-content: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: justify;\r\n}\r\n\r\n.empty[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: gray;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZW15LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJlbmVteS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRvbWF0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNzcsIDE3Nyk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbi50aXRsZSBoMyB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGxpZ2h0Z3JleTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5lbXB0eSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 2136:
/*!******************************************************************!*\
  !*** ./src/app/cards/item-card-shop/item-card-shop.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCardShopComponent": () => (/* binding */ ItemCardShopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);






function ItemCardShopComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Vendi a:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemCardShopComponent_div_1_div_8_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.sell()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vendi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.goldSell);
} }
function ItemCardShopComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Compra a:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemCardShopComponent_div_1_div_9_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.buy()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.goldBuy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.playerGold < ctx_r3.goldBuy);
} }
function ItemCardShopComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ItemCardShopComponent_div_1_div_8_Template, 10, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ItemCardShopComponent_div_1_div_9_Template, 10, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/items/" + ctx_r0.item.id + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.item.effect, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.merchant === "N");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.merchant === "Y");
} }
function ItemCardShopComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Slot Vuoto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class ItemCardShopComponent {
    constructor(rest) {
        this.rest = rest;
        this.item = undefined;
        this.merchant = 'N';
        this.playerGold = 0;
        this.itemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.goldSell = 0;
        this.goldBuy = 0;
    }
    ngOnInit() {
        if (this.item) {
            this.goldSell = this.item.goldValue / 2;
            this.goldBuy = this.item.goldValue;
        }
    }
    sell() {
        const confrm = confirm("Sei sicuro di vendere l'oggetto: " + this.item?.name + "\nper " + this.goldSell + " oro?");
        if (!confrm)
            return;
        const observ = this.rest
            .sendPost("/shop/sell/" + this.item?.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(observ).then(resp => {
            this.itemEmitter.emit(this.item);
        }, err => {
            console.error("Error BE call: " + err);
            return;
        });
    }
    buy() {
        const confrm = confirm("Sei sicuro di comprare l'oggetto: " + this.item?.name + "\nper " + this.goldBuy + " oro?");
        if (!confrm)
            return;
        const observ = this.rest
            .sendPost("/shop/buy/" + this.item?.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(observ).then(resp => {
            this.itemEmitter.emit(this.item);
        }, err => {
            console.error("Error BE call: " + err);
            return;
        });
    }
}
ItemCardShopComponent.ɵfac = function ItemCardShopComponent_Factory(t) { return new (t || ItemCardShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
ItemCardShopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemCardShopComponent, selectors: [["app-item-card-shop"]], inputs: { item: "item", merchant: "merchant", playerGold: ["gold", "playerGold"] }, outputs: { itemEmitter: "itemEmitter" }, decls: 3, vars: 2, consts: [[1, "card-container"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "title"], [1, "image"], [3, "src"], [1, "effect"], [3, "innerHTML"], ["class", "trade", 4, "ngIf"], [1, "trade"], [1, "gold"], ["id", "gold-sell-val"], ["src", "assets/worldmap/gold.png"], [3, "click"], ["id", "gold-val"], [3, "disabled", "click"], [1, "empty"]], template: function ItemCardShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemCardShopComponent_div_1_Template, 10, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemCardShopComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".card-container[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    width: 300px;\r\n    border: 1px solid burlywood;\r\n    box-shadow: 0 0 5px black;\r\n    border-radius: 3px;\r\n    background-color: antiquewhite;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    padding: 1px 10px;\r\n    margin: 0;\r\n    background-color: rgba(0,0,0,0.05);\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    width: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    border-bottom: 1px dotted lightgrey;\r\n    align-content: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: justify;\r\n}\r\n\r\n.empty[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: gray;\r\n}\r\n\r\n.effect[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.trade[_ngcontent-%COMP%] {\r\n    padding: 0 5%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    border: 2px solid saddlebrown;\r\n    background-color: chocolate;\r\n    border-radius: 2px;\r\n    outline: none;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: brown;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active {\r\n    background-color: lightsalmon;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n    background-color: gainsboro;\r\n    color: red;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n    margin: auto;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   #gold-val[_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tY2FyZC1zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6Iml0ZW0tY2FyZC1zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJ1cmx5d29vZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wNSk7XHJcbn1cclxuXHJcbi50aXRsZSBoMyB7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1ne1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5pbWFnZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGxpZ2h0Z3JleTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5lbXB0eSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmVmZmVjdCB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG4udHJhZGUge1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgc2FkZGxlYnJvd247XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5nb2xkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbi5nb2xkIGltZyB7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmdvbGQgI2dvbGQtdmFsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5267:
/*!********************************************************!*\
  !*** ./src/app/cards/item-card/item-card.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCardComponent": () => (/* binding */ ItemCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function ItemCardComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemCardComponent_div_1_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.equip()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Equipaggia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemCardComponent_div_1_div_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.delete()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Elimina");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function ItemCardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ItemCardComponent_div_1_div_8_Template, 7, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/items/" + ctx_r0.item.id + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.item.effect, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.equipable === "Y");
} }
function ItemCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Slot Vuoto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class ItemCardComponent {
    constructor(rest) {
        this.rest = rest;
        this.item = null;
        this.equipable = "N";
    }
    ngOnInit() {
    }
    equip() {
        if (!this.item)
            return;
        const observ = this.rest
            .sendPost("/player/equip/" + this.item.id, "", new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(observ).then(resp => {
            window.location.reload();
        }, err => {
            console.error(err);
        });
    }
    delete() {
        if (!this.item)
            return;
        const confirmation = confirm("Sei sicuro di voler eliminare l'oggetto " + this.item.name + "?");
        if (!confirmation)
            return;
        const observ = this.rest
            .sendDelete("/player/delete/" + this.item.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(observ).then(resp => {
            window.location.reload();
        }, err => {
            console.error(err);
        });
    }
}
ItemCardComponent.ɵfac = function ItemCardComponent_Factory(t) { return new (t || ItemCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
ItemCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemCardComponent, selectors: [["app-item-card"]], inputs: { item: "item", equipable: "equipable" }, decls: 3, vars: 2, consts: [[1, "card-container"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "title"], [1, "image"], [3, "src"], [1, "effect"], [3, "innerHTML"], ["class", "buttons", 4, "ngIf"], [1, "buttons"], [3, "click"], [1, "empty"]], template: function ItemCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemCardComponent_div_1_Template, 9, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemCardComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.item);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".card-container[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    width: 300px;\r\n    border: 1px solid burlywood;\r\n    box-shadow: 0 0 5px black;\r\n    border-radius: 3px;\r\n    background-color: antiquewhite;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    padding: 1px 10px;\r\n    margin: 0;\r\n    background-color: rgba(0,0,0,0.05);\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 5px 0;\r\n}\r\n\r\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n    width: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n    border-bottom: 1px dotted lightgrey;\r\n    align-content: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    text-align: justify;\r\n}\r\n\r\n.empty[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: gray;\r\n}\r\n\r\n.effect[_ngcontent-%COMP%] {\r\n    height: 90px;\r\n    margin: 5px 0;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n    padding: 0 5%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    border: 2px solid saddlebrown;\r\n    background-color: chocolate;\r\n    border-radius: 2px;\r\n    outline: none;\r\n    transition: 0.5s;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: brown;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active {\r\n    background-color: lightsalmon;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztJQUNULGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6Iml0ZW0tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBidXJseXdvb2Q7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4udGl0bGUgaDMge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmltYWdlIGltZ3tcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uaW1hZ2Uge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBsaWdodGdyZXk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uZW1wdHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5lZmZlY3Qge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgcGFkZGluZzogMCA1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgc2FkZGxlYnJvd247XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaG9jb2xhdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XHJcbn1cclxuYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNhbG1vbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 342:
/*!**************************************************!*\
  !*** ./src/app/celestian/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/item-card/item-card.component */ 5267);








function HomeComponent_div_36_app_item_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-item-card", 6);
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r3)("equipable", "Y");
  }
}

function HomeComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HomeComponent_div_36_app_item_card_1_Template, 1, 2, "app-item-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.playerInventory);
  }
}

function HomeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12)(1, "p")(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "L'inventario \u00E8 vuoto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

class HomeComponent {
  constructor(rest) {
    this.rest = rest;
    this.playerInventory = [];
    this.playerWeapon = null;
    this.playerArmor = null;
    this.playerTalisman = null;
    this.gold = 0;
  }

  ngOnInit() {
    this.getInventory();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
    this.loadGold();
  }

  getInventory() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/inventory", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.playerInventory = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedWeapon() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/equiped-weapon", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this2.playerWeapon = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedArmor() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/player/equiped-armor", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this3.playerArmor = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedTalisman() {
    var _this4 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this4.rest.sendGet("/player/equiped-talisman", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this4.playerTalisman = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  loadGold() {
    var _this5 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this5.rest.sendGet("/player/gold", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this5.gold = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

}

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 38,
  vars: 9,
  consts: [[1, "close-btn", 3, "click"], ["src", "assets/worldmap/exit-icon.png"], [1, "intro-img"], [1, "disclaimer"], [1, "equipment"], [1, "equipment-inner"], [3, "item", "equipable"], [1, "gold"], ["id", "gold-num"], ["src", "assets/worldmap/gold.png"], [1, "inventory"], ["class", "inventory-inner", 4, "ngIf"], [1, "inventory-inner"], [3, "item", "equipable", 4, "ngFor", "ngForOf"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_0_listener() {
        return ctx.backToMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Esci");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "<Casa>");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Nonostante tutto, tornare a casa e' sempre confortevole. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Uca");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " e' contento di vederti e ti chiede se ti serve aiuto per gestire il tuo inventario.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Mentre riposi vicino al caminetto Uca sistema il tuo equipaggiamento e ti chiede cosa intendi portare con te.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 4)(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Equipaggiamento");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 5)(19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "app-item-card", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-item-card", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "app-item-card", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 7)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Oro posseduto:\u00A0\u00A0\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 10)(32, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Inventario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, HomeComponent_div_36_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, HomeComponent_div_37_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx.playerWeapon)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx.playerArmor)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx.playerTalisman)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.gold);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playerInventory && ctx.playerInventory.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.playerInventory || ctx.playerInventory.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__.ItemCardComponent],
  styles: ["span[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 0.9em;\r\n}\r\n\r\n.equipment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #ccc;\r\n    box-shadow: 0 0 10px black;\r\n    padding: 20px 10px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.equipment-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%] {\r\n    background-image: url('headimg-home.jpg');\r\n}\r\n\r\n.inventory[_ngcontent-%COMP%] {\r\n    padding: 0 10px 100px 10px;\r\n}\r\n\r\n.inventory-inner[_ngcontent-%COMP%] {\r\n    margin: 0 4%;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.inventory-inner[_ngcontent-%COMP%]   app-item-card[_ngcontent-%COMP%] {\r\n    margin: 10px 3%;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: 5px 0;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   #gold-num[_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n    font-family: 'fantasy-title';\r\n    font-size: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx5Q0FBOEQ7QUFDbEU7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeS1hbHQnO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmVxdWlwbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmludHJvLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9ob21lL2hlYWRpbWctaG9tZS5qcGcnKTtcclxufVxyXG5cclxuLmludmVudG9yeSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHggMTAwcHggMTBweDtcclxufVxyXG4uaW52ZW50b3J5LWlubmVyIHtcclxuICAgIG1hcmdpbjogMCA0JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5pbnZlbnRvcnktaW5uZXIgYXBwLWl0ZW0tY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHggMyU7XHJcbn1cclxuXHJcblxyXG4uZ29sZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uZ29sZCBzcGFue1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4uZ29sZCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5nb2xkICNnb2xkLW51bSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5LXRpdGxlJztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59Il19 */"]
});

/***/ }),

/***/ 2601:
/*!**************************************************!*\
  !*** ./src/app/celestian/shop/shop.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopComponent": () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_shop_item_card_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/item-card-shop/item-card-shop.component */ 2136);








function ShopComponent_app_item_card_shop_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-item-card-shop", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemEmitter", function ShopComponent_app_item_card_shop_23_Template_app_item_card_shop_itemEmitter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.itemBought($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r3)("merchant", "Y")("gold", ctx_r0.gold);
  }
}

function ShopComponent_div_29_app_item_card_shop_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-item-card-shop", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemEmitter", function ShopComponent_div_29_app_item_card_shop_1_Template_app_item_card_shop_itemEmitter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.itemSold($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", item_r7)("merchant", "N")("gold", ctx_r6.gold);
  }
}

function ShopComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShopComponent_div_29_app_item_card_shop_1_Template, 1, 3, "app-item-card-shop", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.playerInventory);
  }
}

function ShopComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "p")(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "L'inventario \u00E8 vuoto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}

class ShopComponent {
  constructor(rest) {
    this.rest = rest;
    this.playerInventory = [];
    this.merchantItems = [];
    this.gold = 0;
  }

  ngOnInit() {
    this.getInventory();
    this.getMerchant();
    this.loadGold();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  getInventory() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/inventory", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.playerInventory = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getMerchant() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/shop/items", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this2.merchantItems = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  loadGold() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/player/gold", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this3.gold = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  itemBought(item) {
    this.playerInventory.push(item);
    const index = this.merchantItems.indexOf(item);

    if (index !== -1) {
      this.merchantItems.splice(index, 1);
    }

    this.gold = this.gold - item.goldValue;
  }

  itemSold(item) {
    const index = this.playerInventory.indexOf(item);

    if (index !== -1) {
      this.playerInventory.splice(index, 1);
    }

    this.gold = this.gold + item.goldValue / 2;
  }

}

ShopComponent.ɵfac = function ShopComponent_Factory(t) {
  return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

ShopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ShopComponent,
  selectors: [["app-shop"]],
  decls: 31,
  vars: 4,
  consts: [[1, "close-btn", 3, "click"], ["src", "assets/worldmap/exit-icon.png"], [1, "intro-img"], [1, "disclaimer"], [1, "gold"], ["id", "gold-num"], ["src", "assets/worldmap/gold.png"], [1, "merchant"], [1, "merchant-inner"], [3, "item", "merchant", "gold", "itemEmitter", 4, "ngFor", "ngForOf"], [1, "inventory"], ["class", "inventory-inner", 4, "ngIf"], [3, "item", "merchant", "gold", "itemEmitter"], [1, "inventory-inner"]],
  template: function ShopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShopComponent_Template_div_click_0_listener() {
        return ctx.backToMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Esci");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "<Negozio>");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3)(8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "L'odore del ferro battuto riempie l'aria, dalla fucina escono rumori di martello e calore.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Ti si avvicina il mercante offrendoti una vista completa della merce, non sembrano esserci molti clienti e in questo modo riesci a vedere meglio il negozio. \"Sono merci di prima qualita'\", dice il venditore, \"Ne forgiamo di diverse ogni volta\". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Oro posseduto:\u00A0\u00A0\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7)(19, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Acquista dal negozio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div")(22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ShopComponent_app_item_card_shop_23_Template, 1, 3, "app-item-card-shop", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10)(25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Vendi dall'inventario");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ShopComponent_div_29_Template, 2, 1, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ShopComponent_div_30_Template, 4, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.gold);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.merchantItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.playerInventory && ctx.playerInventory.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.playerInventory || ctx.playerInventory.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _cards_item_card_shop_item_card_shop_component__WEBPACK_IMPORTED_MODULE_2__.ItemCardShopComponent],
  styles: ["span[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 0.9em;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%] {\r\n    background-image: url('headimg-shop.jpg');\r\n    width: 100%;\r\n    height: 600px;\r\n    text-align: center;\r\n    color: rgba(0,0,0,0.5);\r\n    transition-duration: 2s;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%]:hover {\r\n    color: rgba(0,0,0,0.95);\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding-top: 100px;\r\n    text-shadow: 0 0 10px rgba(255,255,255,0.9);\r\n    font-size: 3em;\r\n}\r\n\r\n.merchant[_ngcontent-%COMP%] {\r\n    background-color: darkgoldenrod;\r\n}\r\n\r\n.merchant[_ngcontent-%COMP%], .inventory[_ngcontent-%COMP%] {\r\n    padding: 0 10px 100px 10px;\r\n}\r\n\r\n.merchant-inner[_ngcontent-%COMP%], .inventory-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.merchant-inner[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.inventory-inner[_ngcontent-%COMP%] {\r\n    margin: 0 2%;\r\n}\r\n\r\n.merchant-inner[_ngcontent-%COMP%]   app-item-card-shop[_ngcontent-%COMP%] {\r\n    margin: 10px 5px;\r\n}\r\n\r\n.inventory-inner[_ngcontent-%COMP%]   app-item-card-shop[_ngcontent-%COMP%] {\r\n    margin: 10px 2%;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 1%;\r\n    left: 1%;\r\n    display: flex;\r\n    cursor: pointer;\r\n    background-color: rgba(255,255,255,0.2);\r\n    border-radius: 20px;\r\n    padding: 5px 15px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: rgba(255,255,255,0.6);\r\n    font-weight: bold;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    clear: both;\r\n}\r\n\r\n.close-btn[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    padding-left: 5px;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin: 5px 0;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 25px;\r\n}\r\n\r\n.gold[_ngcontent-%COMP%]   #gold-num[_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n    font-family: 'fantasy-title';\r\n    font-size: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5Q0FBOEQ7SUFDOUQsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksMEJBQTBCO0FBQzlCOztBQUNBOztJQUVJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSx1Q0FBdUM7SUFDdkMsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQiIsImZpbGUiOiJzaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeS1hbHQnO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmludHJvLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zaG9wL2hlYWRpbWctc2hvcC5qcGcnKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcclxufVxyXG5cclxuLmludHJvLWltZzpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjk1KTtcclxufVxyXG5cclxuLmludHJvLWltZyBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG4gICAgZm9udC1zaXplOiAzZW07XHJcbn1cclxuXHJcbi5tZXJjaGFudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG59XHJcblxyXG4ubWVyY2hhbnQsXHJcbi5pbnZlbnRvcnkge1xyXG4gICAgcGFkZGluZzogMCAxMHB4IDEwMHB4IDEwcHg7XHJcbn1cclxuLm1lcmNoYW50LWlubmVyLFxyXG4uaW52ZW50b3J5LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5tZXJjaGFudC1pbm5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmludmVudG9yeS1pbm5lciB7XHJcbiAgICBtYXJnaW46IDAgMiU7XHJcbn1cclxuXHJcbi5tZXJjaGFudC1pbm5lciBhcHAtaXRlbS1jYXJkLXNob3Age1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcclxufVxyXG4uaW52ZW50b3J5LWlubmVyIGFwcC1pdGVtLWNhcmQtc2hvcCB7XHJcbiAgICBtYXJnaW46IDEwcHggMiU7XHJcbn1cclxuXHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMSU7XHJcbiAgICBsZWZ0OiAxJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNsb3NlLWJ0biBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuLmNsb3NlLWJ0biBoNCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4uZ29sZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uZ29sZCBzcGFue1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxufVxyXG4uZ29sZCBpbWcge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5nb2xkICNnb2xkLW51bSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5LXRpdGxlJztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59Il19 */"]
});

/***/ }),

/***/ 9329:
/*!*************************************************************************************!*\
  !*** ./src/app/darkwood/darkwood-scenario-boss/darkwood-scenario-boss.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodScenarioBossComponent": () => (/* binding */ DarkwoodScenarioBossComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _popup_darkwood_boss_failure_darkwood_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/darkwood-boss-failure/darkwood-boss-failure.component */ 4789);
/* harmony import */ var _popup_darkwood_boss_success_darkwood_boss_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/darkwood-boss-success/darkwood-boss-success.component */ 5379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enemy/boss-management/boss-management.component */ 2102);






class DarkwoodScenarioBossComponent {
    constructor(dialogSuccess, dialogFail) {
        this.dialogSuccess = dialogSuccess;
        this.dialogFail = dialogFail;
    }
    ngOnInit() {
    }
    bossOver(status) {
        if (status === 'failed') {
            console.debug("Boss fight failed");
            this.openDialogFailure();
        }
        else if (status === 'success') {
            console.debug("Boss fight success");
            this.openDialogSuccess();
        }
        else {
            console.error("Not understand the status " + status);
        }
    }
    openDialogSuccess() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogSuccess.open(_popup_darkwood_boss_success_darkwood_boss_success_component__WEBPACK_IMPORTED_MODULE_1__.DarkwoodBossSuccessComponent, dialogConfig);
    }
    openDialogFailure() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogFail.open(_popup_darkwood_boss_failure_darkwood_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__.DarkwoodBossFailureComponent, dialogConfig);
    }
}
DarkwoodScenarioBossComponent.ɵfac = function DarkwoodScenarioBossComponent_Factory(t) { return new (t || DarkwoodScenarioBossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
DarkwoodScenarioBossComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DarkwoodScenarioBossComponent, selectors: [["app-darkwood-scenario-boss"]], decls: 2, vars: 1, consts: [[1, "boss-scenario"], [3, "bossLocation", "bossIsOver"]], template: function DarkwoodScenarioBossComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-boss-management", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("bossIsOver", function DarkwoodScenarioBossComponent_Template_app_boss_management_bossIsOver_1_listener($event) { return ctx.bossOver($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bossLocation", "darkwood");
    } }, dependencies: [_enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__.BossManagementComponent], styles: [".boss-scenario[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLXNjZW5hcmlvLWJvc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiZGFya3dvb2Qtc2NlbmFyaW8tYm9zcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvc3Mtc2NlbmFyaW8ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 9439:
/*!***************************************************************************************!*\
  !*** ./src/app/darkwood/darkwood-scenario-enemy/darkwood-scenario-enemy.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodScenarioEnemyComponent": () => (/* binding */ DarkwoodScenarioEnemyComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _popup_darkwood_popup_failure_darkwood_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/darkwood-popup-failure/darkwood-popup-failure.component */ 1890);
/* harmony import */ var _popup_darkwood_popup_success_darkwood_popup_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/darkwood-popup-success/darkwood-popup-success.component */ 9202);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/enemy-card/enemy-card.component */ 3422);
/* harmony import */ var _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enemy/enemy-management/enemy-management.component */ 7413);














function DarkwoodScenarioEnemyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-enemy-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "app-enemy-management", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("adventureIsOver", function DarkwoodScenarioEnemyComponent_div_1_Template_app_enemy_management_adventureIsOver_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.adventureIsOver($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
  }
}

class DarkwoodScenarioEnemyComponent {
  constructor(dialogSuccess, dialogFail, rest) {
    this.dialogSuccess = dialogSuccess;
    this.dialogFail = dialogFail;
    this.rest = rest;
    this.randomID = undefined;
    this.monsterLvl = undefined;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }

  ngOnInit() {
    const observ = this.rest.sendGet("/location/darkwood/random/lvl" + this.monsterLvl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || resp.body === undefined || resp.body === null || resp.body < 0) {
        console.error("Call BE failed ", resp);
        return;
      }

      const observ = this.rest.sendGet("/enemy/enemy-by-id/" + resp.body, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp2 => {
        if (!resp2 || !resp2.ok || !resp2.body) {
          return;
        }

        this.randomID = resp2.body;
      }, err2 => {
        console.error("Call BE failed: ", err2);
      });
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  adventureIsOver(adventureStatus) {
    if (!adventureStatus) return;

    if (adventureStatus === 'success') {
      // Proceed to next adventure step
      this.openDialogSuccess(); // -> this will add a reward

      return;
    }

    if (adventureStatus === 'fail') {
      // Stop adventure
      this.openDialogFailure();
      return;
    }
  }

  nextPathStep() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

  nextStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.nextPathStep();

      _this2.endScenario.emit(true);
    })();
  }

  openDialogSuccess() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogSuccess.open(_popup_darkwood_popup_success_darkwood_popup_success_component__WEBPACK_IMPORTED_MODULE_2__.DarkwoodPopupSuccessComponent, dialogConfig).afterClosed().subscribe(() => this.nextStep());
  }

  openDialogFailure() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogFail.open(_popup_darkwood_popup_failure_darkwood_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__.DarkwoodPopupFailureComponent, dialogConfig);
  }

}

DarkwoodScenarioEnemyComponent.ɵfac = function DarkwoodScenarioEnemyComponent_Factory(t) {
  return new (t || DarkwoodScenarioEnemyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService));
};

DarkwoodScenarioEnemyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DarkwoodScenarioEnemyComponent,
  selectors: [["app-darkwood-scenario-enemy"]],
  inputs: {
    monsterLvl: "monsterLvl"
  },
  outputs: {
    endScenario: "endScenario"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "battlefield"], ["class", "enemy-card", 4, "ngIf"], [1, "enemy-card"], [3, "enemy"], [3, "enemy", "adventureIsOver"]],
  template: function DarkwoodScenarioEnemyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DarkwoodScenarioEnemyComponent_div_1_Template, 4, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.randomID);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__.EnemyCardComponent, _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__.EnemyManagementComponent],
  styles: [".enemy-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.enemy-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLXNjZW5hcmlvLWVuZW15LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiZGFya3dvb2Qtc2NlbmFyaW8tZW5lbXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmVteS1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uZW5lbXktY2FyZCBkaXYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 5017:
/*!***************************************************************************************!*\
  !*** ./src/app/darkwood/darkwood-scenario-event/darkwood-scenario-event.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodScenarioEventComponent": () => (/* binding */ DarkwoodScenarioEventComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);






class DarkwoodScenarioEventComponent {
  constructor(rest) {
    this.rest = rest;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disableButton = false;
  }

  ngOnInit() {}

  nextStepAction() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.disableButton = true;
      yield _this.nextPathStep();

      _this.endScenario.emit(true);
    })();
  }

  nextPathStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

}

DarkwoodScenarioEventComponent.ɵfac = function DarkwoodScenarioEventComponent_Factory(t) {
  return new (t || DarkwoodScenarioEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

DarkwoodScenarioEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DarkwoodScenarioEventComponent,
  selectors: [["app-darkwood-scenario-event"]],
  outputs: {
    endScenario: "endScenario"
  },
  decls: 8,
  vars: 1,
  consts: [[2, "padding", "10px", 3, "disabled", "click"]],
  template: function DarkwoodScenarioEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Non ho avuto tempo di implementarlo, scusami");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Considera che stavi passeggiando verso la direzione indicata dalla mappa quando vedi:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DarkwoodScenarioEventComponent_Template_button_click_5_listener() {
        return ctx.nextStepAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Scopri cosa vedi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXJrd29vZC1zY2VuYXJpby1ldmVudC5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 5264:
/*!*********************************************************!*\
  !*** ./src/app/darkwood/darkwood/darkwood.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodComponent": () => (/* binding */ DarkwoodComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/world-map/battle-info/battle-info.component */ 8397);
/* harmony import */ var src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vo/StepVO */ 8013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var _darkwood_scenario_enemy_darkwood_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../darkwood-scenario-enemy/darkwood-scenario-enemy.component */ 9439);
/* harmony import */ var _darkwood_scenario_event_darkwood_scenario_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../darkwood-scenario-event/darkwood-scenario-event.component */ 5017);
/* harmony import */ var _darkwood_scenario_boss_darkwood_scenario_boss_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../darkwood-scenario-boss/darkwood-scenario-boss.component */ 9329);















function DarkwoodComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-darkwood-scenario-enemy", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function DarkwoodComponent_div_47_Template_app_darkwood_scenario_enemy_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("monsterLvl", ctx_r0.currentMonsterLvl);
  }
}

function DarkwoodComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-darkwood-scenario-event", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function DarkwoodComponent_div_48_Template_app_darkwood_scenario_event_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function DarkwoodComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-darkwood-scenario-boss");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class DarkwoodComponent {
  constructor(rest, dialog) {
    this.rest = rest;
    this.dialog = dialog;
    this.playerWeapon = null;
    this.playerArmor = null;
    this.playerTalisman = null;
    this.currentMonsterLvl = undefined;
    this.stepPath = new src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_2__.StepVO(1, 'ENEMY');
    this.backgroundImgID = 0;
  }

  ngOnInit() {
    this.randomBackgroundImg();
    this.resetStats();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  openDialog() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "250ms";
    this.dialog.open(src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_1__.BattleInfoComponent, dialogConfig);
  }

  getEquipedWeapon() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/equiped-weapon", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.playerWeapon = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedArmor() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/equiped-armor", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this2.playerArmor = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedTalisman() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/player/equiped-talisman", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this3.playerTalisman = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  refreshPathStep() {
    this.randomBackgroundImg();
    const observ = this.rest.sendGet("/player/current-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Call BE failed ", resp);
        return;
      }

      this.currentMonsterLvl = resp.body.number === 1 ? '1' : 'sup';
      this.stepPath = resp.body;
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  resetStats() {
    const observ = this.rest.sendGet("/location/reset-adventure-stats", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders());
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok) {
        console.error("Call BE failed ", resp);
        return;
      }
    }, err => {
      console.error("Call BE failed: ", err);
    });
    this.currentMonsterLvl = '1';
  }

  endScenario(event) {
    this.refreshPathStep();
  }

  randomBackgroundImg() {
    var _this4 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.backgroundImgID = Math.floor(Math.random() * 10);
    })();
  }

}

DarkwoodComponent.ɵfac = function DarkwoodComponent_Factory(t) {
  return new (t || DarkwoodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};

DarkwoodComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: DarkwoodComponent,
  selectors: [["app-darkwood"]],
  decls: 50,
  vars: 21,
  consts: [[1, "intro-img"], [1, "close-btn", 3, "click"], ["src", "assets/worldmap/exit-icon.png"], [1, "info-battle-btn", 3, "click"], [1, "info-battle-txt"], ["src", "assets/worldmap/info-battle-icon.png"], [1, "disclaimer"], [1, "equipment"], [1, "equipment-inner"], [3, "item", "equipable"], [1, "path"], [1, "player-path"], ["id", "fight1", 1, "point"], [1, "line"], ["id", "event1", 1, "point"], ["id", "boss", 1, "point"], [1, "adventure"], [4, "ngIf"], [3, "monsterLvl", "endScenario"], [3, "endScenario"]],
  template: function DarkwoodComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DarkwoodComponent_Template_div_click_1_listener() {
        return ctx.backToMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Esci");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DarkwoodComponent_Template_div_click_5_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Informazioni sulla battaglia");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "<Foresta Oscura>");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7)(14, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Equipaggiamento");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 10)(24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Percorso del giocatore");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11)(27, "div", 12)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Nemico 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 14)(32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Evento 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 12)(36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Nemico 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 14)(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Evento 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 15)(44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Boss");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, DarkwoodComponent_div_47_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, DarkwoodComponent_div_48_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, DarkwoodComponent_div_49_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerWeapon)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerArmor)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerTalisman)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"]("background-image: url(assets/darkwood/bg/img" + ctx.backgroundImgID + "-darkwood.jpg);");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 1 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 2 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 3 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 4 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 5 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "ENEMY");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "EVENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "BOSS");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__.ItemCardComponent, _darkwood_scenario_enemy_darkwood_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_5__.DarkwoodScenarioEnemyComponent, _darkwood_scenario_event_darkwood_scenario_event_component__WEBPACK_IMPORTED_MODULE_6__.DarkwoodScenarioEventComponent, _darkwood_scenario_boss_darkwood_scenario_boss_component__WEBPACK_IMPORTED_MODULE_7__.DarkwoodScenarioBossComponent],
  styles: ["span[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 0.9em;\r\n}\r\n\r\n.equipment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #ccc;\r\n    box-shadow: 0 0 10px black;\r\n    padding: 20px 10px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.equipment-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%] {\r\n    background-image: url('headimg-darkwood.jpg');\r\n}\r\n\r\n.path[_ngcontent-%COMP%] {\r\n    margin: 50px 0;\r\n    border-top: 1px solid gray;\r\n    border-bottom: 1px solid gray;\r\n    box-shadow: 0 0 5px black;\r\n    padding: 100px 0;\r\n\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0 auto 50px auto;\r\n}\r\n\r\n.path[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    text-shadow: 0 0 5px white;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 5px;\r\n    border: 10px;\r\n    margin: auto 5px;\r\n    background-color: black;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 120px;\r\n    background-color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1.7em;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%] {\r\n    border: 10px dashed green\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkNBQXNFO0FBQzFFOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjs7SUFFaEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJkYXJrd29vZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3ktYWx0JztcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxuLmVxdWlwbWVudC1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5pbnRyby1pbWcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvZGFya3dvb2QvaGVhZGltZy1kYXJrd29vZC5qcGcnKTtcclxufVxyXG5cclxuLnBhdGgge1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcblxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0byA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi5wYXRoIGgyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggd2hpdGU7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCAubGluZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJvcmRlcjogMTBweDtcclxuICAgIG1hcmdpbjogYXV0byA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBsYXllci1wYXRoIC5wb2ludCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcclxufVxyXG5cclxuLnBsYXllci1wYXRoIC5wb2ludCBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuN2VtO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGggLnBvaW50LmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDEwcHggZGFzaGVkIGdyZWVuXHJcbn1cclxuXHJcbiJdfQ== */"]
});

/***/ }),

/***/ 4789:
/*!*****************************************************************************************!*\
  !*** ./src/app/darkwood/popup/darkwood-boss-failure/darkwood-boss-failure.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodBossFailureComponent": () => (/* binding */ DarkwoodBossFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DarkwoodBossFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
DarkwoodBossFailureComponent.ɵfac = function DarkwoodBossFailureComponent_Factory(t) { return new (t || DarkwoodBossFailureComponent)(); };
DarkwoodBossFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DarkwoodBossFailureComponent, selectors: [["app-darkwood-boss-failure"]], decls: 11, vars: 0, consts: [[1, "container"], ["src", "assets/darkwood/boss-fail-darkwood.jpg", 1, "head-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function DarkwoodBossFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Il gigante ti scaraventa lontano con l'ultimo colpo, tanto da farti perdere i sensi per pochi secondi. Appena ti riprendi, raccogli le tue cose e le forze per scappare. Mentre fuggi senti le risate del gigante eccheggiare per tutta la foresta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Questa volta non e' andata bene, ma potrai riprovare quando sarai pronta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DarkwoodBossFailureComponent_Template_button_click_8_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLWJvc3MtZmFpbHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiZGFya3dvb2QtYm9zcy1mYWlsdXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5379:
/*!*****************************************************************************************!*\
  !*** ./src/app/darkwood/popup/darkwood-boss-success/darkwood-boss-success.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodBossSuccessComponent": () => (/* binding */ DarkwoodBossSuccessComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);








function DarkwoodBossSuccessComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Con gran forza sfetti l'ultimo attacco che fa cadere il gigante, con un gesto della mano il mostro dichiara la resa e ti aggiudica la vittoria. Con un grugnito indica un forziere ai piedi di un grande albero, quello e' il tesoro del gigante ed ora e' tuo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Il forziere si apre con un cigolio e all'interno trovi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-item-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DarkwoodBossSuccessComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.backToMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Esci dall'avventura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
  }
}

class DarkwoodBossSuccessComponent {
  constructor(rest) {
    this.rest = rest;
    this.reward = undefined;
  }

  ngOnInit() {
    this.getReward();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  getReward() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/boss/reward", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.reward = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

}

DarkwoodBossSuccessComponent.ɵfac = function DarkwoodBossSuccessComponent_Factory(t) {
  return new (t || DarkwoodBossSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

DarkwoodBossSuccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DarkwoodBossSuccessComponent,
  selectors: [["app-darkwood-boss-success"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], ["src", "assets/darkwood/boss-win-darkwood.jpg", 1, "head-img"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]],
  template: function DarkwoodBossSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DarkwoodBossSuccessComponent_div_0_Template, 16, 3, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__.ItemCardComponent],
  styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLWJvc3Mtc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6ImRhcmt3b29kLWJvc3Mtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIgZGl2IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5oZWFkLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uZ29sZC1tc2cgcCBpbWcge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"]
});

/***/ }),

/***/ 1890:
/*!*******************************************************************************************!*\
  !*** ./src/app/darkwood/popup/darkwood-popup-failure/darkwood-popup-failure.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodPopupFailureComponent": () => (/* binding */ DarkwoodPopupFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);


class DarkwoodPopupFailureComponent {
    constructor(rest) {
        this.rest = rest;
    }
    ngOnInit() {
    }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
DarkwoodPopupFailureComponent.ɵfac = function DarkwoodPopupFailureComponent_Factory(t) { return new (t || DarkwoodPopupFailureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
DarkwoodPopupFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DarkwoodPopupFailureComponent, selectors: [["app-darkwood-popup-failure"]], decls: 16, vars: 0, consts: [[1, "container"], [1, "head-msg"], [1, "image"], ["src", "assets/worldmap/defeated-player-img.png", 1, "player-img"], ["src", "assets/darkwood/fail-image-darkwood.jpg", 1, "background-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function DarkwoodPopupFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Disfatta, in fuga");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3)(6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Le minacce sono state troppo difficili per la piccola avventuriera, con qualche ammaccatura riesci a lasciare il luogo oscuro e pericoloso e tornata all'entrata ti riesci a rimettere in sesto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Riapri la tua mappa e painifichi la tua prossima mossa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DarkwoodPopupFailureComponent_Template_button_click_13_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, styles: [".background-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 200px;\r\n    margin-top: 250px;\r\n    margin-left: 200px;\r\n    transition: transform 1s;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%]:hover {\r\n    transform:rotateY(180deg);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n@keyframes watchback { \r\n    50% { \r\n        transform: rotateY(150deg); \r\n    } \r\n    100% { \r\n        transform: rotateY(180deg); \r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLXBvcHVwLWZhaWx1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFLSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQVVBO0lBQ0k7UUFFSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUVJLDBCQUEwQjtJQUM5QjtBQUNKIiwiZmlsZSI6ImRhcmt3b29kLXBvcHVwLWZhaWx1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBsYXllci1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG59XHJcbi5wbGF5ZXItaW1nOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgd2F0Y2hiYWNrIHsgXHJcbiAgICA1MCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxNTBkZWcpOyB9IFxyXG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH0gXHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHdhdGNoYmFjayB7IFxyXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTUwZGVnKTsgfSBcclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9IFxyXG59XHJcbkBrZXlmcmFtZXMgd2F0Y2hiYWNrIHsgXHJcbiAgICA1MCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxNTBkZWcpOyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTUwZGVnKTsgXHJcbiAgICB9IFxyXG4gICAgMTAwJSB7IFxyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyBcclxuICAgIH0gXHJcbn0iXX0= */"] });


/***/ }),

/***/ 9202:
/*!*******************************************************************************************!*\
  !*** ./src/app/darkwood/popup/darkwood-popup-success/darkwood-popup-success.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkwoodPopupSuccessComponent": () => (/* binding */ DarkwoodPopupSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var src_app_vo_enemy_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vo/enemy-vo */ 2469);









function DarkwoodPopupSuccessComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Congratulazioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Il mostro e' stato sconfitto, ecco la tua ricompensa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-item-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DarkwoodPopupSuccessComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Prossimo passo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
} }
function DarkwoodPopupSuccessComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Uh oh, mi sa che ci sono stati problemi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class DarkwoodPopupSuccessComponent {
    constructor(dialogRef, data, rest) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.rest = rest;
        this.reward = undefined;
    }
    ngOnInit() {
        const observ = this.rest
            .sendGet("/enemy/reward/assign-and-get/" + this.data.id, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok || !resp.body) {
                console.error("Call BE failed: ", resp);
                return;
            }
            this.reward = resp.body;
        }, err => {
            console.error("Call BE failed: ", err);
        });
    }
    close() {
        this.dialogRef.close();
    }
}
DarkwoodPopupSuccessComponent.ɵfac = function DarkwoodPopupSuccessComponent_Factory(t) { return new (t || DarkwoodPopupSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
DarkwoodPopupSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DarkwoodPopupSuccessComponent, selectors: [["app-darkwood-popup-success"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "head-msg"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]], template: function DarkwoodPopupSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DarkwoodPopupSuccessComponent_div_0_Template, 16, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DarkwoodPopupSuccessComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reward);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__.ItemCardComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhcmt3b29kLXBvcHVwLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6ImRhcmt3b29kLXBvcHVwLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGRpdiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZ29sZC1tc2cgcCBpbWcge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNlYWdyZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"] });


/***/ }),

/***/ 4992:
/*!****************************************************************************!*\
  !*** ./src/app/enemy/boss-management/boss-action/boss-action.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BossActionComponent": () => (/* binding */ BossActionComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function BossActionComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "p", 13)(5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.bossAct.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.bossAct.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.bossAct.effect, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", "assets/boss/actions/" + ctx_r4.bossAct.img + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function BossActionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BossActionComponent_div_4_div_1_Template, 7, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BossActionComponent_div_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.closeActionResult());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Prossima azione");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.bossAct);
  }
}

function BossActionComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tira un D20 e inserisci il punteggio ottenuto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BossActionComponent_div_5_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);

      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.submitRoll(_r7.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Invia tiro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Usa i bonus: ", ctx_r1.bonusRoll, "");
  }
}

function BossActionComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Vita del giocatore: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/icons/playerhealth-" + ctx_r2.playerHealth + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function BossActionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Vita del boss: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "assets/icons/bosshealth-" + ctx_r3.bossHealth + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

class BossActionComponent {
  constructor(rest) {
    this.rest = rest;
    this.showActionResult = false;
    this.bossAct = undefined;
    this.bonusRoll = "ARMA";
    this.playerHealth = -1;
    this.bossHealth = -1;
    this.bossIsOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.changeBonus();
    this.refreshStats();
  }

  closeActionResult() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.checkBossAdventure();

      _this.changeBonus();

      _this.showActionResult = false;

      _this.refreshStats();
    })();
  }

  checkBossAdventure() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/boss/is-failed", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'accept': 'application/json'
      }));

      let result = false;
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }

        result = resp.body;
      }, err => {
        console.error("Error calling BE", err);
      });

      if (result) {
        console.debug("Adventure failed with boss");

        _this2.bossIsOver.emit("failed");

        return;
      }

      const observ2 = _this2.rest.sendGet("/boss/is-success", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'accept': 'application/json'
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ2).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }

        result = resp.body;
      }, err => {
        console.error("Error calling BE", err);
      });

      if (result) {
        console.debug("Adventure success with boss");

        _this2.bossIsOver.emit("success");

        return;
      }
    })();
  }

  changeBonus() {
    const bonus = Math.floor(Math.random() * 3); // 0, 1 or 2

    if (bonus === 0) this.bonusRoll = "ARMA";
    if (bonus === 1) this.bonusRoll = "ARMATURA";
    if (bonus === 2) this.bonusRoll = "TALISMANO";
  }

  submitRoll(rolld20) {
    if (!rolld20) return;
    const observ = this.rest.sendPost("/boss/action", rolld20, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'accept': 'application/json',
      'content-type': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.bossAct = resp.body;
      this.showActionResult = true;
    }, err => {
      console.error("Error calling BE", err);
    });
    this.refreshStats();
  }

  refreshStats() {
    const observ = this.rest.sendGet("/adventure/player-health", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'accept': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.playerHealth = resp.body;
    }, err => {
      console.error("Error calling BE", err);
    });
    const observ2 = this.rest.sendGet("/adventure/boss-health", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'accept': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ2).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.bossHealth = resp.body;
    }, err => {
      console.error("Error calling BE", err);
    });
  }

}

BossActionComponent.ɵfac = function BossActionComponent_Factory(t) {
  return new (t || BossActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

BossActionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BossActionComponent,
  selectors: [["app-boss-action"]],
  outputs: {
    bossIsOver: "bossIsOver"
  },
  decls: 9,
  vars: 4,
  consts: [[1, "battle"], [1, "title"], ["class", "action-result", 4, "ngIf"], ["class", "action-form", 4, "ngIf"], [1, "stats"], ["class", "player-health", 4, "ngIf"], ["class", "monster-health", 4, "ngIf"], [1, "action-result"], ["class", "result", 4, "ngIf"], [3, "click"], [1, "result"], [1, "text"], ["id", "act-title"], ["id", "act-description", 3, "innerHTML"], ["id", "act-effect", 3, "innerHTML"], [3, "src"], [1, "action-form"], [1, "form"], [1, "input-sct"], ["type", "text", "id", "rolld20"], ["rolld20", ""], [1, "player-health"], [1, "monster-health"]],
  template: function BossActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Combattimento");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, BossActionComponent_div_4_Template, 4, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BossActionComponent_div_5_Template, 11, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BossActionComponent_div_7_Template, 4, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BossActionComponent_div_8_Template, 4, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showActionResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showActionResult);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.playerHealth > -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bossHealth > -1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 1.8em;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    font-size: 1.6em;\r\n    font-family: 'fantasy-mail';\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.battle[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/boss/battle-bg.jpg');\r\n    padding: 20px 10px;\r\n}\r\n\r\n.result[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    text-align: justify;\r\n}\r\n\r\n#act-description[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n}\r\n\r\n.input-sct[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvc3MtYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiYm9zcy1hY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSBoMyB7XHJcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3ktYWx0JztcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3ktbWFpbCc7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmJhdHRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYm9zcy9iYXR0bGUtYmcuanBnJyk7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4jYWN0LWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uaW5wdXQtc2N0IGJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59Il19 */"]
});

/***/ }),

/***/ 2102:
/*!********************************************************************!*\
  !*** ./src/app/enemy/boss-management/boss-management.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BossManagementComponent": () => (/* binding */ BossManagementComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _boss_action_boss_action_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boss-action/boss-action.component */ 4992);







function BossManagementComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "div", 2)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "app-boss-action", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("bossIsOver", function BossManagementComponent_div_0_Template_app_boss_action_bossIsOver_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.bossIsOverFnc($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.boss.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", "assets/boss/" + ctx_r0.boss.id + "b.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.boss.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class BossManagementComponent {
    constructor(rest) {
        this.rest = rest;
        this.bossLocation = undefined;
        this.bossIsOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.boss = undefined;
    }
    ngOnInit() {
        this.init();
        this.getBoss();
    }
    init() {
        const observ = this.rest
            .sendGet("/boss/init/" + this.bossLocation, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({}));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok) {
                console.error("Error calling BE: ", resp);
                return;
            }
        }, err => {
            console.error("Error calling BE", err);
        });
    }
    getBoss() {
        const observ = this.rest
            .sendGet("/boss/get-by-location/" + this.bossLocation, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'accept': 'application/json'
        }));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok || resp.body == null) {
                console.error("Error calling BE: ", resp);
                return;
            }
            this.boss = resp.body;
        }, err => {
            console.error("Error calling BE", err);
        });
    }
    bossIsOverFnc(status) {
        this.bossIsOver.emit(status);
    }
}
BossManagementComponent.ɵfac = function BossManagementComponent_Factory(t) { return new (t || BossManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
BossManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BossManagementComponent, selectors: [["app-boss-management"]], inputs: { bossLocation: "bossLocation" }, outputs: { bossIsOver: "bossIsOver" }, decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "title"], [1, "boss-presentation"], [3, "src"], [1, "description"], [3, "innerHTML"], [3, "bossIsOver"]], template: function BossManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BossManagementComponent_div_0_Template, 11, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.boss);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _boss_action_boss_action_component__WEBPACK_IMPORTED_MODULE_1__.BossActionComponent], styles: [".title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n}\r\n.boss-presentation[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.boss-presentation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n    margin: auto 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvc3MtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJib3NzLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5ib3NzLXByZXNlbnRhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5ib3NzLXByZXNlbnRhdGlvbiBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbjogYXV0byAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 5151:
/*!****************************************************************************!*\
  !*** ./src/app/enemy/enemy-attack-action/enemy-attack-action.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnemyAttackActionComponent": () => (/* binding */ EnemyAttackActionComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function EnemyAttackActionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Turno del nemico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "DIFESA - usi i bonus armatura");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "span")(17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnemyAttackActionComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.success());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Successo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnemyAttackActionComponent_div_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.failure());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Fallimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.attack.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.attack.effect, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.attack.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.buttonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.buttonDisabled);
  }
}

class EnemyAttackActionComponent {
  constructor(rest) {
    this.rest = rest;
    this.monsterId = undefined;
    this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.attack = undefined;
    this.buttonDisabled = false;
  }

  ngOnInit() {
    this.buttonDisabled = false;
    const observ = this.rest.sendGet("/enemy/attack/random-for-monster/" + this.monsterId, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'accept': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.attack = resp.body;
    }, err => {
      console.error("Error calling BE", err);
    });
  }

  success() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.buttonDisabled = true;

      _this.completed.emit(true);
    })();
  }

  failure() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.buttonDisabled = true;

      const observ = _this2.rest.sendGet("/player/decrease-health", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'accept': 'application/json'
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) console.error("Error calling BE: ", resp);
      }, err => {
        console.error("Error calling BE", err);
      });

      _this2.completed.emit(true);
    })();
  }

}

EnemyAttackActionComponent.ɵfac = function EnemyAttackActionComponent_Factory(t) {
  return new (t || EnemyAttackActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

EnemyAttackActionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EnemyAttackActionComponent,
  selectors: [["app-enemy-attack-action"]],
  inputs: {
    monsterId: "monsterId"
  },
  outputs: {
    completed: "completed"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "card"], [1, "turn-indicator"], ["src", "assets/worldmap/enemy-turn.png"], [1, "title"], [1, "content"], [1, "text"], [3, "innerHTML"], [1, "buttons"], [1, "categories"], ["id", "success", 3, "disabled", "click"], ["id", "fail", 3, "disabled", "click"]],
  template: function EnemyAttackActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EnemyAttackActionComponent_div_0_Template, 25, 5, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.attack);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".turn-indicator[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: 570px;\r\n    margin-top: -30px;\r\n}\r\n.turn-indicator[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 350px;\r\n    border: 1px solid gray;\r\n    background-color: lightgray;\r\n    box-shadow: 0 0 5px black;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    margin-bottom: 5px;\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    font-size: 1.2em;\r\n}\r\n.buttons[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: right;\r\n}\r\n.categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding-right: 2px;\r\n    font-size: 0.9em;\r\n    text-decoration: underline;\r\n    font-family: 'fantasy-mail';\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n}\r\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    border: 1px groove darkslategrey;\r\n    font-family: 'fantasy-mail';\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n#success[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n#success[_ngcontent-%COMP%]:hover {\r\n    background-color: darkgreen;\r\n    cursor: pointer;\r\n}\r\n#fail[_ngcontent-%COMP%] {\r\n    background-color: crimson;\r\n}\r\n#fail[_ngcontent-%COMP%]:hover {\r\n    background-color: firebrick;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZW15LWF0dGFjay1hY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksU0FBUztBQUNiO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25CIiwiZmlsZSI6ImVuZW15LWF0dGFjay1hY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50dXJuLWluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTcwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxufVxyXG4udHVybi1pbmRpY2F0b3IgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4udGl0bGUgaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uYnV0dG9ucyAuY2F0ZWdvcmllcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jYXRlZ29yaWVzIHNwYW4ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5LW1haWwnO1xyXG59XHJcbi5idXR0b25zIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5idXR0b25zIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b25zIGRpdiBidXR0b24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIGRhcmtzbGF0ZWdyZXk7XHJcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3ktbWFpbCc7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI3N1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuI3N1Y2Nlc3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZmFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG59XHJcbiNmYWlsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZpcmVicmljaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 808:
/*!******************************************************************************!*\
  !*** ./src/app/enemy/enemy-defense-action/enemy-defense-action.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnemyDefenseActionComponent": () => (/* binding */ EnemyDefenseActionComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);








function EnemyDefenseActionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Tuo turno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "ATTACCO - usi i bonus arma");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1)(6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "span")(17, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div")(20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnemyDefenseActionComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.success());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Successo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EnemyDefenseActionComponent_div_0_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.failure());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Fallimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.defense.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.defense.effect, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.defense.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.buttonDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.buttonDisabled);
  }
}

class EnemyDefenseActionComponent {
  constructor(rest) {
    this.rest = rest;
    this.monsterId = undefined;
    this.completed = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.defense = undefined;
    this.buttonDisabled = false;
  }

  ngOnInit() {
    this.buttonDisabled = false;
    const observ = this.rest.sendGet("/enemy/defence/random-for-monster/" + this.monsterId, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'accept': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.defense = resp.body;
    }, err => {
      console.error("Error calling BE", err);
    });
  }

  success() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.buttonDisabled = false;

      const observ = _this.rest.sendGet("/enemy/decrease-health", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        'accept': 'application/json'
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) console.error("Error calling BE: ", resp);
      }, err => {
        console.error("Error calling BE", err);
      });

      _this.completed.emit(true);
    })();
  }

  failure() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.buttonDisabled = false;

      _this2.completed.emit(true);
    })();
  }

}

EnemyDefenseActionComponent.ɵfac = function EnemyDefenseActionComponent_Factory(t) {
  return new (t || EnemyDefenseActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

EnemyDefenseActionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EnemyDefenseActionComponent,
  selectors: [["app-enemy-defense-action"]],
  inputs: {
    monsterId: "monsterId"
  },
  outputs: {
    completed: "completed"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "card"], [1, "turn-indicator"], ["src", "assets/worldmap/player-turn.png"], [1, "title"], [1, "content"], [1, "text"], [3, "innerHTML"], [1, "buttons"], [1, "categories"], ["id", "success", 3, "disabled", "click"], ["id", "fail", 3, "disabled", "click"]],
  template: function EnemyDefenseActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EnemyDefenseActionComponent_div_0_Template, 25, 5, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.defense);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".turn-indicator[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-left: 570px;\r\n    margin-top: -30px;\r\n}\r\n.turn-indicator[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n.card[_ngcontent-%COMP%] {\r\n    width: 600px;\r\n    height: 350px;\r\n    border: 1px solid blue;\r\n    background-color: lightblue;\r\n    box-shadow: 0 0 5px black;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n    margin-bottom: 5px;\r\n    background-color: rgba(0,0,0,0.2);\r\n}\r\n.title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    width: 65%;\r\n    font-size: 1.2em;\r\n}\r\n.buttons[_ngcontent-%COMP%]   .categories[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: right;\r\n}\r\n.categories[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding-right: 2px;\r\n    font-size: 0.9em;\r\n    text-decoration: underline;\r\n    font-family: 'fantasy-mail';\r\n}\r\n.buttons[_ngcontent-%COMP%] {\r\n    width: 35%;\r\n}\r\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    margin-top: 50px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    border: 1px groove darkslategrey;\r\n    font-family: 'fantasy-mail';\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n#success[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n#success[_ngcontent-%COMP%]:hover {\r\n    background-color: darkgreen;\r\n    cursor: pointer;\r\n}\r\n#fail[_ngcontent-%COMP%] {\r\n    background-color: crimson;\r\n}\r\n#fail[_ngcontent-%COMP%]:hover {\r\n    background-color: firebrick;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZW15LWRlZmVuc2UtYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQiIsImZpbGUiOiJlbmVteS1kZWZlbnNlLWFjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR1cm4taW5kaWNhdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1NzBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcbi50dXJuLWluZGljYXRvciBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbn1cclxuXHJcbi50aXRsZSBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcbi5idXR0b25zIC5jYXRlZ29yaWVzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNhdGVnb3JpZXMgc3BhbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3ktbWFpbCc7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbn1cclxuXHJcbi5idXR0b25zIGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b25zIGRpdiBidXR0b24ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggZ3Jvb3ZlIGRhcmtzbGF0ZWdyZXk7XHJcbiAgICBmb250LWZhbWlseTogJ2ZhbnRhc3ktbWFpbCc7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuI3N1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuI3N1Y2Nlc3M6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZmFpbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xyXG59XHJcbiNmYWlsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGZpcmVicmljaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 7413:
/*!**********************************************************************!*\
  !*** ./src/app/enemy/enemy-management/enemy-management.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnemyManagementComponent": () => (/* binding */ EnemyManagementComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_vo_enemy_vo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/vo/enemy-vo */ 2469);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _enemy_attack_action_enemy_attack_action_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enemy-attack-action/enemy-attack-action.component */ 5151);
/* harmony import */ var _enemy_defense_action_enemy_defense_action_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enemy-defense-action/enemy-defense-action.component */ 808);











function EnemyManagementComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-enemy-attack-action", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("completed", function EnemyManagementComponent_div_0_div_1_Template_app_enemy_attack_action_completed_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.turnCompleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("monsterId", ctx_r1.enemy.id);
  }
}

function EnemyManagementComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "app-enemy-defense-action", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("completed", function EnemyManagementComponent_div_0_div_2_Template_app_enemy_defense_action_completed_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.turnCompleted($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("monsterId", ctx_r2.enemy.id);
  }
}

function EnemyManagementComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vita del giocatore: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/icons/playerhealth-" + ctx_r3.playerHealth + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function EnemyManagementComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Vita del mostro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", "assets/icons/monsterhealth-" + ctx_r4.enemyHealth + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function EnemyManagementComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EnemyManagementComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EnemyManagementComponent_div_0_div_2_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, EnemyManagementComponent_div_0_div_4_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, EnemyManagementComponent_div_0_div_5_Template, 4, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.enemyTurn);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.enemyTurn);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.playerHealth > -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.enemyHealth > -1);
  }
}

class EnemyManagementComponent {
  constructor(rest) {
    this.rest = rest;
    this.enemy = undefined;
    this.adventureIsOver = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.enemyTurn = true;
    this.adventureEnd = false;
    this.playerHealth = -1;
    this.enemyHealth = -1;
  }

  ngOnInit() {
    this.refreshStats();
    this.checkFailure();
  }

  refreshStats() {
    const observ = this.rest.sendGet("/adventure/player-health", new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'accept': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.playerHealth = resp.body;
    }, err => {
      console.error("Error calling BE", err);
    });
    const observ2 = this.rest.sendGet("/adventure/monster-health", new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'accept': 'application/json'
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(observ2).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Error calling BE: ", resp);
        return;
      }

      this.enemyHealth = resp.body;
    }, err => {
      console.error("Error calling BE", err);
    });
  }

  turnCompleted(completed) {
    if (!completed) return;
    this.checkFailure();
    this.checkSuccess();
    this.refreshStats();
    this.enemyTurn = !this.enemyTurn;
  }

  checkFailure() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const adventureFailed = yield _this.isAdventureFailed();

      if (adventureFailed) {
        _this.adventureEnd = true;

        _this.adventureIsOver.emit("fail");
      }
    })();
  }

  checkSuccess() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const adventureSuccess = yield _this2.isAdventureSuccess();

      if (adventureSuccess) {
        _this2.adventureEnd = true;

        _this2.adventureIsOver.emit("success");
      }
    })();
  }

  isAdventureFailed() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/adventure/isfailed", new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'accept': 'application/json'
      }));

      let result = false;
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }

        result = resp.body;
      }, err => {
        console.error("Error calling BE", err);
      });
      return result;
    })();
  }

  isAdventureSuccess() {
    var _this4 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this4.rest.sendGet("/adventure/issuccess", new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'accept': 'application/json'
      }));

      let result = false;
      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || resp.body == null) {
          console.error("Error calling BE: ", resp);
          return;
        }

        result = resp.body;
      }, err => {
        console.error("Error calling BE", err);
      });
      return result;
    })();
  }

}

EnemyManagementComponent.ɵfac = function EnemyManagementComponent_Factory(t) {
  return new (t || EnemyManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_2__.RestService));
};

EnemyManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: EnemyManagementComponent,
  selectors: [["app-enemy-management"]],
  inputs: {
    enemy: "enemy"
  },
  outputs: {
    adventureIsOver: "adventureIsOver"
  },
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf"], [1, "stats"], ["class", "player-health", 4, "ngIf"], ["class", "monster-health", 4, "ngIf"], [3, "monsterId", "completed"], [1, "player-health"], [3, "src"], [1, "monster-health"]],
  template: function EnemyManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, EnemyManagementComponent_div_0_Template, 6, 4, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.enemy && !ctx.adventureEnd);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _enemy_attack_action_enemy_attack_action_component__WEBPACK_IMPORTED_MODULE_3__.EnemyAttackActionComponent, _enemy_defense_action_enemy_defense_action_component__WEBPACK_IMPORTED_MODULE_4__.EnemyDefenseActionComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmVteS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 2712:
/*!*************************************************************************************************!*\
  !*** ./src/app/flamevolcano/flamevolcano-scenario-boss/flamevolcano-scenario-boss.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoScenarioBossComponent": () => (/* binding */ FlamevolcanoScenarioBossComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _popup_flamevolcano_boss_failure_flamevolcano_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/flamevolcano-boss-failure/flamevolcano-boss-failure.component */ 788);
/* harmony import */ var _popup_flamevolcano_boss_success_flamevolcano_boss_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/flamevolcano-boss-success/flamevolcano-boss-success.component */ 6226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enemy/boss-management/boss-management.component */ 2102);






class FlamevolcanoScenarioBossComponent {
    constructor(dialogSuccess, dialogFail) {
        this.dialogSuccess = dialogSuccess;
        this.dialogFail = dialogFail;
    }
    ngOnInit() {
    }
    bossOver(status) {
        if (status === 'failed') {
            console.debug("Boss fight failed");
            this.openDialogFailure();
        }
        else if (status === 'success') {
            console.debug("Boss fight success");
            this.openDialogSuccess();
        }
        else {
            console.error("Not understand the status " + status);
        }
    }
    openDialogSuccess() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogSuccess.open(_popup_flamevolcano_boss_success_flamevolcano_boss_success_component__WEBPACK_IMPORTED_MODULE_1__.FlamevolcanoBossSuccessComponent, dialogConfig);
    }
    openDialogFailure() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogFail.open(_popup_flamevolcano_boss_failure_flamevolcano_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__.FlamevolcanoBossFailureComponent, dialogConfig);
    }
}
FlamevolcanoScenarioBossComponent.ɵfac = function FlamevolcanoScenarioBossComponent_Factory(t) { return new (t || FlamevolcanoScenarioBossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
FlamevolcanoScenarioBossComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FlamevolcanoScenarioBossComponent, selectors: [["app-flamevolcano-scenario-boss"]], decls: 2, vars: 1, consts: [[1, "boss-scenario"], [3, "bossLocation", "bossIsOver"]], template: function FlamevolcanoScenarioBossComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-boss-management", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("bossIsOver", function FlamevolcanoScenarioBossComponent_Template_app_boss_management_bossIsOver_1_listener($event) { return ctx.bossOver($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bossLocation", "flamevolcano");
    } }, dependencies: [_enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__.BossManagementComponent], styles: [".boss-scenario[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby1zY2VuYXJpby1ib3NzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImZsYW1ldm9sY2Fuby1zY2VuYXJpby1ib3NzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9zcy1zY2VuYXJpbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 8223:
/*!***************************************************************************************************!*\
  !*** ./src/app/flamevolcano/flamevolcano-scenario-enemy/flamevolcano-scenario-enemy.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoScenarioEnemyComponent": () => (/* binding */ FlamevolcanoScenarioEnemyComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _popup_flamevolcano_popup_failure_flamevolcano_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/flamevolcano-popup-failure/flamevolcano-popup-failure.component */ 4194);
/* harmony import */ var _popup_flamevolcano_popup_success_flamevolcano_popup_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/flamevolcano-popup-success/flamevolcano-popup-success.component */ 6243);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/enemy-card/enemy-card.component */ 3422);
/* harmony import */ var _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enemy/enemy-management/enemy-management.component */ 7413);














function FlamevolcanoScenarioEnemyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-enemy-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "app-enemy-management", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("adventureIsOver", function FlamevolcanoScenarioEnemyComponent_div_1_Template_app_enemy_management_adventureIsOver_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.adventureIsOver($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
  }
}

class FlamevolcanoScenarioEnemyComponent {
  constructor(dialogSuccess, dialogFail, rest) {
    this.dialogSuccess = dialogSuccess;
    this.dialogFail = dialogFail;
    this.rest = rest;
    this.randomID = undefined;
    this.monsterLvl = undefined;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }

  ngOnInit() {
    const observ = this.rest.sendGet("/location/flamevolcano/random/lvl" + this.monsterLvl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || resp.body === undefined || resp.body === null || resp.body < 0) {
        console.error("Call BE failed ", resp);
        return;
      }

      const observ = this.rest.sendGet("/enemy/enemy-by-id/" + resp.body, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp2 => {
        if (!resp2 || !resp2.ok || !resp2.body) {
          return;
        }

        this.randomID = resp2.body;
      }, err2 => {
        console.error("Call BE failed: ", err2);
      });
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  adventureIsOver(adventureStatus) {
    if (!adventureStatus) return;

    if (adventureStatus === 'success') {
      // Proceed to next adventure step
      this.openDialogSuccess(); // -> this will add a reward

      return;
    }

    if (adventureStatus === 'fail') {
      // Stop adventure
      this.openDialogFailure();
      return;
    }
  }

  nextPathStep() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

  nextStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.nextPathStep();

      _this2.endScenario.emit(true);
    })();
  }

  openDialogSuccess() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogSuccess.open(_popup_flamevolcano_popup_success_flamevolcano_popup_success_component__WEBPACK_IMPORTED_MODULE_2__.FlamevolcanoPopupSuccessComponent, dialogConfig).afterClosed().subscribe(() => this.nextStep());
  }

  openDialogFailure() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogFail.open(_popup_flamevolcano_popup_failure_flamevolcano_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__.FlamevolcanoPopupFailureComponent, dialogConfig);
  }

}

FlamevolcanoScenarioEnemyComponent.ɵfac = function FlamevolcanoScenarioEnemyComponent_Factory(t) {
  return new (t || FlamevolcanoScenarioEnemyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService));
};

FlamevolcanoScenarioEnemyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FlamevolcanoScenarioEnemyComponent,
  selectors: [["app-flamevolcano-scenario-enemy"]],
  inputs: {
    monsterLvl: "monsterLvl"
  },
  outputs: {
    endScenario: "endScenario"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "battlefield"], ["class", "enemy-card", 4, "ngIf"], [1, "enemy-card"], [3, "enemy"], [3, "enemy", "adventureIsOver"]],
  template: function FlamevolcanoScenarioEnemyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FlamevolcanoScenarioEnemyComponent_div_1_Template, 4, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.randomID);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__.EnemyCardComponent, _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__.EnemyManagementComponent],
  styles: [".enemy-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.enemy-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby1zY2VuYXJpby1lbmVteS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImZsYW1ldm9sY2Fuby1zY2VuYXJpby1lbmVteS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuZW15LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5lbmVteS1jYXJkIGRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59Il19 */"]
});

/***/ }),

/***/ 2338:
/*!***************************************************************************************************!*\
  !*** ./src/app/flamevolcano/flamevolcano-scenario-event/flamevolcano-scenario-event.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoScenarioEventComponent": () => (/* binding */ FlamevolcanoScenarioEventComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);






class FlamevolcanoScenarioEventComponent {
  constructor(rest) {
    this.rest = rest;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disableButton = false;
  }

  ngOnInit() {}

  nextStepAction() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.disableButton = true;
      yield _this.nextPathStep();

      _this.endScenario.emit(true);
    })();
  }

  nextPathStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

}

FlamevolcanoScenarioEventComponent.ɵfac = function FlamevolcanoScenarioEventComponent_Factory(t) {
  return new (t || FlamevolcanoScenarioEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

FlamevolcanoScenarioEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FlamevolcanoScenarioEventComponent,
  selectors: [["app-flamevolcano-scenario-event"]],
  outputs: {
    endScenario: "endScenario"
  },
  decls: 8,
  vars: 1,
  consts: [[2, "padding", "10px", 3, "disabled", "click"]],
  template: function FlamevolcanoScenarioEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Non ho avuto tempo di implementarlo, scusami");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Considera che stavi passeggiando verso la direzione indicata dalla mappa quando vedi:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FlamevolcanoScenarioEventComponent_Template_button_click_5_listener() {
        return ctx.nextStepAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Scopri cosa vedi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGFtZXZvbGNhbm8tc2NlbmFyaW8tZXZlbnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 208:
/*!*********************************************************************!*\
  !*** ./src/app/flamevolcano/flamevolcano/flamevolcano.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoComponent": () => (/* binding */ FlamevolcanoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/vo/StepVO */ 8013);
/* harmony import */ var src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/world-map/battle-info/battle-info.component */ 8397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var _flamevolcano_scenario_boss_flamevolcano_scenario_boss_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flamevolcano-scenario-boss/flamevolcano-scenario-boss.component */ 2712);
/* harmony import */ var _flamevolcano_scenario_event_flamevolcano_scenario_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flamevolcano-scenario-event/flamevolcano-scenario-event.component */ 2338);
/* harmony import */ var _flamevolcano_scenario_enemy_flamevolcano_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../flamevolcano-scenario-enemy/flamevolcano-scenario-enemy.component */ 8223);















function FlamevolcanoComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-flamevolcano-scenario-enemy", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function FlamevolcanoComponent_div_47_Template_app_flamevolcano_scenario_enemy_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("monsterLvl", ctx_r0.currentMonsterLvl);
  }
}

function FlamevolcanoComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-flamevolcano-scenario-event", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function FlamevolcanoComponent_div_48_Template_app_flamevolcano_scenario_event_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function FlamevolcanoComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-flamevolcano-scenario-boss");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class FlamevolcanoComponent {
  constructor(rest, dialog) {
    this.rest = rest;
    this.dialog = dialog;
    this.playerWeapon = null;
    this.playerArmor = null;
    this.playerTalisman = null;
    this.currentMonsterLvl = undefined;
    this.stepPath = new src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_1__.StepVO(1, 'ENEMY');
    this.backgroundImgID = 0;
  }

  ngOnInit() {
    this.randomBackgroundImg();
    this.resetStats();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  openDialog() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "250ms";
    this.dialog.open(src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_2__.BattleInfoComponent, dialogConfig);
  }

  getEquipedWeapon() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/equiped-weapon", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.playerWeapon = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedArmor() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/equiped-armor", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this2.playerArmor = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedTalisman() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/player/equiped-talisman", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this3.playerTalisman = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  refreshPathStep() {
    this.randomBackgroundImg();
    const observ = this.rest.sendGet("/player/current-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Call BE failed ", resp);
        return;
      }

      this.currentMonsterLvl = resp.body.number === 1 ? '1' : 'sup';
      this.stepPath = resp.body;
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  resetStats() {
    const observ = this.rest.sendGet("/location/reset-adventure-stats", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders());
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok) {
        console.error("Call BE failed ", resp);
        return;
      }
    }, err => {
      console.error("Call BE failed: ", err);
    });
    this.currentMonsterLvl = '1';
  }

  endScenario(event) {
    this.refreshPathStep();
  }

  randomBackgroundImg() {
    var _this4 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.backgroundImgID = Math.floor(Math.random() * 10);
    })();
  }

}

FlamevolcanoComponent.ɵfac = function FlamevolcanoComponent_Factory(t) {
  return new (t || FlamevolcanoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};

FlamevolcanoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FlamevolcanoComponent,
  selectors: [["app-flamevolcano"]],
  decls: 50,
  vars: 21,
  consts: [[1, "intro-img"], [1, "close-btn", 3, "click"], ["src", "assets/worldmap/exit-icon.png"], [1, "info-battle-btn", 3, "click"], [1, "info-battle-txt"], ["src", "assets/worldmap/info-battle-icon.png"], [1, "disclaimer"], [1, "equipment"], [1, "equipment-inner"], [3, "item", "equipable"], [1, "path"], [1, "player-path"], ["id", "fight1", 1, "point"], [1, "line"], ["id", "event1", 1, "point"], ["id", "boss", 1, "point"], [1, "adventure"], [4, "ngIf"], [3, "monsterLvl", "endScenario"], [3, "endScenario"]],
  template: function FlamevolcanoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FlamevolcanoComponent_Template_div_click_1_listener() {
        return ctx.backToMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Esci");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FlamevolcanoComponent_Template_div_click_5_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Informazioni sulla battaglia");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "<Vulcano Fiammeggiante>");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7)(14, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Equipaggiamento");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 10)(24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Percorso del giocatore");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11)(27, "div", 12)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Nemico 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 14)(32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Evento 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 12)(36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Nemico 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 14)(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Evento 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 15)(44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Boss");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, FlamevolcanoComponent_div_47_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, FlamevolcanoComponent_div_48_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, FlamevolcanoComponent_div_49_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerWeapon)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerArmor)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerTalisman)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"]("background-image: url(assets/flamevolcano/bg/img" + ctx.backgroundImgID + "-flamevolcano.jpg);");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 1 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 2 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 3 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 4 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 5 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "ENEMY");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "EVENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "BOSS");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__.ItemCardComponent, _flamevolcano_scenario_boss_flamevolcano_scenario_boss_component__WEBPACK_IMPORTED_MODULE_5__.FlamevolcanoScenarioBossComponent, _flamevolcano_scenario_event_flamevolcano_scenario_event_component__WEBPACK_IMPORTED_MODULE_6__.FlamevolcanoScenarioEventComponent, _flamevolcano_scenario_enemy_flamevolcano_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_7__.FlamevolcanoScenarioEnemyComponent],
  styles: ["span[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 0.9em;\r\n}\r\n\r\n.equipment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #ccc;\r\n    box-shadow: 0 0 10px black;\r\n    padding: 20px 10px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.equipment-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%] {\r\n    background-image: url('headimg-flamevolcano.jpg');\r\n}\r\n\r\n.path[_ngcontent-%COMP%] {\r\n    margin: 50px 0;\r\n    border-top: 1px solid gray;\r\n    border-bottom: 1px solid gray;\r\n    box-shadow: 0 0 5px black;\r\n    padding: 100px 0;\r\n\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0 auto 50px auto;\r\n}\r\n\r\n.path[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    text-shadow: 0 0 5px white;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 5px;\r\n    border: 10px;\r\n    margin: auto 5px;\r\n    background-color: black;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 120px;\r\n    background-color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1.7em;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%] {\r\n    border: 10px dashed green\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlEQUE4RTtBQUNsRjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0lBRWhCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoiZmxhbWV2b2xjYW5vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeS1hbHQnO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmVxdWlwbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmludHJvLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mbGFtZXZvbGNhbm8vaGVhZGltZy1mbGFtZXZvbGNhbm8uanBnJyk7XHJcbn1cclxuXHJcbi5wYXRoIHtcclxuICAgIG1hcmdpbjogNTBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNTBweCBhdXRvO1xyXG59XHJcblxyXG4ucGF0aCBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGggLmxpbmUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXI6IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCAucG9pbnQge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCAucG9pbnQgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuLnBsYXllci1wYXRoIC5wb2ludC5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxMHB4IGRhc2hlZCBncmVlblxyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 788:
/*!*****************************************************************************************************!*\
  !*** ./src/app/flamevolcano/popup/flamevolcano-boss-failure/flamevolcano-boss-failure.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoBossFailureComponent": () => (/* binding */ FlamevolcanoBossFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FlamevolcanoBossFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
FlamevolcanoBossFailureComponent.ɵfac = function FlamevolcanoBossFailureComponent_Factory(t) { return new (t || FlamevolcanoBossFailureComponent)(); };
FlamevolcanoBossFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlamevolcanoBossFailureComponent, selectors: [["app-flamevolcano-boss-failure"]], decls: 13, vars: 0, consts: [[1, "container"], ["src", "assets/flamevolcano/boss-fail-flamevolcano.jpg", 1, "head-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function FlamevolcanoBossFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " La temperatura sale, senti mancare l'aria. Il gigantesco Balor inizia a ridere mentre dai suoi occhi si nota uno strano luccichio, come se avesse delle fiamme vive all'interno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Non riesci piu' a sopportare le ferite e il caldo, quindi decidi di ritirarti da questo posto alla svelta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Questa volta non e' andata bene, ma potrai riprovare quando sarai pronta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlamevolcanoBossFailureComponent_Template_button_click_10_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby1ib3NzLWZhaWx1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImZsYW1ldm9sY2Fuby1ib3NzLWZhaWx1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6226:
/*!*****************************************************************************************************!*\
  !*** ./src/app/flamevolcano/popup/flamevolcano-boss-success/flamevolcano-boss-success.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoBossSuccessComponent": () => (/* binding */ FlamevolcanoBossSuccessComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);








function FlamevolcanoBossSuccessComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Riesci ad estinguere le fiamme del gigantesco Balor, il bestione abbassa la testa e indietreggia con passo incerto. Un tonfo secco rimbomba nella zona, un grosso masso rotola e mostra cosa celava dietro di se'. E' una specie di cassa in pietra. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Ci sono sassi lavici, ma spostando vedi in profondit\u00E0 qualcosa che attira il tuo interesse, all'interno della cassa trovi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-item-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlamevolcanoBossSuccessComponent_div_0_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.backToMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Esci dall'avventura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
  }
}

class FlamevolcanoBossSuccessComponent {
  constructor(rest) {
    this.rest = rest;
    this.reward = undefined;
  }

  ngOnInit() {
    this.getReward();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  getReward() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/boss/reward", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.reward = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

}

FlamevolcanoBossSuccessComponent.ɵfac = function FlamevolcanoBossSuccessComponent_Factory(t) {
  return new (t || FlamevolcanoBossSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

FlamevolcanoBossSuccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FlamevolcanoBossSuccessComponent,
  selectors: [["app-flamevolcano-boss-success"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], ["src", "assets/flamevolcano/boss-win-flamevolcano.jpg", 1, "head-img"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]],
  template: function FlamevolcanoBossSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FlamevolcanoBossSuccessComponent_div_0_Template, 16, 3, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__.ItemCardComponent],
  styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby1ib3NzLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJmbGFtZXZvbGNhbm8tYm9zcy1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBkaXYge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5nb2xkLW1zZyBwIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 4194:
/*!*******************************************************************************************************!*\
  !*** ./src/app/flamevolcano/popup/flamevolcano-popup-failure/flamevolcano-popup-failure.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoPopupFailureComponent": () => (/* binding */ FlamevolcanoPopupFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FlamevolcanoPopupFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
FlamevolcanoPopupFailureComponent.ɵfac = function FlamevolcanoPopupFailureComponent_Factory(t) { return new (t || FlamevolcanoPopupFailureComponent)(); };
FlamevolcanoPopupFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlamevolcanoPopupFailureComponent, selectors: [["app-flamevolcano-popup-failure"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "head-msg"], [1, "image"], ["src", "assets/worldmap/defeated-player-img.png", 1, "player-img"], ["src", "assets/flamevolcano/fail-image-flamevolcano.jpg", 1, "background-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function FlamevolcanoPopupFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disfatta, in fuga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3)(6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Le minacce sono scottano qui. Ti senti sciogliere con tutte le ferite che hai, ti ritiri e curi scappando da quel posto. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlamevolcanoPopupFailureComponent_Template_button_click_11_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".background-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 200px;\r\n    margin-top: 250px;\r\n    margin-left: 200px;\r\n    transition: transform 1s;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%]:hover {\r\n    transform:rotateY(180deg);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n@keyframes watchback { \r\n    50% { \r\n        transform: rotateY(150deg); \r\n    } \r\n    100% { \r\n        transform: rotateY(180deg); \r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby1wb3B1cC1mYWlsdXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUNBO0lBS0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFVQTtJQUNJO1FBRUksMEJBQTBCO0lBQzlCO0lBQ0E7UUFFSSwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJmbGFtZXZvbGNhbm8tcG9wdXAtZmFpbHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGxheWVyLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbn1cclxuLnBsYXllci1pbWc6aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyB3YXRjaGJhY2sgeyBcclxuICAgIDUwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE1MGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfSBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F0Y2hiYWNrIHsgXHJcbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxNTBkZWcpOyB9IFxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH0gXHJcbn1cclxuQGtleWZyYW1lcyB3YXRjaGJhY2sgeyBcclxuICAgIDUwJSB7IFxyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE1MGRlZyk7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNTBkZWcpOyBcclxuICAgIH0gXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IFxyXG4gICAgfSBcclxufSJdfQ== */"] });


/***/ }),

/***/ 6243:
/*!*******************************************************************************************************!*\
  !*** ./src/app/flamevolcano/popup/flamevolcano-popup-success/flamevolcano-popup-success.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlamevolcanoPopupSuccessComponent": () => (/* binding */ FlamevolcanoPopupSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var src_app_vo_enemy_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vo/enemy-vo */ 2469);









function FlamevolcanoPopupSuccessComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Congratulazioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Il mostro e' stato sconfitto, ecco la tua ricompensa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-item-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FlamevolcanoPopupSuccessComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Prossimo passo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
} }
function FlamevolcanoPopupSuccessComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Uh oh, mi sa che ci sono stati problemi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class FlamevolcanoPopupSuccessComponent {
    constructor(dialogRef, data, rest) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.rest = rest;
        this.reward = undefined;
    }
    ngOnInit() {
        const observ = this.rest
            .sendGet("/enemy/reward/assign-and-get/" + this.data.id, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok || !resp.body) {
                console.error("Call BE failed: ", resp);
                return;
            }
            this.reward = resp.body;
        }, err => {
            console.error("Call BE failed: ", err);
        });
    }
    close() {
        this.dialogRef.close();
    }
}
FlamevolcanoPopupSuccessComponent.ɵfac = function FlamevolcanoPopupSuccessComponent_Factory(t) { return new (t || FlamevolcanoPopupSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
FlamevolcanoPopupSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FlamevolcanoPopupSuccessComponent, selectors: [["app-flamevolcano-popup-success"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "head-msg"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]], template: function FlamevolcanoPopupSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FlamevolcanoPopupSuccessComponent_div_0_Template, 16, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FlamevolcanoPopupSuccessComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reward);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__.ItemCardComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsYW1ldm9sY2Fuby1wb3B1cC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJmbGFtZXZvbGNhbm8tcG9wdXAtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIgZGl2IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5nb2xkLW1zZyBwIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4489:
/*!**********************************************************************************************************!*\
  !*** ./src/app/frozenmountains/frozenmountains-scenario-boss/frozenmountains-scenario-boss.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsScenarioBossComponent": () => (/* binding */ FrozenmountainsScenarioBossComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _popup_frozenmountains_boss_failure_frozenmountains_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/frozenmountains-boss-failure/frozenmountains-boss-failure.component */ 3561);
/* harmony import */ var _popup_frozenmountains_boss_success_frozenmountains_boss_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/frozenmountains-boss-success/frozenmountains-boss-success.component */ 5140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enemy/boss-management/boss-management.component */ 2102);






class FrozenmountainsScenarioBossComponent {
    constructor(dialogSuccess, dialogFail) {
        this.dialogSuccess = dialogSuccess;
        this.dialogFail = dialogFail;
    }
    ngOnInit() {
    }
    bossOver(status) {
        if (status === 'failed') {
            console.debug("Boss fight failed");
            this.openDialogFailure();
        }
        else if (status === 'success') {
            console.debug("Boss fight success");
            this.openDialogSuccess();
        }
        else {
            console.error("Not understand the status " + status);
        }
    }
    openDialogSuccess() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogSuccess.open(_popup_frozenmountains_boss_success_frozenmountains_boss_success_component__WEBPACK_IMPORTED_MODULE_1__.FrozenmountainsBossSuccessComponent, dialogConfig);
    }
    openDialogFailure() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogFail.open(_popup_frozenmountains_boss_failure_frozenmountains_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__.FrozenmountainsBossFailureComponent, dialogConfig);
    }
}
FrozenmountainsScenarioBossComponent.ɵfac = function FrozenmountainsScenarioBossComponent_Factory(t) { return new (t || FrozenmountainsScenarioBossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
FrozenmountainsScenarioBossComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FrozenmountainsScenarioBossComponent, selectors: [["app-frozenmountains-scenario-boss"]], decls: 2, vars: 1, consts: [[1, "boss-scenario"], [3, "bossLocation", "bossIsOver"]], template: function FrozenmountainsScenarioBossComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-boss-management", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("bossIsOver", function FrozenmountainsScenarioBossComponent_Template_app_boss_management_bossIsOver_1_listener($event) { return ctx.bossOver($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bossLocation", "frozenmountains");
    } }, dependencies: [_enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__.BossManagementComponent], styles: [".boss-scenario[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy1zY2VuYXJpby1ib3NzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImZyb3plbm1vdW50YWlucy1zY2VuYXJpby1ib3NzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9zcy1zY2VuYXJpbyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 8872:
/*!************************************************************************************************************!*\
  !*** ./src/app/frozenmountains/frozenmountains-scenario-enemy/frozenmountains-scenario-enemy.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsScenarioEnemyComponent": () => (/* binding */ FrozenmountainsScenarioEnemyComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _popup_frozenmountains_popup_failure_frozenmountains_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/frozenmountains-popup-failure/frozenmountains-popup-failure.component */ 489);
/* harmony import */ var _popup_frozenmountains_popup_success_frozenmountains_popup_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/frozenmountains-popup-success/frozenmountains-popup-success.component */ 8227);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/enemy-card/enemy-card.component */ 3422);
/* harmony import */ var _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enemy/enemy-management/enemy-management.component */ 7413);














function FrozenmountainsScenarioEnemyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-enemy-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "app-enemy-management", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("adventureIsOver", function FrozenmountainsScenarioEnemyComponent_div_1_Template_app_enemy_management_adventureIsOver_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.adventureIsOver($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
  }
}

class FrozenmountainsScenarioEnemyComponent {
  constructor(dialogSuccess, dialogFail, rest) {
    this.dialogSuccess = dialogSuccess;
    this.dialogFail = dialogFail;
    this.rest = rest;
    this.randomID = undefined;
    this.monsterLvl = undefined;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }

  ngOnInit() {
    const observ = this.rest.sendGet("/location/frozenmountains/random/lvl" + this.monsterLvl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || resp.body === undefined || resp.body === null || resp.body < 0) {
        console.error("Call BE failed ", resp);
        return;
      }

      const observ = this.rest.sendGet("/enemy/enemy-by-id/" + resp.body, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp2 => {
        if (!resp2 || !resp2.ok || !resp2.body) {
          return;
        }

        this.randomID = resp2.body;
      }, err2 => {
        console.error("Call BE failed: ", err2);
      });
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  adventureIsOver(adventureStatus) {
    if (!adventureStatus) return;

    if (adventureStatus === 'success') {
      // Proceed to next adventure step
      this.openDialogSuccess(); // -> this will add a reward

      return;
    }

    if (adventureStatus === 'fail') {
      // Stop adventure
      this.openDialogFailure();
      return;
    }
  }

  nextPathStep() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

  nextStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.nextPathStep();

      _this2.endScenario.emit(true);
    })();
  }

  openDialogSuccess() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogSuccess.open(_popup_frozenmountains_popup_success_frozenmountains_popup_success_component__WEBPACK_IMPORTED_MODULE_2__.FrozenmountainsPopupSuccessComponent, dialogConfig).afterClosed().subscribe(() => this.nextStep());
  }

  openDialogFailure() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogFail.open(_popup_frozenmountains_popup_failure_frozenmountains_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__.FrozenmountainsPopupFailureComponent, dialogConfig);
  }

}

FrozenmountainsScenarioEnemyComponent.ɵfac = function FrozenmountainsScenarioEnemyComponent_Factory(t) {
  return new (t || FrozenmountainsScenarioEnemyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService));
};

FrozenmountainsScenarioEnemyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FrozenmountainsScenarioEnemyComponent,
  selectors: [["app-frozenmountains-scenario-enemy"]],
  inputs: {
    monsterLvl: "monsterLvl"
  },
  outputs: {
    endScenario: "endScenario"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "battlefield"], ["class", "enemy-card", 4, "ngIf"], [1, "enemy-card"], [3, "enemy"], [3, "enemy", "adventureIsOver"]],
  template: function FrozenmountainsScenarioEnemyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FrozenmountainsScenarioEnemyComponent_div_1_Template, 4, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.randomID);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__.EnemyCardComponent, _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__.EnemyManagementComponent],
  styles: [".enemy-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.enemy-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy1zY2VuYXJpby1lbmVteS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImZyb3plbm1vdW50YWlucy1zY2VuYXJpby1lbmVteS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuZW15LWNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5lbmVteS1jYXJkIGRpdiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59Il19 */"]
});

/***/ }),

/***/ 252:
/*!************************************************************************************************************!*\
  !*** ./src/app/frozenmountains/frozenmountains-scenario-event/frozenmountains-scenario-event.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsScenarioEventComponent": () => (/* binding */ FrozenmountainsScenarioEventComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);






class FrozenmountainsScenarioEventComponent {
  constructor(rest) {
    this.rest = rest;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disableButton = false;
  }

  ngOnInit() {}

  nextStepAction() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.disableButton = true;
      yield _this.nextPathStep();

      _this.endScenario.emit(true);
    })();
  }

  nextPathStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

}

FrozenmountainsScenarioEventComponent.ɵfac = function FrozenmountainsScenarioEventComponent_Factory(t) {
  return new (t || FrozenmountainsScenarioEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

FrozenmountainsScenarioEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FrozenmountainsScenarioEventComponent,
  selectors: [["app-frozenmountains-scenario-event"]],
  outputs: {
    endScenario: "endScenario"
  },
  decls: 8,
  vars: 1,
  consts: [[2, "padding", "10px", 3, "disabled", "click"]],
  template: function FrozenmountainsScenarioEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Non ho avuto tempo di implementarlo, scusami");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Considera che stavi passeggiando verso la direzione indicata dalla mappa quando vedi:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FrozenmountainsScenarioEventComponent_Template_button_click_5_listener() {
        return ctx.nextStepAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Scopri cosa vedi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcm96ZW5tb3VudGFpbnMtc2NlbmFyaW8tZXZlbnQuY29tcG9uZW50LmNzcyJ9 */"]
});

/***/ }),

/***/ 5805:
/*!******************************************************************************!*\
  !*** ./src/app/frozenmountains/frozenmountains/frozenmountains.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsComponent": () => (/* binding */ FrozenmountainsComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/vo/StepVO */ 8013);
/* harmony import */ var src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/world-map/battle-info/battle-info.component */ 8397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var _frozenmountains_scenario_boss_frozenmountains_scenario_boss_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frozenmountains-scenario-boss/frozenmountains-scenario-boss.component */ 4489);
/* harmony import */ var _frozenmountains_scenario_enemy_frozenmountains_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../frozenmountains-scenario-enemy/frozenmountains-scenario-enemy.component */ 8872);
/* harmony import */ var _frozenmountains_scenario_event_frozenmountains_scenario_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../frozenmountains-scenario-event/frozenmountains-scenario-event.component */ 252);















function FrozenmountainsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-frozenmountains-scenario-enemy", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function FrozenmountainsComponent_div_47_Template_app_frozenmountains_scenario_enemy_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("monsterLvl", ctx_r0.currentMonsterLvl);
  }
}

function FrozenmountainsComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-frozenmountains-scenario-event", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function FrozenmountainsComponent_div_48_Template_app_frozenmountains_scenario_event_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function FrozenmountainsComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-frozenmountains-scenario-boss");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class FrozenmountainsComponent {
  constructor(rest, dialog) {
    this.rest = rest;
    this.dialog = dialog;
    this.playerWeapon = null;
    this.playerArmor = null;
    this.playerTalisman = null;
    this.currentMonsterLvl = undefined;
    this.stepPath = new src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_1__.StepVO(1, 'ENEMY');
    this.backgroundImgID = 0;
  }

  ngOnInit() {
    this.randomBackgroundImg();
    this.resetStats();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  openDialog() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "250ms";
    this.dialog.open(src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_2__.BattleInfoComponent, dialogConfig);
  }

  getEquipedWeapon() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/equiped-weapon", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.playerWeapon = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedArmor() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/equiped-armor", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this2.playerArmor = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedTalisman() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/player/equiped-talisman", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this3.playerTalisman = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  refreshPathStep() {
    this.randomBackgroundImg();
    const observ = this.rest.sendGet("/player/current-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Call BE failed ", resp);
        return;
      }

      this.currentMonsterLvl = resp.body.number === 1 ? '1' : 'sup';
      this.stepPath = resp.body;
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  resetStats() {
    const observ = this.rest.sendGet("/location/reset-adventure-stats", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders());
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok) {
        console.error("Call BE failed ", resp);
        return;
      }
    }, err => {
      console.error("Call BE failed: ", err);
    });
    this.currentMonsterLvl = '1';
  }

  endScenario(event) {
    this.refreshPathStep();
  }

  randomBackgroundImg() {
    var _this4 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.backgroundImgID = Math.floor(Math.random() * 10);
    })();
  }

}

FrozenmountainsComponent.ɵfac = function FrozenmountainsComponent_Factory(t) {
  return new (t || FrozenmountainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};

FrozenmountainsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FrozenmountainsComponent,
  selectors: [["app-frozenmountains"]],
  decls: 50,
  vars: 21,
  consts: [[1, "intro-img"], [1, "close-btn", 3, "click"], ["src", "assets/worldmap/exit-icon.png"], [1, "info-battle-btn", 3, "click"], [1, "info-battle-txt"], ["src", "assets/worldmap/info-battle-icon.png"], [1, "disclaimer"], [1, "equipment"], [1, "equipment-inner"], [3, "item", "equipable"], [1, "path"], [1, "player-path"], ["id", "fight1", 1, "point"], [1, "line"], ["id", "event1", 1, "point"], ["id", "boss", 1, "point"], [1, "adventure"], [4, "ngIf"], [3, "monsterLvl", "endScenario"], [3, "endScenario"]],
  template: function FrozenmountainsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FrozenmountainsComponent_Template_div_click_1_listener() {
        return ctx.backToMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Esci");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FrozenmountainsComponent_Template_div_click_5_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Informazioni sulla battaglia");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "<Montagne Gelide>");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7)(14, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Equipaggiamento");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 10)(24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Percorso del giocatore");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11)(27, "div", 12)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Nemico 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 14)(32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Evento 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 12)(36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Nemico 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 14)(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Evento 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 15)(44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Boss");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, FrozenmountainsComponent_div_47_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, FrozenmountainsComponent_div_48_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, FrozenmountainsComponent_div_49_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerWeapon)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerArmor)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerTalisman)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"]("background-image: url(assets/frozenmountains/bg/img" + ctx.backgroundImgID + "-frozenmountains.jpg);");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 1 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 2 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 3 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 4 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 5 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "ENEMY");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "EVENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "BOSS");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__.ItemCardComponent, _frozenmountains_scenario_boss_frozenmountains_scenario_boss_component__WEBPACK_IMPORTED_MODULE_5__.FrozenmountainsScenarioBossComponent, _frozenmountains_scenario_enemy_frozenmountains_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_6__.FrozenmountainsScenarioEnemyComponent, _frozenmountains_scenario_event_frozenmountains_scenario_event_component__WEBPACK_IMPORTED_MODULE_7__.FrozenmountainsScenarioEventComponent],
  styles: ["span[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 0.9em;\r\n}\r\n\r\n.equipment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #ccc;\r\n    box-shadow: 0 0 10px black;\r\n    padding: 20px 10px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.equipment-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%] {\r\n    background-image: url('headimg-flamevolcano.jpg');\r\n}\r\n\r\n.path[_ngcontent-%COMP%] {\r\n    margin: 50px 0;\r\n    border-top: 1px solid gray;\r\n    border-bottom: 1px solid gray;\r\n    box-shadow: 0 0 5px black;\r\n    padding: 100px 0;\r\n\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0 auto 50px auto;\r\n}\r\n\r\n.path[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    text-shadow: 0 0 5px white;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 5px;\r\n    border: 10px;\r\n    margin: auto 5px;\r\n    background-color: black;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 120px;\r\n    background-color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1.7em;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%] {\r\n    border: 10px dashed green\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlEQUE4RTtBQUNsRjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0lBRWhCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoiZnJvemVubW91bnRhaW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeS1hbHQnO1xyXG4gICAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmVxdWlwbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uZXF1aXBtZW50LWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmludHJvLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9mbGFtZXZvbGNhbm8vaGVhZGltZy1mbGFtZXZvbGNhbm8uanBnJyk7XHJcbn1cclxuXHJcbi5wYXRoIHtcclxuICAgIG1hcmdpbjogNTBweCAwO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gNTBweCBhdXRvO1xyXG59XHJcblxyXG4ucGF0aCBoMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHdoaXRlO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGggLmxpbmUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBib3JkZXI6IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCAucG9pbnQge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCAucG9pbnQgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjdlbTtcclxufVxyXG5cclxuLnBsYXllci1wYXRoIC5wb2ludC5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxMHB4IGRhc2hlZCBncmVlblxyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 3561:
/*!**************************************************************************************************************!*\
  !*** ./src/app/frozenmountains/popup/frozenmountains-boss-failure/frozenmountains-boss-failure.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsBossFailureComponent": () => (/* binding */ FrozenmountainsBossFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FrozenmountainsBossFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
FrozenmountainsBossFailureComponent.ɵfac = function FrozenmountainsBossFailureComponent_Factory(t) { return new (t || FrozenmountainsBossFailureComponent)(); };
FrozenmountainsBossFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrozenmountainsBossFailureComponent, selectors: [["app-frozenmountains-boss-failure"]], decls: 13, vars: 0, consts: [[1, "container"], ["src", "assets/frozenmountains/boss-fail-frozenmountains.jpg", 1, "head-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function FrozenmountainsBossFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " La battaglia con lo Yeti e' stata troppo dura per te, il gigante ha una forza incredibile e ti costringe con ferite profonde a fuggire e tornare ai piedi della montagna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nel clima piu' caldo e con calma ti riesci a curare e riprendere completamente, ancora piu' carica ti appresti ad iniziare una nuova avventura. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Questa volta non e' andata bene, ma potrai riprovare quando sarai pronta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrozenmountainsBossFailureComponent_Template_button_click_10_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy1ib3NzLWZhaWx1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImZyb3plbm1vdW50YWlucy1ib3NzLWZhaWx1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5140:
/*!**************************************************************************************************************!*\
  !*** ./src/app/frozenmountains/popup/frozenmountains-boss-success/frozenmountains-boss-success.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsBossSuccessComponent": () => (/* binding */ FrozenmountainsBossSuccessComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);








function FrozenmountainsBossSuccessComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Colpo dopo colpo, la difficile battaglia finisce con uno Yeti ferito e stremato. Sei riuscita a dominare il gigante che fugge all'interno di una grotta lasciando un antico e decurato baule un po' coperto dalla neve.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Pulisci la neve superficiale e con forza sollevi il coperchio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Le vecchie cerniere scricchiolano e una si rompe per il troppo freddo, all'interno del baule trovi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-item-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7)(15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FrozenmountainsBossSuccessComponent_div_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.backToMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Esci dall'avventura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
  }
}

class FrozenmountainsBossSuccessComponent {
  constructor(rest) {
    this.rest = rest;
    this.reward = undefined;
  }

  ngOnInit() {
    this.getReward();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  getReward() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/boss/reward", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.reward = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

}

FrozenmountainsBossSuccessComponent.ɵfac = function FrozenmountainsBossSuccessComponent_Factory(t) {
  return new (t || FrozenmountainsBossSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

FrozenmountainsBossSuccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FrozenmountainsBossSuccessComponent,
  selectors: [["app-frozenmountains-boss-success"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], ["src", "assets/frozenmountains/boss-win-frozenmountains.jpg", 1, "head-img"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]],
  template: function FrozenmountainsBossSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FrozenmountainsBossSuccessComponent_div_0_Template, 18, 3, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__.ItemCardComponent],
  styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy1ib3NzLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJmcm96ZW5tb3VudGFpbnMtYm9zcy1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBkaXYge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5nb2xkLW1zZyBwIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 489:
/*!****************************************************************************************************************!*\
  !*** ./src/app/frozenmountains/popup/frozenmountains-popup-failure/frozenmountains-popup-failure.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsPopupFailureComponent": () => (/* binding */ FrozenmountainsPopupFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FrozenmountainsPopupFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
FrozenmountainsPopupFailureComponent.ɵfac = function FrozenmountainsPopupFailureComponent_Factory(t) { return new (t || FrozenmountainsPopupFailureComponent)(); };
FrozenmountainsPopupFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrozenmountainsPopupFailureComponent, selectors: [["app-frozenmountains-popup-failure"]], decls: 16, vars: 0, consts: [[1, "container"], [1, "head-msg"], [1, "image"], ["src", "assets/worldmap/defeated-player-img.png", 1, "player-img"], ["src", "assets/frozenmountains/fail-image-frozenmountains.jpg", 1, "background-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function FrozenmountainsPopupFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disfatta, in fuga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3)(6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Le minacce sono state troppo difficili per la piccola avventuriera, con qualche ammaccatura riesci a lasciare il luogo innevato e pericoloso, tornata ai piedi della montagna ti riesci a rimettere in sesto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Riapri la tua mappa e painifichi la tua prossima mossa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrozenmountainsPopupFailureComponent_Template_button_click_13_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".background-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 200px;\r\n    margin-top: 250px;\r\n    margin-left: 200px;\r\n    transition: transform 1s;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%]:hover {\r\n    transform:rotateY(180deg);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n@keyframes watchback { \r\n    50% { \r\n        transform: rotateY(150deg); \r\n    } \r\n    100% { \r\n        transform: rotateY(180deg); \r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy1wb3B1cC1mYWlsdXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUNBO0lBS0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFVQTtJQUNJO1FBRUksMEJBQTBCO0lBQzlCO0lBQ0E7UUFFSSwwQkFBMEI7SUFDOUI7QUFDSiIsImZpbGUiOiJmcm96ZW5tb3VudGFpbnMtcG9wdXAtZmFpbHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGxheWVyLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbn1cclxuLnBsYXllci1pbWc6aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyB3YXRjaGJhY2sgeyBcclxuICAgIDUwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDE1MGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfSBcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F0Y2hiYWNrIHsgXHJcbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxNTBkZWcpOyB9IFxyXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH0gXHJcbn1cclxuQGtleWZyYW1lcyB3YXRjaGJhY2sgeyBcclxuICAgIDUwJSB7IFxyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE1MGRlZyk7IFxyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNTBkZWcpOyBcclxuICAgIH0gXHJcbiAgICAxMDAlIHsgXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IFxyXG4gICAgfSBcclxufSJdfQ== */"] });


/***/ }),

/***/ 8227:
/*!****************************************************************************************************************!*\
  !*** ./src/app/frozenmountains/popup/frozenmountains-popup-success/frozenmountains-popup-success.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FrozenmountainsPopupSuccessComponent": () => (/* binding */ FrozenmountainsPopupSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var src_app_vo_enemy_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vo/enemy-vo */ 2469);









function FrozenmountainsPopupSuccessComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Congratulazioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Il mostro e' stato sconfitto, ecco la tua ricompensa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-item-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FrozenmountainsPopupSuccessComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Prossimo passo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
} }
function FrozenmountainsPopupSuccessComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Uh oh, mi sa che ci sono stati problemi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class FrozenmountainsPopupSuccessComponent {
    constructor(dialogRef, data, rest) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.rest = rest;
        this.reward = undefined;
    }
    ngOnInit() {
        const observ = this.rest
            .sendGet("/enemy/reward/assign-and-get/" + this.data.id, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok || !resp.body) {
                console.error("Call BE failed: ", resp);
                return;
            }
            this.reward = resp.body;
        }, err => {
            console.error("Call BE failed: ", err);
        });
    }
    close() {
        this.dialogRef.close();
    }
}
FrozenmountainsPopupSuccessComponent.ɵfac = function FrozenmountainsPopupSuccessComponent_Factory(t) { return new (t || FrozenmountainsPopupSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
FrozenmountainsPopupSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FrozenmountainsPopupSuccessComponent, selectors: [["app-frozenmountains-popup-success"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "head-msg"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]], template: function FrozenmountainsPopupSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FrozenmountainsPopupSuccessComponent_div_0_Template, 16, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FrozenmountainsPopupSuccessComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reward);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__.ItemCardComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyb3plbm1vdW50YWlucy1wb3B1cC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJmcm96ZW5tb3VudGFpbnMtcG9wdXAtc3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIgZGl2IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5nb2xkLW1zZyBwIGltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBjb2xvcjogYXp1cmU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2VhZ3JlZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1816:
/*!**********************************************************************************!*\
  !*** ./src/app/iceland/iceland-scenario-boss/iceland-scenario-boss.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandScenarioBossComponent": () => (/* binding */ IcelandScenarioBossComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _popup_iceland_boss_failure_iceland_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/iceland-boss-failure/iceland-boss-failure.component */ 5186);
/* harmony import */ var _popup_iceland_boss_success_iceland_boss_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/iceland-boss-success/iceland-boss-success.component */ 3254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enemy/boss-management/boss-management.component */ 2102);






class IcelandScenarioBossComponent {
    constructor(dialogSuccess, dialogFail) {
        this.dialogSuccess = dialogSuccess;
        this.dialogFail = dialogFail;
    }
    ngOnInit() {
    }
    bossOver(status) {
        if (status === 'failed') {
            console.debug("Boss fight failed");
            this.openDialogFailure();
        }
        else if (status === 'success') {
            console.debug("Boss fight success");
            this.openDialogSuccess();
        }
        else {
            console.error("Not understand the status " + status);
        }
    }
    openDialogSuccess() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogSuccess.open(_popup_iceland_boss_success_iceland_boss_success_component__WEBPACK_IMPORTED_MODULE_1__.IcelandBossSuccessComponent, dialogConfig);
    }
    openDialogFailure() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "1000ms";
        dialogConfig.closeOnNavigation = true;
        this.dialogFail.open(_popup_iceland_boss_failure_iceland_boss_failure_component__WEBPACK_IMPORTED_MODULE_0__.IcelandBossFailureComponent, dialogConfig);
    }
}
IcelandScenarioBossComponent.ɵfac = function IcelandScenarioBossComponent_Factory(t) { return new (t || IcelandScenarioBossComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog)); };
IcelandScenarioBossComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IcelandScenarioBossComponent, selectors: [["app-iceland-scenario-boss"]], decls: 2, vars: 1, consts: [[1, "boss-scenario"], [3, "bossLocation", "bossIsOver"]], template: function IcelandScenarioBossComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-boss-management", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("bossIsOver", function IcelandScenarioBossComponent_Template_app_boss_management_bossIsOver_1_listener($event) { return ctx.bossOver($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bossLocation", "iceland");
    } }, dependencies: [_enemy_boss_management_boss_management_component__WEBPACK_IMPORTED_MODULE_2__.BossManagementComponent], styles: [".boss-scenario[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtc2NlbmFyaW8tYm9zcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJpY2VsYW5kLXNjZW5hcmlvLWJvc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3NzLXNjZW5hcmlvIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8444:
/*!************************************************************************************!*\
  !*** ./src/app/iceland/iceland-scenario-enemy/iceland-scenario-enemy.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandScenarioEnemyComponent": () => (/* binding */ IcelandScenarioEnemyComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _popup_iceland_popup_failure_iceland_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/iceland-popup-failure/iceland-popup-failure.component */ 9694);
/* harmony import */ var _popup_iceland_popup_success_iceland_popup_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/iceland-popup-success/iceland-popup-success.component */ 4435);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/enemy-card/enemy-card.component */ 3422);
/* harmony import */ var _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enemy/enemy-management/enemy-management.component */ 7413);














function IcelandScenarioEnemyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-enemy-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div")(3, "app-enemy-management", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("adventureIsOver", function IcelandScenarioEnemyComponent_div_1_Template_app_enemy_management_adventureIsOver_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.adventureIsOver($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enemy", ctx_r0.randomID);
  }
}

class IcelandScenarioEnemyComponent {
  constructor(dialogSuccess, dialogFail, rest) {
    this.dialogSuccess = dialogSuccess;
    this.dialogFail = dialogFail;
    this.rest = rest;
    this.randomID = undefined;
    this.monsterLvl = undefined;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }

  ngOnInit() {
    const observ = this.rest.sendGet("/location/iceland/random/lvl" + this.monsterLvl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || resp.body === undefined || resp.body === null || resp.body < 0) {
        console.error("Call BE failed ", resp);
        return;
      }

      const observ = this.rest.sendGet("/enemy/enemy-by-id/" + resp.body, new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders());
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp2 => {
        if (!resp2 || !resp2.ok || !resp2.body) {
          return;
        }

        this.randomID = resp2.body;
      }, err2 => {
        console.error("Call BE failed: ", err2);
      });
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  adventureIsOver(adventureStatus) {
    if (!adventureStatus) return;

    if (adventureStatus === 'success') {
      // Proceed to next adventure step
      this.openDialogSuccess(); // -> this will add a reward

      return;
    }

    if (adventureStatus === 'fail') {
      // Stop adventure
      this.openDialogFailure();
      return;
    }
  }

  nextPathStep() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

  nextStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.nextPathStep();

      _this2.endScenario.emit(true);
    })();
  }

  openDialogSuccess() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogSuccess.open(_popup_iceland_popup_success_iceland_popup_success_component__WEBPACK_IMPORTED_MODULE_2__.IcelandPopupSuccessComponent, dialogConfig).afterClosed().subscribe(() => this.nextStep());
  }

  openDialogFailure() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "1000ms";
    dialogConfig.data = this.randomID;
    dialogConfig.closeOnNavigation = true;
    this.dialogFail.open(_popup_iceland_popup_failure_iceland_popup_failure_component__WEBPACK_IMPORTED_MODULE_1__.IcelandPopupFailureComponent, dialogConfig);
  }

}

IcelandScenarioEnemyComponent.ɵfac = function IcelandScenarioEnemyComponent_Factory(t) {
  return new (t || IcelandScenarioEnemyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService));
};

IcelandScenarioEnemyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: IcelandScenarioEnemyComponent,
  selectors: [["app-iceland-scenario-enemy"]],
  inputs: {
    monsterLvl: "monsterLvl"
  },
  outputs: {
    endScenario: "endScenario"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "battlefield"], ["class", "enemy-card", 4, "ngIf"], [1, "enemy-card"], [3, "enemy"], [3, "enemy", "adventureIsOver"]],
  template: function IcelandScenarioEnemyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, IcelandScenarioEnemyComponent_div_1_Template, 4, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.randomID);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _cards_enemy_card_enemy_card_component__WEBPACK_IMPORTED_MODULE_4__.EnemyCardComponent, _enemy_enemy_management_enemy_management_component__WEBPACK_IMPORTED_MODULE_5__.EnemyManagementComponent],
  styles: [".enemy-card[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-wrap: wrap;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.enemy-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtc2NlbmFyaW8tZW5lbXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJpY2VsYW5kLXNjZW5hcmlvLWVuZW15LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5lbXktY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmVuZW15LWNhcmQgZGl2IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 3782:
/*!************************************************************************************!*\
  !*** ./src/app/iceland/iceland-scenario-event/iceland-scenario-event.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandScenarioEventComponent": () => (/* binding */ IcelandScenarioEventComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);






class IcelandScenarioEventComponent {
  constructor(rest) {
    this.rest = rest;
    this.endScenario = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.disableButton = false;
  }

  ngOnInit() {}

  nextStepAction() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.disableButton = true;
      yield _this.nextPathStep();

      _this.endScenario.emit(true);
    })();
  }

  nextPathStep() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/increase-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
        "accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Call BE failed ", resp);
          return;
        }
      }, err => {
        console.error("Call BE failed: ", err);
      });
    })();
  }

}

IcelandScenarioEventComponent.ɵfac = function IcelandScenarioEventComponent_Factory(t) {
  return new (t || IcelandScenarioEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

IcelandScenarioEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: IcelandScenarioEventComponent,
  selectors: [["app-iceland-scenario-event"]],
  outputs: {
    endScenario: "endScenario"
  },
  decls: 8,
  vars: 1,
  consts: [[2, "padding", "10px", 3, "disabled", "click"]],
  template: function IcelandScenarioEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Non ho avuto tempo di implementarlo, scusami");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Considera che stavi passeggiando verso la direzione indicata dalla mappa quando vedi:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IcelandScenarioEventComponent_Template_button_click_5_listener() {
        return ctx.nextStepAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Scopri cosa vedi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableButton);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpY2VsYW5kLXNjZW5hcmlvLWV2ZW50LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 1389:
/*!******************************************************!*\
  !*** ./src/app/iceland/iceland/iceland.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandComponent": () => (/* binding */ IcelandComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/vo/StepVO */ 8013);
/* harmony import */ var src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/world-map/battle-info/battle-info.component */ 8397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var _iceland_scenario_boss_iceland_scenario_boss_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iceland-scenario-boss/iceland-scenario-boss.component */ 1816);
/* harmony import */ var _iceland_scenario_enemy_iceland_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../iceland-scenario-enemy/iceland-scenario-enemy.component */ 8444);
/* harmony import */ var _iceland_scenario_event_iceland_scenario_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iceland-scenario-event/iceland-scenario-event.component */ 3782);















function IcelandComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-iceland-scenario-enemy", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function IcelandComponent_div_47_Template_app_iceland_scenario_enemy_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("monsterLvl", ctx_r0.currentMonsterLvl);
  }
}

function IcelandComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "app-iceland-scenario-event", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("endScenario", function IcelandComponent_div_48_Template_app_iceland_scenario_event_endScenario_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.endScenario($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function IcelandComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-iceland-scenario-boss");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

class IcelandComponent {
  constructor(rest, dialog) {
    this.rest = rest;
    this.dialog = dialog;
    this.playerWeapon = null;
    this.playerArmor = null;
    this.playerTalisman = null;
    this.currentMonsterLvl = undefined;
    this.stepPath = new src_app_vo_StepVO__WEBPACK_IMPORTED_MODULE_1__.StepVO(1, 'ENEMY');
    this.backgroundImgID = 0;
  }

  ngOnInit() {
    this.randomBackgroundImg();
    this.resetStats();
    this.getEquipedWeapon();
    this.getEquipedArmor();
    this.getEquipedTalisman();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  openDialog() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "95%";
    dialogConfig.height = "95%";
    dialogConfig.enterAnimationDuration = "250ms";
    this.dialog.open(src_app_world_map_battle_info_battle_info_component__WEBPACK_IMPORTED_MODULE_2__.BattleInfoComponent, dialogConfig);
  }

  getEquipedWeapon() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/player/equiped-weapon", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.playerWeapon = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedArmor() {
    var _this2 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this2.rest.sendGet("/player/equiped-armor", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this2.playerArmor = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  getEquipedTalisman() {
    var _this3 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this3.rest.sendGet("/player/equiped-talisman", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this3.playerTalisman = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

  refreshPathStep() {
    this.randomBackgroundImg();
    const observ = this.rest.sendGet("/player/current-step", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
      "accept": "application/json"
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok || !resp.body) {
        console.error("Call BE failed ", resp);
        return;
      }

      this.currentMonsterLvl = resp.body.number === 1 ? '1' : 'sup';
      this.stepPath = resp.body;
    }, err => {
      console.error("Call BE failed: ", err);
    });
  }

  resetStats() {
    const observ = this.rest.sendGet("/location/reset-adventure-stats", new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders());
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(observ).then(resp => {
      if (!resp || !resp.ok) {
        console.error("Call BE failed ", resp);
        return;
      }
    }, err => {
      console.error("Call BE failed: ", err);
    });
    this.currentMonsterLvl = '1';
  }

  endScenario(event) {
    this.refreshPathStep();
  }

  randomBackgroundImg() {
    var _this4 = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.backgroundImgID = Math.floor(Math.random() * 10);
    })();
  }

}

IcelandComponent.ɵfac = function IcelandComponent_Factory(t) {
  return new (t || IcelandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__.RestService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
};

IcelandComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: IcelandComponent,
  selectors: [["app-iceland"]],
  decls: 50,
  vars: 21,
  consts: [[1, "intro-img"], [1, "close-btn", 3, "click"], ["src", "assets/worldmap/exit-icon.png"], [1, "info-battle-btn", 3, "click"], [1, "info-battle-txt"], ["src", "assets/worldmap/info-battle-icon.png"], [1, "disclaimer"], [1, "equipment"], [1, "equipment-inner"], [3, "item", "equipable"], [1, "path"], [1, "player-path"], ["id", "fight1", 1, "point"], [1, "line"], ["id", "event1", 1, "point"], ["id", "boss", 1, "point"], [1, "adventure"], [4, "ngIf"], [3, "monsterLvl", "endScenario"], [3, "endScenario"]],
  template: function IcelandComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IcelandComponent_Template_div_click_1_listener() {
        return ctx.backToMap();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Esci");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function IcelandComponent_Template_div_click_5_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Informazioni sulla battaglia");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "<Lande ghiacciate>");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 7)(14, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Equipaggiamento");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 8)(17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "app-item-card", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 10)(24, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Percorso del giocatore");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11)(27, "div", 12)(28, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Nemico 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 14)(32, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Evento 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 12)(36, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Nemico 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 14)(40, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Evento 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 15)(44, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Boss");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, IcelandComponent_div_47_Template, 2, 1, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, IcelandComponent_div_48_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, IcelandComponent_div_49_Template, 2, 0, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerWeapon)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerArmor)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("item", ctx.playerTalisman)("equipable", "N");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"]("background-image: url(assets/iceland/bg/img" + ctx.backgroundImgID + "-iceland.jpg);");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 1 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 2 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 3 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 4 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.stepPath.number === 5 ? "active" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "ENEMY");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "EVENT");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.stepPath.type === "BOSS");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_4__.ItemCardComponent, _iceland_scenario_boss_iceland_scenario_boss_component__WEBPACK_IMPORTED_MODULE_5__.IcelandScenarioBossComponent, _iceland_scenario_enemy_iceland_scenario_enemy_component__WEBPACK_IMPORTED_MODULE_6__.IcelandScenarioEnemyComponent, _iceland_scenario_event_iceland_scenario_event_component__WEBPACK_IMPORTED_MODULE_7__.IcelandScenarioEventComponent],
  styles: ["span[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 0.9em;\r\n}\r\n\r\n.equipment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    background-color: #ccc;\r\n    box-shadow: 0 0 10px black;\r\n    padding: 20px 10px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.equipment-inner[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.intro-img[_ngcontent-%COMP%] {\r\n    background-image: url('headimg-iceland.jpg');\r\n}\r\n\r\n.path[_ngcontent-%COMP%] {\r\n    margin: 50px 0;\r\n    border-top: 1px solid gray;\r\n    border-bottom: 1px solid gray;\r\n    box-shadow: 0 0 5px black;\r\n    padding: 100px 0;\r\n\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 0 auto 50px auto;\r\n}\r\n\r\n.path[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    text-shadow: 0 0 5px white;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    height: 5px;\r\n    border: 10px;\r\n    margin: auto 5px;\r\n    background-color: black;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 120px;\r\n    background-color: black;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: crosshair;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 1.7em;\r\n}\r\n\r\n.player-path[_ngcontent-%COMP%]   .point.active[_ngcontent-%COMP%] {\r\n    border: 10px dashed green\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw0Q0FBb0U7QUFDeEU7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsZ0JBQWdCOztJQUVoQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtBQUNKIiwiZmlsZSI6ImljZWxhbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdmYW50YXN5LWFsdCc7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uZXF1aXBtZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5lcXVpcG1lbnQtaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uaW50cm8taW1nIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ljZWxhbmQvaGVhZGltZy1pY2VsYW5kLmpwZycpO1xyXG59XHJcblxyXG4ucGF0aCB7XHJcbiAgICBtYXJnaW46IDUwcHggMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnBsYXllci1wYXRoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvIDUwcHggYXV0bztcclxufVxyXG5cclxuLnBhdGggaDIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB3aGl0ZTtcclxufVxyXG5cclxuLnBsYXllci1wYXRoIC5saW5lIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyOiAxMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGggLnBvaW50IHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG59XHJcblxyXG4ucGxheWVyLXBhdGggLnBvaW50IHNwYW4ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS43ZW07XHJcbn1cclxuXHJcbi5wbGF5ZXItcGF0aCAucG9pbnQuYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMTBweCBkYXNoZWQgZ3JlZW5cclxufVxyXG5cclxuIl19 */"]
});

/***/ }),

/***/ 5186:
/*!**************************************************************************************!*\
  !*** ./src/app/iceland/popup/iceland-boss-failure/iceland-boss-failure.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandBossFailureComponent": () => (/* binding */ IcelandBossFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IcelandBossFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
IcelandBossFailureComponent.ɵfac = function IcelandBossFailureComponent_Factory(t) { return new (t || IcelandBossFailureComponent)(); };
IcelandBossFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IcelandBossFailureComponent, selectors: [["app-iceland-boss-failure"]], decls: 11, vars: 0, consts: [[1, "container"], ["src", "assets/iceland/boss-fail-iceland.jpg", 1, "head-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function IcelandBossFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " All'improvviso il serpente soffia piu' forte e genera una tormenta di neve, e' impossibile vedere a piu' di un metro di distanza. Ferita sei costretta a lasciare l'isola e a ritirarti in un posto sicuro per curarti e riscaldarti. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Questa volta non e' andata bene, ma potrai riprovare quando sarai pronta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcelandBossFailureComponent_Template_button_click_8_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtYm9zcy1mYWlsdXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJpY2VsYW5kLWJvc3MtZmFpbHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59Il19 */"] });


/***/ }),

/***/ 3254:
/*!**************************************************************************************!*\
  !*** ./src/app/iceland/popup/iceland-boss-success/iceland-boss-success.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandBossSuccessComponent": () => (/* binding */ IcelandBossSuccessComponent)
/* harmony export */ });
/* harmony import */ var C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);








function IcelandBossSuccessComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Il serpentone ora e' a terra, come se si fosse sciolto al tuo incredibile calore. Lentamente striscia in un angolo della grotta e lascia la stanza libera di essere esplorata, al suo interno trovi un antico barile, probabilmente lasciato qui da qualche sventurato marinaio. Lo apri e all'interno trovi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "app-item-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IcelandBossSuccessComponent_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.backToMap());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Esci dall'avventura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
  }
}

class IcelandBossSuccessComponent {
  constructor(rest) {
    this.rest = rest;
    this.reward = undefined;
  }

  ngOnInit() {
    this.getReward();
  }

  backToMap() {
    location.href = "/?navPage=worldmap";
  }

  getReward() {
    var _this = this;

    return (0,C_Users_LUCAMARTINELLI_workspace_MY_WORK_Aentur_aentur_src_main_angular_aentur_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const observ = _this.rest.sendGet("/boss/reward", new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        "Accept": "application/json"
      }));

      yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
        if (!resp || !resp.ok || !resp.body) {
          console.error("Error BE call: " + resp);
          return;
        }

        _this.reward = resp.body;
      }, err => {
        console.error("Error BE call: " + err);
        return;
      });
    })();
  }

}

IcelandBossSuccessComponent.ɵfac = function IcelandBossSuccessComponent_Factory(t) {
  return new (t || IcelandBossSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService));
};

IcelandBossSuccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: IcelandBossSuccessComponent,
  selectors: [["app-iceland-boss-success"]],
  decls: 1,
  vars: 1,
  consts: [["class", "container", 4, "ngIf"], [1, "container"], ["src", "assets/iceland/boss-win-iceland.jpg", 1, "head-img"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]],
  template: function IcelandBossSuccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, IcelandBossSuccessComponent_div_0_Template, 14, 3, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_2__.ItemCardComponent],
  styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.head-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtYm9zcy1zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoiaWNlbGFuZC1ib3NzLXN1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIGRpdiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmdvbGQtbXNnIHAgaW1nIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzZWFncmVlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"]
});

/***/ }),

/***/ 9694:
/*!****************************************************************************************!*\
  !*** ./src/app/iceland/popup/iceland-popup-failure/iceland-popup-failure.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandPopupFailureComponent": () => (/* binding */ IcelandPopupFailureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class IcelandPopupFailureComponent {
    constructor() { }
    backToMap() {
        location.href = "/?navPage=worldmap";
    }
}
IcelandPopupFailureComponent.ɵfac = function IcelandPopupFailureComponent_Factory(t) { return new (t || IcelandPopupFailureComponent)(); };
IcelandPopupFailureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IcelandPopupFailureComponent, selectors: [["app-iceland-popup-failure"]], decls: 16, vars: 0, consts: [[1, "container"], [1, "head-msg"], [1, "image"], ["src", "assets/worldmap/defeated-player-img.png", 1, "player-img"], ["src", "assets/iceland/fail-image-iceland.jpg", 1, "background-img"], [1, "disclaimer"], [1, "button"], [3, "click"]], template: function IcelandPopupFailureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Disfatta, in fuga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3)(6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Le minacce sono state troppo difficili per la piccola avventuriera, con qualche ammaccatura riesci a lasciare il luogo oscuro e pericoloso e tornata all'entrata ti riesci a rimettere in sesto.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Riapri la tua mappa e painifichi la tua prossima mossa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcelandPopupFailureComponent_Template_button_click_13_listener() { return ctx.backToMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Esci dall'avventura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".background-img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    height: 200px;\r\n    margin-top: 250px;\r\n    margin-left: 200px;\r\n    transition: transform 1s;\r\n}\r\n\r\n.player-img[_ngcontent-%COMP%]:hover {\r\n    transform:rotateY(180deg);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    padding: 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n@keyframes watchback { \r\n    50% { \r\n        transform: rotateY(150deg); \r\n    } \r\n    100% { \r\n        transform: rotateY(180deg); \r\n    } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtcG9wdXAtZmFpbHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUtJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBVUE7SUFDSTtRQUVJLDBCQUEwQjtJQUM5QjtJQUNBO1FBRUksMEJBQTBCO0lBQzlCO0FBQ0oiLCJmaWxlIjoiaWNlbGFuZC1wb3B1cC1mYWlsdXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wbGF5ZXItaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxufVxyXG4ucGxheWVyLWltZzpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTpyb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHdhdGNoYmFjayB7IFxyXG4gICAgNTAlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVkoMTUwZGVnKTsgfSBcclxuICAgIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyB9IFxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyB3YXRjaGJhY2sgeyBcclxuICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE1MGRlZyk7IH0gXHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgfSBcclxufVxyXG5Aa2V5ZnJhbWVzIHdhdGNoYmFjayB7IFxyXG4gICAgNTAlIHsgXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTUwZGVnKTsgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE1MGRlZyk7IFxyXG4gICAgfSBcclxuICAgIDEwMCUgeyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpOyBcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTsgXHJcbiAgICB9IFxyXG59Il19 */"] });


/***/ }),

/***/ 4435:
/*!****************************************************************************************!*\
  !*** ./src/app/iceland/popup/iceland-popup-success/iceland-popup-success.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IcelandPopupSuccessComponent": () => (/* binding */ IcelandPopupSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/rest-service */ 1077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../cards/item-card/item-card.component */ 5267);
/* harmony import */ var src_app_vo_enemy_vo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/vo/enemy-vo */ 2469);









function IcelandPopupSuccessComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Congratulazioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Il mostro e' stato sconfitto, ecco la tua ricompensa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-item-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IcelandPopupSuccessComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.close()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Prossimo passo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Oro: ", ctx_r0.reward.gold, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("item", ctx_r0.reward.item)("equipable", "N");
} }
function IcelandPopupSuccessComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Uh oh, mi sa che ci sono stati problemi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
class IcelandPopupSuccessComponent {
    constructor(dialogRef, data, rest) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.rest = rest;
        this.reward = undefined;
    }
    ngOnInit() {
        const observ = this.rest
            .sendGet("/enemy/reward/assign-and-get/" + this.data.id, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok || !resp.body) {
                console.error("Call BE failed: ", resp);
                return;
            }
            this.reward = resp.body;
        }, err => {
            console.error("Call BE failed: ", err);
        });
    }
    close() {
        this.dialogRef.close();
    }
}
IcelandPopupSuccessComponent.ɵfac = function IcelandPopupSuccessComponent_Factory(t) { return new (t || IcelandPopupSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_0__.RestService)); };
IcelandPopupSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IcelandPopupSuccessComponent, selectors: [["app-iceland-popup-success"]], decls: 2, vars: 2, consts: [["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "head-msg"], [1, "gold-msg"], ["src", "assets/worldmap/gold.png"], [1, "item-msg"], [3, "item", "equipable"], [1, "button"], [3, "click"]], template: function IcelandPopupSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, IcelandPopupSuccessComponent_div_0_Template, 16, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IcelandPopupSuccessComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.reward);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.reward);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _cards_item_card_item_card_component__WEBPACK_IMPORTED_MODULE_1__.ItemCardComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-size: 1.2em;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.gold-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    color: azure;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: navy;\r\n    border: none;\r\n    border-radius: 2px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover {\r\n    border: 2px solid lightseagreen;\r\n    cursor: pointer;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljZWxhbmQtcG9wdXAtc3VjY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoiaWNlbGFuZC1wb3B1cC1zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciBkaXYge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmdvbGQtbXNnIHAgaW1nIHtcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGNvbG9yOiBhenVyZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRzZWFncmVlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 1077:
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestService": () => (/* binding */ RestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPostGetRawText(url, body, headers) {
        // call
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendPostWithString(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response'
        });
    }
    sendDelete(url, headers) {
        if (!headers)
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        return this.http.delete(url, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendPost(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendGet(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
    sendGetRawText(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendGetBlob(url) {
        return this.http.get(url, {
            observe: 'response',
            responseType: 'blob'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1207:
/*!*********************************!*\
  !*** ./src/app/routes.utils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesUtils": () => (/* binding */ RoutesUtils)
/* harmony export */ });
/* harmony import */ var _celestian_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celestian/home/home.component */ 342);
/* harmony import */ var _celestian_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./celestian/shop/shop.component */ 2601);
/* harmony import */ var _darkwood_darkwood_darkwood_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkwood/darkwood/darkwood.component */ 5264);
/* harmony import */ var _flamevolcano_flamevolcano_flamevolcano_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flamevolcano/flamevolcano/flamevolcano.component */ 208);
/* harmony import */ var _frozenmountains_frozenmountains_frozenmountains_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frozenmountains/frozenmountains/frozenmountains.component */ 5805);
/* harmony import */ var _iceland_iceland_iceland_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iceland/iceland/iceland.component */ 1389);
/* harmony import */ var _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world-map/world-map.component */ 3220);







class RoutesUtils {
    static getRoutes() {
        return [
            {
                matcher: (u) => this.checkQSUrl(u, [""]),
                component: _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_6__.WorldMapComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "worldmap"),
                component: _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_6__.WorldMapComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "home"),
                component: _celestian_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "shop"),
                component: _celestian_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__.ShopComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "darkwood"),
                component: _darkwood_darkwood_darkwood_component__WEBPACK_IMPORTED_MODULE_2__.DarkwoodComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "iceland"),
                component: _iceland_iceland_iceland_component__WEBPACK_IMPORTED_MODULE_5__.IcelandComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "frozenmountains"),
                component: _frozenmountains_frozenmountains_frozenmountains_component__WEBPACK_IMPORTED_MODULE_4__.FrozenmountainsComponent
            },
            {
                matcher: (u) => this.checkQSUrl(u, "flamevolcano"),
                component: _flamevolcano_flamevolcano_flamevolcano_component__WEBPACK_IMPORTED_MODULE_3__.FlamevolcanoComponent
            },
            { path: "", component: _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_6__.WorldMapComponent }
        ];
    }
    static checkQSUrl(url, flowsToMatch) {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, p) => searchParams.get(p),
        });
        let page = params.navPage;
        let selFlows = [];
        if (flowsToMatch instanceof Array) {
            selFlows = flowsToMatch;
        }
        else {
            selFlows.push(flowsToMatch);
        }
        for (const s of selFlows) {
            if (page === s) {
                return {
                    consumed: url
                };
            }
        }
        return null;
    }
}


/***/ }),

/***/ 8013:
/*!******************************!*\
  !*** ./src/app/vo/StepVO.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepVO": () => (/* binding */ StepVO)
/* harmony export */ });
class StepVO {
    constructor(number, type) {
        this._number = number ? number : 0;
        this._type = type ? type : 'ENEMY';
    }
    get number() {
        return this._number;
    }
    set number(number) {
        this._number = number;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
}


/***/ }),

/***/ 2469:
/*!********************************!*\
  !*** ./src/app/vo/enemy-vo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnemyAttackVO": () => (/* binding */ EnemyAttackVO),
/* harmony export */   "EnemyDefenseVO": () => (/* binding */ EnemyDefenseVO),
/* harmony export */   "EnemyVO": () => (/* binding */ EnemyVO)
/* harmony export */ });
class EnemyVO {
    constructor() {
        this._id = -1;
        this._name = "";
        this._description = "";
        this._difficulty = "";
        this._attacks = [];
        this._defences = [];
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get value() {
        return this._name;
    }
    set description(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }
    get difficulty() {
        return this._difficulty;
    }
    set attacks(attacks) {
        this._attacks = attacks;
    }
    get attacks() {
        return this._attacks;
    }
    set defences(defences) {
        this._defences = defences;
    }
    get defences() {
        return this._defences;
    }
}
class EnemyAttackVO {
    constructor() {
        this._id = -1;
        this._name = "";
        this._effect = "";
        this._difficulty = 0;
        this._category = [];
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set effect(effect) {
        this._effect = effect;
    }
    get effect() {
        return this._effect;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }
    get difficulty() {
        return this._difficulty;
    }
    set category(category) {
        this._category = category;
    }
    get category() {
        return this._category;
    }
}
class EnemyDefenseVO {
    constructor() {
        this._id = -1;
        this._name = "";
        this._effect = "";
        this._difficulty = 0;
        this._category = [];
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set effect(effect) {
        this._effect = effect;
    }
    get effect() {
        return this._effect;
    }
    set difficulty(difficulty) {
        this._difficulty = difficulty;
    }
    get difficulty() {
        return this._difficulty;
    }
    set category(category) {
        this._category = category;
    }
    get category() {
        return this._category;
    }
}


/***/ }),

/***/ 8397:
/*!****************************************************************!*\
  !*** ./src/app/world-map/battle-info/battle-info.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleInfoComponent": () => (/* binding */ BattleInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);


class BattleInfoComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
}
BattleInfoComponent.ɵfac = function BattleInfoComponent_Factory(t) { return new (t || BattleInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
BattleInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BattleInfoComponent, selectors: [["app-battle-info"]], decls: 13, vars: 0, consts: [[1, "mat-raised-button", 3, "click"]], template: function BattleInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions")(1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BattleInfoComponent_Template_button_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Informazioni sul gioco");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " La battaglia avviene lanciando il/i dado/i richiesto/i e indicando se il risultato rispetta la condizione visualizzata, premi su Successo se il test viene superato, altrimenti premi Fallimento.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Se sconfiggi il nemico riceverai una ricompensa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Se vieni sconfitta, non ti preoccupare, dovrai lasciare l'avventura corrente, ma portai riprovarla subito dall'inizio o tentarne una nuova.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I mostri sono casuali, ad goni incontro potrebbero cambiare\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".mat-raised-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 8%;\r\n    top: 2%;\r\n    padding: 5px 10px;\r\n    border-radius: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImJhdHRsZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDglO1xyXG4gICAgdG9wOiAyJTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 4628:
/*!**********************************************************************************************!*\
  !*** ./src/app/world-map/point-description/location-darkwood/location-darkwood.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationDarkwoodComponent": () => (/* binding */ LocationDarkwoodComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocationDarkwoodComponent {
    constructor() { }
    moveTo(page) {
        location.href = "?navPage=" + page;
    }
}
LocationDarkwoodComponent.ɵfac = function LocationDarkwoodComponent_Factory(t) { return new (t || LocationDarkwoodComponent)(); };
LocationDarkwoodComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationDarkwoodComponent, selectors: [["app-location-darkwood"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "head"], [1, "body"], [1, "left-col"], [1, "right-col"], [3, "click"]], template: function LocationDarkwoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Da sempre evitato, questo luogo e' famoso per essere infestato da spiriti e mostri. Solo i piu' coraggiosi si avventurerebbero qui dentro.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Si dice che piu' ci si addentra piu' la luce diminuisce e gli alberi nascondono il sentiero, come se si muovessero. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inizia l'avventura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationDarkwoodComponent_Template_button_click_11_listener() { return ctx.moveTo("darkwood"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Foresta Oscura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".left-col[_ngcontent-%COMP%] {\r\n    padding: 0 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWRhcmt3b29kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImxvY2F0aW9uLWRhcmt3b29kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1jb2wge1xyXG4gICAgcGFkZGluZzogMCAyJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 9791:
/*!******************************************************************************************************!*\
  !*** ./src/app/world-map/point-description/location-flamevolcano/location-flamevolcano.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationFlamevolcanoComponent": () => (/* binding */ LocationFlamevolcanoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocationFlamevolcanoComponent {
    constructor() { }
    moveTo(page) {
        location.href = "?navPage=" + page;
    }
}
LocationFlamevolcanoComponent.ɵfac = function LocationFlamevolcanoComponent_Factory(t) { return new (t || LocationFlamevolcanoComponent)(); };
LocationFlamevolcanoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationFlamevolcanoComponent, selectors: [["app-location-flamevolcano"]], decls: 15, vars: 0, consts: [[1, "container"], [1, "head"], [1, "body"], [1, "left-col"], [1, "right-col"], [3, "click"]], template: function LocationFlamevolcanoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " La temperatura e' davvero elevata e spesso schizzano gocce di lava e pietra qua e la'.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Il vulcano e' da sempre un luogo pericoloso, nessuno ha mai cercato di costruire vicino a causa delle colate laviche che cambiano percorso ad ogni eruzione.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Girano voci su enormi creature e mostri demoniaci in questi luoghi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inizia l'avventura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationFlamevolcanoComponent_Template_button_click_13_listener() { return ctx.moveTo("flamevolcano"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vulcano Fiammante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".left-col[_ngcontent-%COMP%] {\r\n    padding: 0 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWZsYW1ldm9sY2Fuby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJsb2NhdGlvbi1mbGFtZXZvbGNhbm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwIDIlO1xyXG59Il19 */"] });


/***/ }),

/***/ 6794:
/*!************************************************************************************************************!*\
  !*** ./src/app/world-map/point-description/location-frozenmountains/location-frozenmountains.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationFrozenmountainsComponent": () => (/* binding */ LocationFrozenmountainsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocationFrozenmountainsComponent {
    constructor() { }
    moveTo(page) {
        location.href = "?navPage=" + page;
    }
}
LocationFrozenmountainsComponent.ɵfac = function LocationFrozenmountainsComponent_Factory(t) { return new (t || LocationFrozenmountainsComponent)(); };
LocationFrozenmountainsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationFrozenmountainsComponent, selectors: [["app-location-frozenmountains"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "head"], [1, "body"], [1, "left-col"], [1, "right-col"], [3, "click"]], template: function LocationFrozenmountainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Freddo e perennemente coperto da nebbia e nuvole, il luogo delle Montagne Gelide e' stato da sempre poco esplorato per via delle condizione avverse della zona.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Il clima cambia con rapidita' e le bufere di neve o la nebbia possono essere estremamente pericolose anche per esploratori esperti. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inizia l'avventura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationFrozenmountainsComponent_Template_button_click_11_listener() { return ctx.moveTo("frozenmountains"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Montagne Gelide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".left-col[_ngcontent-%COMP%] {\r\n    padding: 0 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWZyb3plbm1vdW50YWlucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJsb2NhdGlvbi1mcm96ZW5tb3VudGFpbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZWZ0LWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwIDIlO1xyXG59Il19 */"] });


/***/ }),

/***/ 5877:
/*!**************************************************************************************!*\
  !*** ./src/app/world-map/point-description/location-home/location-home.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationHomeComponent": () => (/* binding */ LocationHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocationHomeComponent {
    constructor() { }
    ngOnInit() {
    }
    moveTo(page) {
        location.href = "?navPage=" + page;
    }
}
LocationHomeComponent.ɵfac = function LocationHomeComponent_Factory(t) { return new (t || LocationHomeComponent)(); };
LocationHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationHomeComponent, selectors: [["app-location-home"]], decls: 15, vars: 0, consts: [[1, "container"], [1, "head"], [1, "body"], [1, "left-col"], [1, "right-col"], [3, "click"]], template: function LocationHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Il tranquillo villaggio di Celestian sorge alla riva del omonimo fiume. Grazie al clima temperato ed al ricco bosco vicino, il villaggio ha sempre vissuto tranquillo e libero.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " I piccoli topini che coltivano questo posto vivono una vita operosa e serena, molti di loro avevano affrontato grandi battaglie per poter finalmente avere la pace. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Visita:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationHomeComponent_Template_button_click_11_listener() { return ctx.moveTo("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationHomeComponent_Template_button_click_13_listener() { return ctx.moveTo("shop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Centro Commerciale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".left-col[_ngcontent-%COMP%] {\r\n    padding: 0 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoibG9jYXRpb24taG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmc6IDAgMiU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3740:
/*!********************************************************************************************!*\
  !*** ./src/app/world-map/point-description/location-iceland/location-iceland.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationIcelandComponent": () => (/* binding */ LocationIcelandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LocationIcelandComponent {
    constructor() { }
    moveTo(page) {
        location.href = "?navPage=" + page;
    }
}
LocationIcelandComponent.ɵfac = function LocationIcelandComponent_Factory(t) { return new (t || LocationIcelandComponent)(); };
LocationIcelandComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationIcelandComponent, selectors: [["app-location-iceland"]], decls: 13, vars: 0, consts: [[1, "container"], [1, "head"], [1, "body"], [1, "left-col"], [1, "right-col"], [3, "click"]], template: function LocationIcelandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Freddo da far ripensare un orso polare di essere uscito dalla tana, l'isolotto di Iceland contiene alberi resistenti a queste temperature dal legno incredibilemnte duro, una grande grotta ed immense avventure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Il sentiero non e' visibile a causa della neve che continua a mutare il terreno, puoi solo affidarti sulla bussola e sulle stelle. Il punto indicato e' proprio la grande grotta all'estremita' settentrionale dell'isola. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inizia l'avventura:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocationIcelandComponent_Template_button_click_11_listener() { return ctx.moveTo("iceland"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Le lande ghiacciate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".left-col[_ngcontent-%COMP%] {\r\n    padding: 0 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLWljZWxhbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoibG9jYXRpb24taWNlbGFuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtY29sIHtcclxuICAgIHBhZGRpbmc6IDAgMiU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6471:
/*!****************************************************************************!*\
  !*** ./src/app/world-map/point-description/point-description.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointDescriptionComponent": () => (/* binding */ PointDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _location_home_location_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-home/location-home.component */ 5877);
/* harmony import */ var _location_darkwood_location_darkwood_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-darkwood/location-darkwood.component */ 4628);
/* harmony import */ var _location_iceland_location_iceland_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-iceland/location-iceland.component */ 3740);
/* harmony import */ var _location_frozenmountains_location_frozenmountains_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location-frozenmountains/location-frozenmountains.component */ 6794);
/* harmony import */ var _location_flamevolcano_location_flamevolcano_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location-flamevolcano/location-flamevolcano.component */ 9791);







function PointDescriptionComponent_app_location_home_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-location-home");
} }
function PointDescriptionComponent_app_location_darkwood_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-location-darkwood");
} }
function PointDescriptionComponent_app_location_iceland_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-location-iceland");
} }
function PointDescriptionComponent_app_location_frozenmountains_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-location-frozenmountains");
} }
function PointDescriptionComponent_app_location_flamevolcano_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-location-flamevolcano");
} }
function PointDescriptionComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 3);
} }
class PointDescriptionComponent {
    constructor() {
        this.pointID = '';
    }
    ngOnInit() {
    }
}
PointDescriptionComponent.ɵfac = function PointDescriptionComponent_Factory(t) { return new (t || PointDescriptionComponent)(); };
PointDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PointDescriptionComponent, selectors: [["app-point-description"]], inputs: { pointID: "pointID" }, decls: 7, vars: 6, consts: [[1, "point-descr"], [4, "ngIf"], ["class", "spacer", 4, "ngIf"], [1, "spacer"]], template: function PointDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PointDescriptionComponent_app_location_home_1_Template, 1, 0, "app-location-home", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PointDescriptionComponent_app_location_darkwood_2_Template, 1, 0, "app-location-darkwood", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PointDescriptionComponent_app_location_iceland_3_Template, 1, 0, "app-location-iceland", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PointDescriptionComponent_app_location_frozenmountains_4_Template, 1, 0, "app-location-frozenmountains", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PointDescriptionComponent_app_location_flamevolcano_5_Template, 1, 0, "app-location-flamevolcano", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PointDescriptionComponent_div_6_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointID === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointID === "darkwood");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointID === "iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointID === "frozenmountains");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointID === "flamevolcano");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pointID === "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _location_home_location_home_component__WEBPACK_IMPORTED_MODULE_0__.LocationHomeComponent, _location_darkwood_location_darkwood_component__WEBPACK_IMPORTED_MODULE_1__.LocationDarkwoodComponent, _location_iceland_location_iceland_component__WEBPACK_IMPORTED_MODULE_2__.LocationIcelandComponent, _location_frozenmountains_location_frozenmountains_component__WEBPACK_IMPORTED_MODULE_3__.LocationFrozenmountainsComponent, _location_flamevolcano_location_flamevolcano_component__WEBPACK_IMPORTED_MODULE_4__.LocationFlamevolcanoComponent], styles: [".spacer[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n}\r\n\r\n.point-descr[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InBvaW50LWRlc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5wb2ludC1kZXNjciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 1653:
/*!****************************************************************!*\
  !*** ./src/app/world-map/start-story/start-story.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartStoryComponent": () => (/* binding */ StartStoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function StartStoryComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Il tuo nome \u00E8 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ae");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " e la tua storia inizia tra mille peripezzie e difficili battaglie.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Anni fa intrapresi un viaggio destinato a trovare una terra incontaminata e libera per poter finalmente vivere in pace. Ma questo viaggio fu difficile e impegnativo, segnato da scontri violenti.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Nonostante questo, la tua determinazione e quella dei tuoi compatri");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "topi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " non cedette e arrivaste al fiume Celestian che scorre tranquillo in una landa fertile e pacifica.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " All'unisono avete deciso di stabilirvi e vivere qui. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function StartStoryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " La cittadina crebbe in fretta a causa della voglia di iniziare a vivere finalmente in pace.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Il villaggio era ormai completato e gli venne dato il nome del fiume che con tanta gentilezza vi aveva accolto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Durante la costruzione incontrasti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Uca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ", uno strano e molto cauto, ma simpatico topo. Questo attir\u00F2 molto la tua attenzione e decidesti di fidanzarti e vivere con lui.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Sembrava che ogni sogno si fosse realizzato. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function StartStoryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " In quella piccola radura si lavorava e ci si divertiva, affrontavi ancora qualche piccola avventura e il tempo passava allegramente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Eppure qualcosa ti mancava, la sensazione del brivido, le avventure e l'esplorazione delle terre lontane...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ti mancava l'adrenalina della scoperta e del pericolo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function StartStoryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Un giorno, la regina mise un annuncio nella bacheca del paese. Parlava di un trofeo per chiunque avrebbe sconfitto i grandi mostri delle terre lontane, in questo modo il paese avrebbe potuto lavorare ed estrarre risorse pregiate.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " La ricompensa non era speciale, consisteva in una scatola con pregiate essenze per tisane. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ti piacevano le tisane, ma non lo facevi per quello, sentivi un desiderio di tornare all'avventura che non richiedeva nessun premio in cambio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " E cos\u00EC inizi\u00F2 la tua avventura. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function StartStoryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Prese le tue cose, salutato Uca e carica di coraggio, parti per una nuova avventura.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Questo sara' la tua ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Aentur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class StartStoryComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.currentSlide = 1;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
    prev() {
        if (this.currentSlide < 2)
            return;
        this.currentSlide--;
    }
    next() {
        if (this.currentSlide > 4)
            return;
        this.currentSlide++;
    }
}
StartStoryComponent.ɵfac = function StartStoryComponent_Factory(t) { return new (t || StartStoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
StartStoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartStoryComponent, selectors: [["app-start-story"]], decls: 13, vars: 5, consts: [[1, "container"], [1, "mat-raised-button", 3, "click"], ["id", "slide-1", "class", "slide", 4, "ngIf"], ["id", "slide-2", "class", "slide", 4, "ngIf"], ["id", "slide-3", "class", "slide", 4, "ngIf"], ["id", "slide-4", "class", "slide", 4, "ngIf"], ["id", "slide-5", "class", "slide", 4, "ngIf"], ["id", "go-prev", 3, "click"], ["id", "go-next", 3, "click"], ["id", "slide-1", 1, "slide"], [1, "col-left"], [1, "col-right"], ["src", "assets/worldmap/start-slide-1.jpg"], ["id", "slide-2", 1, "slide"], ["src", "assets/worldmap/start-slide-2.jpg"], ["id", "slide-3", 1, "slide"], ["src", "assets/worldmap/start-slide-3.jpg"], ["id", "slide-4", 1, "slide"], ["src", "assets/worldmap/start-slide-4.jpg"], ["id", "slide-5", 1, "slide"], ["src", "assets/worldmap/start-slide-5.jpg"]], template: function StartStoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-dialog-actions")(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartStoryComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StartStoryComponent_div_4_Template, 18, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StartStoryComponent_div_5_Template, 15, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StartStoryComponent_div_6_Template, 10, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StartStoryComponent_div_7_Template, 12, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StartStoryComponent_div_8_Template, 11, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartStoryComponent_Template_div_click_9_listener() { return ctx.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " < ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartStoryComponent_Template_div_click_11_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSlide === 5);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], styles: [".mat-raised-button[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 8%;\r\n    top: 2%;\r\n    padding: 5px 10px;\r\n    border-radius: 50px;\r\n}\r\n\r\n.slide[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.col-left[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    padding: 0 1%;\r\n}\r\n\r\n.col-right[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n}\r\n\r\n.col-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 1.6em;\r\n    text-shadow: 1px 1px white;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    font-family: 'fantasy-alt';\r\n    font-size: 1em;\r\n}\r\n\r\n#go-prev[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    border: 1px black solid;\r\n    border-radius: 50px;\r\n    background-color: white;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n    bottom: 4%;\r\n    left: 8%;\r\n}\r\n\r\n#go-next[_ngcontent-%COMP%] {\r\n    padding: 5px 15px;\r\n    border: 1px black solid;\r\n    border-radius: 50px;\r\n    background-color: white;\r\n    position: absolute;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n    bottom: 4%;\r\n    right: 8%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3RhcnQtc3RvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogOCU7XHJcbiAgICB0b3A6IDIlO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29sLWxlZnQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDAgMSU7XHJcbn1cclxuLmNvbC1yaWdodCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcbi5jb2wtcmlnaHQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHdoaXRlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnZmFudGFzeS1hbHQnO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbiNnby1wcmV2IHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm90dG9tOiA0JTtcclxuICAgIGxlZnQ6IDglO1xyXG59XHJcbiNnby1uZXh0IHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm90dG9tOiA0JTtcclxuICAgIHJpZ2h0OiA4JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3220:
/*!**************************************************!*\
  !*** ./src/app/world-map/world-map.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorldMapComponent": () => (/* binding */ WorldMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _start_story_start_story_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-story/start-story.component */ 1653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest-service */ 1077);
/* harmony import */ var _point_description_point_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point-description/point-description.component */ 6471);








class WorldMapComponent {
    constructor(dialog, rest) {
        this.dialog = dialog;
        this.rest = rest;
        this.activePointId = "";
    }
    ngOnInit() {
        const observ = this.rest
            .sendGet("/location/reset-adventure-stats", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders());
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(observ).then(resp => {
            if (!resp || !resp.ok) {
                console.error("Call BE failed ", resp);
                return;
            }
        }, err => {
            console.error("Call BE failed: ", err);
        });
    }
    selectPoint(event) {
        this.activePointId = event.target.id;
    }
    openDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "95%";
        dialogConfig.height = "95%";
        dialogConfig.enterAnimationDuration = "500ms";
        this.dialog.open(_start_story_start_story_component__WEBPACK_IMPORTED_MODULE_0__.StartStoryComponent, dialogConfig);
    }
}
WorldMapComponent.ɵfac = function WorldMapComponent_Factory(t) { return new (t || WorldMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__.RestService)); };
WorldMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: WorldMapComponent, selectors: [["app-world-map"]], decls: 24, vars: 11, consts: [[1, "container"], [1, "new-stars"], [1, "new-stars-txt"], ["src", "assets/worldmap/new-stars.png", 1, "new-stars-img", 3, "click"], [1, "title"], [1, "map-section"], ["id", "map-points", 1, "point-of-actions"], ["id", "point-home"], ["src", "assets/worldmap/home-map.png", "name", "Celestian", "id", "home", 3, "click"], ["id", "point-darkwood"], ["src", "assets/worldmap/darkwood-map.png", "name", "Foresta Oscura", "id", "darkwood", 3, "click"], ["id", "point-iceland"], ["src", "assets/worldmap/iceland-map.png", "name", "Le lande ghiacciate", "id", "iceland", 3, "click"], ["id", "point-frozenmountains"], ["src", "assets/worldmap/frozenmountains-map.png", "name", "Montagne Gelide", "id", "frozenmountains", 3, "click"], ["id", "point-flamevolcano"], ["src", "assets/worldmap/flamevolcano-map.png", "name", "Vulcano Fiammante", "id", "flamevolcano", 3, "click"], ["src", "assets/worldmap/map.jpg", "name", "world-map"], [1, "menu-section"], [3, "pointID"]], template: function WorldMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Mostra la storia di introduzione");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorldMapComponent_Template_img_click_4_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "<Mappa del mondo - The dreaming haven>");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "a", 7)(11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorldMapComponent_Template_img_click_11_listener($event) { return ctx.selectPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 9)(13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorldMapComponent_Template_img_click_13_listener($event) { return ctx.selectPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 11)(15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorldMapComponent_Template_img_click_15_listener($event) { return ctx.selectPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 13)(17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorldMapComponent_Template_img_click_17_listener($event) { return ctx.selectPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 15)(19, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function WorldMapComponent_Template_img_click_19_listener($event) { return ctx.selectPoint($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18)(22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-point-description", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active-point", ctx.activePointId === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active-point", ctx.activePointId === "darkwood");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active-point", ctx.activePointId === "iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active-point", ctx.activePointId === "frozenmountains");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("active-point", ctx.activePointId === "flamevolcano");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pointID", ctx.activePointId);
    } }, dependencies: [_point_description_point_description_component__WEBPACK_IMPORTED_MODULE_2__.PointDescriptionComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n\r\n.new-stars[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: flex;\r\n    right: 0;\r\n}\r\n\r\n.new-stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.new-stars-txt[_ngcontent-%COMP%] {\r\n    color: rgba(0,0,0,0);\r\n    visibility: hidden;\r\n    transition-duration: 1s;\r\n    transition-property: color;\r\n}\r\n\r\n.new-stars[_ngcontent-%COMP%]:hover   .new-stars-txt[_ngcontent-%COMP%] {\r\n    color: rgba(0,0,0,1);\r\n    visibility: visible;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.map-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    z-index: 0;\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 99%;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n    width: 1%;\r\n    background-color: black;\r\n    border: 2px white solid;\r\n    border-radius: 100px;\r\n    position: absolute;\r\n    transition-duration: 1s;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    object-fit: cover;\r\n    height: 100%;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .point-of-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .point-of-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .point-of-actions[_ngcontent-%COMP%]   .active-point[_ngcontent-%COMP%] {\r\n    width: 3%;\r\n    transition-duration: 1s;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   #point-home[_ngcontent-%COMP%] {\r\n    margin-left: 17%;\r\n    margin-top: 24%;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   #point-darkwood[_ngcontent-%COMP%] {\r\n    margin-left: 36%;\r\n    margin-top: 21%;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   #point-iceland[_ngcontent-%COMP%] {\r\n    margin-left: 19%;\r\n    margin-top: 6%;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   #point-frozenmountains[_ngcontent-%COMP%] {\r\n    margin-left: 58%;\r\n    margin-top: 13%;\r\n}\r\n\r\n.point-of-actions[_ngcontent-%COMP%]   #point-flamevolcano[_ngcontent-%COMP%] {\r\n    margin-left: 16%;\r\n    margin-top: 47%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmxkLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBOzs7O0lBSUksU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoid29ybGQtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uZXctc3RhcnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5uZXctc3RhcnMgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmV3LXN0YXJzLXR4dCB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3I7XHJcbn1cclxuXHJcbi5uZXctc3RhcnM6aG92ZXIgLm5ldy1zdGFycy10eHQge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMSk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXAtc2VjdGlvbiBpbWcge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogOTklO1xyXG59XHJcblxyXG4ucG9pbnQtb2YtYWN0aW9ucyBhIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogMnB4IHdoaXRlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxufVxyXG5cclxuLnBvaW50LW9mLWFjdGlvbnMgYSBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wb2ludC1vZi1hY3Rpb25zIGE6aG92ZXIsXHJcbi5wb2ludC1vZi1hY3Rpb25zIGE6Zm9jdXMsXHJcbi5wb2ludC1vZi1hY3Rpb25zIGE6YWN0aXZlLFxyXG4ucG9pbnQtb2YtYWN0aW9ucyAuYWN0aXZlLXBvaW50IHtcclxuICAgIHdpZHRoOiAzJTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG59XHJcblxyXG4ucG9pbnQtb2YtYWN0aW9ucyAjcG9pbnQtaG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgbWFyZ2luLXRvcDogMjQlO1xyXG59XHJcblxyXG4ucG9pbnQtb2YtYWN0aW9ucyAjcG9pbnQtZGFya3dvb2Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM2JTtcclxuICAgIG1hcmdpbi10b3A6IDIxJTtcclxufVxyXG5cclxuLnBvaW50LW9mLWFjdGlvbnMgI3BvaW50LWljZWxhbmQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE5JTtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcblxyXG4ucG9pbnQtb2YtYWN0aW9ucyAjcG9pbnQtZnJvemVubW91bnRhaW5zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbn1cclxuXHJcbi5wb2ludC1vZi1hY3Rpb25zICNwb2ludC1mbGFtZXZvbGNhbm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2JTtcclxuICAgIG1hcmdpbi10b3A6IDQ3JTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map