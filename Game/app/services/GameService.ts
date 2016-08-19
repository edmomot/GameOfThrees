import { Component, Injectable, Inject, EventEmitter, OpaqueToken, provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GameValidator } from '../logic/GameValidator';
import { GameActions } from '../logic/GameActions';
import { GameState } from '../logic/GameState';

@Component({
    providers: [GameState]
})
export class GameService {
    currentEmitter: EventEmitter<number> = new EventEmitter();
    divisibilityEmitter: EventEmitter<boolean> = new EventEmitter();
    subtractableEmitter: EventEmitter<boolean> = new EventEmitter();
    gameWonEmitter: EventEmitter<boolean> = new EventEmitter();


    constructor(
            private actions: GameActions,
            private validator: GameValidator,
            private state: GameState) {
    }

    startNewGame(n: number): void {
        this.state.initialize(n);
        this.updateEmitters();
    }

    divideByThree(): void {
        this.actions.divideByThree(this.state);
        this.updateEmitters();
    }

    subtract(): void {
        this.actions.subtract(this.state);
        this.updateEmitters();
    }

    add(): void {
        this.actions.add(this.state);
        this.updateEmitters();
    }

    private updateEmitters(): void {
        this.currentEmitter.next(this.state.current);
        this.gameWonEmitter.next(this.state.hasWon);

        this.divisibilityEmitter.next(this.validator.isDivisible(this.state));
        this.subtractableEmitter.next(this.validator.isSubtractable(this.state));
    }

}