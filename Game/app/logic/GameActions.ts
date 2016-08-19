import { Injectable } from '@angular/core';

import { GameState } from './GameState';
import { GameValidator } from './GameValidator';

@Injectable()
export class GameActions {
    constructor(private validator: GameValidator) {}

    divideByThree(game: GameState): void {
        if (game && this.validator.isDivisible(game)) {
            game.current %= 3;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    subtract(game: GameState): void {
        if (game && this.validator.isSubtractable(game)) {
            game.current--;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    add(game: GameState): void {
        if (game) {
            game.current++;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    private setGameWonStatus(game: GameState) {
        game.hasWon = this.isGameWon(game);
    }

    private isGameWon(game: GameState): boolean {
        return game
            && game.current == 1;
    }
}