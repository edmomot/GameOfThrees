import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameService } from '../../services/GameService';
import { GameCompletePage } from '../GameCompletePage/GameCompletePage';

@Component({
  templateUrl: 'build/pages/GamePlayPage/GamePlayPage.html'
})
export class GamePlayPage {
    private divisible: boolean;
    private subtractable: boolean;
    private current: number;
    private start: number;

    constructor(
            private gameService: GameService,
            private nav: NavController,
            private navParams: NavParams) {
    }

    ngOnInit(): void {
        this.start = this.navParams.get("number");

        this.gameService.divisibilityEmitter.subscribe((data) =>
            this.divisible = data
        );

        this.gameService.subtractableEmitter.subscribe((data) =>
            this.subtractable = data
        );

        this.gameService.currentEmitter.subscribe((data) =>
            this.current = data
        );

        this.gameService.gameWonEmitter.subscribe((data) => {
                if (data) {
                    this.nav.setRoot(GameCompletePage, { moves: 999 });
                }
            }
        );

        this.gameService.init(this.start || 589);
    }
}
