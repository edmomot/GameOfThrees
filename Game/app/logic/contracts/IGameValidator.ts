import { IGameState } from './IGameState';

export interface IGameValidator {
    isValidStartNumber(n: number): boolean;
    isDivisible(game: IGameState): boolean;
    isSubtractable(game: IGameState): boolean;
    isAddable(game: IGameState): boolean;
}