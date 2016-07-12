import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameService } from '../services/GameService'
import { IGame } from '../businessObjects/IGame'

@Component({
    selector: 'game',
    templateUrl: 'build/components/GameComponent.html'
})
export class GameComponent {
    private divisible: boolean;
    private subtractable: boolean;
    private current: number;

    @Input() start: number;
    @Output() gameWon: EventEmitter<IGame> = new EventEmitter();

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

        this.gameService.gameWonEmitter.subscribe((data) =>
            this.gameWon.next(data)
        );

        this.gameService.init(this.start);
    }
}