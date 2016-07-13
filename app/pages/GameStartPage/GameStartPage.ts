import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameService } from '../../services/GameService'
import { GamePlayPage } from '../GamePlayPage/GamePlayPage';

@Component({
    templateUrl: 'build/pages/GameStartPage/GameStartPage.html',
})
export class GameStartPage {
    initialized: boolean = false;
    gameWon: boolean = false;
    gameStartNumber: number;

    constructor(private nav: NavController, private gameService: GameService) {
    }

    startGame(n: number): void {
        this.nav.setRoot(GamePlayPage, { number: n });
    }
    
}
