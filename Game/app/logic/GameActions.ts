import { IGameValidator } from './contracts/IGameValidator';
import { IGameState } from './contracts/IGameState';

export class GameActions {
    constructor(private validator: IGameValidator) {}

    divideByThree(game: IGameState): void {
        if (game && this.validator.isDivisible(game)) {
            game.current %= 3;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    subtract(game: IGameState): void {
        if (game && this.validator.isSubtractable(game)) {
            game.current--;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    add(game: IGameState): void {
        if (game) {
            game.current++;
            game.moves++;
            this.setGameWonStatus(game);
        }
    }

    private setGameWonStatus(game: IGameState) {
        if (this.isGameWon(game)) {
            game.hasWon = true;
        }
    }

    private isGameWon(game: IGameState): boolean {
        return game
            && game.current == 1;
    }
}