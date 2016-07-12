import { Component, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { GameComponent } from '../../components/GameComponent'
import { GameInitializerComponent } from '../../components/GameInitializerComponent'
import { GameWonComponent } from '../../components/GameWonComponent'

@Component({
    templateUrl: 'build/pages/page1/page1.html',
    directives: [GameComponent, GameInitializerComponent, GameWonComponent]
})
export class Page1 {
    initialized: boolean = false;
    gameWon: boolean = false;
    gameStartNumber : number;

    initialize() : void {
        this.initialized = true;
    }

    startGame(startNumber) : void {
        this.initialized = true;
        this.gameStartNumber = startNumber;
    }

    gameWonEvent(won : boolean) : void {
        this.gameWon = won;
    }

    startNewGame(): void {
        this.initialized = false;
        this.gameWon = false;
    }
}
