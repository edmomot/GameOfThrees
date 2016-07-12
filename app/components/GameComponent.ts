import { Component } from '@angular/core';
import { GameService } from '../services/GameService'
import { IGame } from "../businessObjects/IGame";

@Component({
    selector: 'game',
    templateUrl: 'build/components/GameComponent.html'
})
export class GameComponent {
    divisible: boolean;
    subtractable: boolean;
    current: number;
    start: number;

    constructor(
        private gameService: GameService) {
    }

    ngOnInit() : void {
        this.subscribe();
    }

    subscribe() {
        this.gameService.divisibilityEmitter.subscribe((data) => 
            this.divisible = data
        );

        this.gameService.subtractableEmitter.subscribe((data) =>
            this.subtractable = data
        );

        this.gameService.currentEmitter.subscribe((data) => 
            this.current = data
        );

        this.gameService.init(200);
    }
}