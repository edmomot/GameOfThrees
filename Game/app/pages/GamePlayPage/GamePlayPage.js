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
var GameService_1 = require('../../services/GameService');
var GameCompletePage_1 = require('../GameCompletePage/GameCompletePage');
var GamePlayPage = (function () {
    function GamePlayPage(gameService, nav, navParams) {
        this.gameService = gameService;
        this.nav = nav;
        this.navParams = navParams;
    }
    GamePlayPage.prototype.ngOnInit = function () {
        var _this = this;
        this.start = this.navParams.get("number");
        this.gameService.divisibilityEmitter.subscribe(function (data) {
            return _this.divisible = data;
        });
        this.gameService.subtractableEmitter.subscribe(function (data) {
            return _this.subtractable = data;
        });
        this.gameService.currentEmitter.subscribe(function (data) {
            return _this.current = data;
        });
        this.gameService.gameWonEmitter.subscribe(function (data) {
            if (data) {
                _this.nav.setRoot(GameCompletePage_1.GameCompletePage, { moves: 999 });
            }
        });
        this.gameService.startNewGame(this.start || 589);
    };
    GamePlayPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/GamePlayPage/GamePlayPage.html'
        }), 
        __metadata('design:paramtypes', [GameService_1.GameService, ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], GamePlayPage);
    return GamePlayPage;
}());
exports.GamePlayPage = GamePlayPage;
