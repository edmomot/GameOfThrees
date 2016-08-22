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
var GameValidator_1 = require('../logic/GameValidator');
var GameActions_1 = require('../logic/GameActions');
var GameState_1 = require('../logic/GameState');
var GameService = (function () {
    function GameService(actions, validator, state) {
        this.actions = actions;
        this.validator = validator;
        this.state = state;
        this.currentEmitter = new core_1.EventEmitter();
        this.divisibilityEmitter = new core_1.EventEmitter();
        this.subtractableEmitter = new core_1.EventEmitter();
        this.gameWonEmitter = new core_1.EventEmitter();
    }
    GameService.prototype.startNewGame = function (n) {
        this.state.initialize(n);
        this.updateEmitters();
    };
    GameService.prototype.divideByThree = function () {
        this.actions.divideByThree(this.state);
        this.updateEmitters();
    };
    GameService.prototype.subtract = function () {
        this.actions.subtract(this.state);
        this.updateEmitters();
    };
    GameService.prototype.add = function () {
        this.actions.add(this.state);
        this.updateEmitters();
    };
    GameService.prototype.updateEmitters = function () {
        this.currentEmitter.next(this.state.current);
        this.gameWonEmitter.next(this.state.hasWon);
        this.divisibilityEmitter.next(this.validator.isDivisible(this.state));
        this.subtractableEmitter.next(this.validator.isSubtractable(this.state));
    };
    GameService = __decorate([
        core_1.Component({
            providers: [GameState_1.GameState]
        }), 
        __metadata('design:paramtypes', [GameActions_1.GameActions, GameValidator_1.GameValidator, GameState_1.GameState])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
