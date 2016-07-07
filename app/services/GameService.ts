import { Injectable } from '@angular/core';
import { IGame } from '../businessObjects/IGame';

@Injectable()
export class GameService {
    constructor() {
        
    }

    start(n: number): IGame {
        return {start: n};
    }

    divisibleByThree(): boolean {
        return true;
    }

    subtractable(): boolean {
        return true;
    }


}