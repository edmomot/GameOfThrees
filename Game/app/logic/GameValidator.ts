import { IGameValidator } from './contracts/IGameValidator';
import { IGameState } from './contracts/IGameState';

export class GameValidator implements IGameValidator {
    isValidStartNumber(n: number): boolean {
        return n > 1;
    }

    isDivisible(game: IGameState) {
        return game
            && game.current >= 3
            && ((game.current % 3) == 0);
    }

    isSubtractable(game: IGameState) {
        return game
            && game.current > 1;
    }
}