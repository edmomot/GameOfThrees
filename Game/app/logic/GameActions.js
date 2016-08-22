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
var GameActions = (function () {
    function GameActions(validator) {
        this.validator = validator;
    }
    GameActions.prototype.divideByThree = function (game) {
        if (game && this.validator.isDivisible(game)) {
            game.current /= 3;
            game.moves++;
            this.setGameWonStatus(game);
        }
    };
    GameActions.prototype.subtract = function (game) {
        if (game && this.validator.isSubtractable(game)) {
            game.current--;
            game.moves++;
            this.setGameWonStatus(game);
        }
    };
    GameActions.prototype.add = function (game) {
        if (game) {
            game.current++;
            game.moves++;
            this.setGameWonStatus(game);
        }
    };
    GameActions.prototype.setGameWonStatus = function (game) {
        game.hasWon = this.isGameWon(game);
    };
    GameActions.prototype.isGameWon = function (game) {
        return game
            && game.current == 1;
    };
    GameActions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], GameActions);
    return GameActions;
}());
exports.GameActions = GameActions;
