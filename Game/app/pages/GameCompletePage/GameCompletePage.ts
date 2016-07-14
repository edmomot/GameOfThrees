import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameStartPage } from '../GameStartPage/GameStartPage';

/*
  Generated class for the Page3Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'build/pages/GameCompletePage/GameCompletePage.html',
})
export class GameCompletePage {
    private moves: number;

    constructor(
            private nav: NavController,
            private navParams: NavParams) {
    }

    ngOnInit(): void {
        this.moves = this.navParams.get("moves");
    }

    startNewGame(): void {
        this.nav.setRoot(GameStartPage);
    }
}
