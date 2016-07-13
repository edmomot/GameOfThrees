import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1';

/*
  Generated class for the Page3Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/page3/page3.html',
})
export class Page3 {
    private moves: number;

    constructor(
            private nav: NavController,
            private navParams: NavParams) {
        this.moves = navParams.get("moves");
    }

    startNewGame(): void {
        this.nav.setRoot(Page1);
    }
}
