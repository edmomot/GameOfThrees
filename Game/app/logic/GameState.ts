import { Injectable } from '@angular/core';

@Injectable()
export class GameState {
    initialize(start: number): void {
        this.start = start;
        this.current = start;
        this.moves = 0;
        this.hasWon = false;
    }

    start: number;
    current: number;
    moves: number = 0;
    hasWon: boolean = false;
}