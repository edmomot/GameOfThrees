"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var GameStartPage_1 = require('../GameStartPage/GameStartPage');
/*
  Generated class for the Page3Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GameCompletePage = (function () {
    function GameCompletePage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
    }
    GameCompletePage.prototype.ngOnInit = function () {
        this.moves = this.navParams.get("moves");
    };
    GameCompletePage.prototype.startNewGame = function () {
        this.nav.setRoot(GameStartPage_1.GameStartPage);
    };
    GameCompletePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/GameCompletePage/GameCompletePage.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], GameCompletePage);
    return GameCompletePage;
}());
exports.GameCompletePage = GameCompletePage;
