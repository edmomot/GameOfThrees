import { Injectable } from '@angular/core';
import { IGame } from '../businessObjects/IGame';

@Injectable()
export class GameService {
    constructor() {
        
    }

    public start(n: number): IGame {
        return {start: n, current: n};
    }

    public divisibleByThree(g: IGame): boolean {
        return g.current >=3 && (g.current % 3) == 0;
    }

    public subtractable(g: IGame): boolean {
        return g.current > 1;
    }

    public won(g: IGame): boolean {
        return g.current == 1;
    }

    public divideByThree(g: IGame): void {
        g.current /= 3;
    }

    public subtract(g: IGame): void {
        g.current--;
    }

    public add(g: IGame): void {
        g.current++;
    }
}