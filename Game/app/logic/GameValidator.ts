import { Injectable } from '@angular/core';

import { GameState } from './GameState';

@Injectable()
export class GameValidator {
    isValidStartNumber(n: number): boolean {
        return n > 1;
    }

    isDivisible(game: GameState) {
        return game
            && game.current >= 3
            && ((game.current % 3) === 0);
    }

    isSubtractable(game: GameState) {
        return game
            && game.current > 1;
    }
}