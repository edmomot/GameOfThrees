import { IGameValidator } from '../app/logic/contracts/IGameValidator';
import { IGameState } from '../app/logic/contracts/IGameState';

export class Mocks {
    static gameValidator(
        validStartNumber: boolean = true,
        divisible: boolean = true,
        subtractable: boolean = true,
        addable: boolean = true): IGameValidator {
        return {
            isValidStartNumber: () => { return validStartNumber; },
            isDivisible: () => { return divisible; },
            isSubtractable: () => { return subtractable; },
            isAddable: () => { return addable }
        };
    }
    
    static gameState(
        start: number,
        current: number,
        moves: number,
        hasWon: boolean): IGameState {
        return {
            start: start,
            current: current,
            moves: moves,
            hasWon: hasWon
        }
    }
}