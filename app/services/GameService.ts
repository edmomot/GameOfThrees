import { Injectable, EventEmitter } from '@angular/core';
import { IGame } from '../businessObjects/IGame';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {

    currentEmitter: EventEmitter<number> = new EventEmitter();
    divisibilityEmitter: EventEmitter<boolean> = new EventEmitter();
    subtractableEmitter: EventEmitter<boolean> = new EventEmitter();

    private g : IGame;
    
    init(n: number) {
        this.g = <IGame>{ start: n, current: n }
        this.updateEmitters();
    }
    
    public won(): boolean {
        return this.g && this.g.current == 1;
    }

    public divideByThree(): void {
        if (this.divisible()) {
            this.g.current /= 3;
            this.updateEmitters();
        }
    }

    public subtract(): void {
        if (this.subtractable()) {
            this.g.current--;
            this.updateEmitters();
        }
    }

    public add(): void {
        this.g.current++;
        this.updateEmitters();
    }

    private updateEmitters(): void {
        this.currentEmitter.next(this.g.current);
        this.divisibilityEmitter.next(this.divisible());
        this.subtractableEmitter.next(this.subtractable());
    }

    private divisible() : boolean {
        return this.g && this.g.current >= 3 && ((this.g.current % 3) == 0);
    }

    private subtractable(): boolean {
        return this.g && this.g.current > 1;
    }
}