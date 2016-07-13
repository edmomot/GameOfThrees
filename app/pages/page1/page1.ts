import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameService } from '../../services/GameService'
import { Page2 } from '../page2/page2';

@Component({
    templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
    initialized: boolean = false;
    gameWon: boolean = false;
    gameStartNumber: number;

    constructor(private nav: NavController, private gameService: GameService) {
    }

    startGame(n: number): void {
        this.nav.setRoot(Page2, { number: n });
    }
    
}
