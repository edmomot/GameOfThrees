import { Component, Output, EventEmitter } from '@angular/core';
import { GameService } from '../services/GameService'

@Component({
    selector: 'game-initializer',
    templateUrl: 'build/components/GameInitializerComponent.html'
})
export class GameInitializerComponent {
    @Output() gameStartNumber: EventEmitter<number> = new EventEmitter<number>();

    constructor(private gameService: GameService) {}

    startGame(number): void {
        if (this.gameService.validStartNumber(number)) {
            this.gameStartNumber.next(number);
        }
    }
}