import { IGameState } from './IGameState';

export interface IGameValidator {
    isValidStartNumber(n: number): boolean;
    isDivisible(game: IGameState);
    isSubtractable(game: IGameState);
}