import { IGameState } from './IGameState';

export interface IGameActions {
    divideByThree(game: IGameState): void;
    subtract(game: IGameState): void;
    add(game: IGameState): void;
}