import { Injectable } from '@angular/core';

import { IGameState } from './contracts/IGameState';

@Injectable()
export class GameValidator {
    isValidStartNumber(n: number): boolean {
        return n > 1;
    }

    isDivisible(game: IGameState): boolean  {
        return game != undefined
            && game.current >= 3
            && ((game.current % 3) === 0);
    }

    isSubtractable(game: IGameState): boolean  {
        return game != undefined
            && game.current > 1;
    }

    isAddable(game: IGameState): boolean {
        return game != undefined
            && game.current < Number.MAX_SAFE_INTEGER;
    }
}