import { IGameState } from './contracts/IGameState';

export class GameState implements IGameState {
    start: number;
    current: number;
    moves: number;
    hasWon: boolean;
}