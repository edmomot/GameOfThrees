import { Injectable } from '@angular/core';

import { IGameState } from './contracts/IGameState';
import { IGameValidator } from './contracts/IGameValidator';
import { GameValidator } from './GameValidator';

@Injectable()
export class GameActions {
    constructor(private validator: GameValidator) {}

    divideByThree(game: IGameState): void {
        if (this.validator.isDivisible(game)) {
            game.current /= 3;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    subtract(game: IGameState): void {
        if (this.validator.isSubtractable(game)) {
            game.current--;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    add(game: IGameState): void {
        if (this.validator.isAddable(game)) {
            game.current++;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    private setGameWonStatus(game: IGameState) {
        game.hasWon = this.isGameWon(game);
    }

    private isGameWon(game: IGameState): boolean {
        return game
            && game.current == 1;
    }
}