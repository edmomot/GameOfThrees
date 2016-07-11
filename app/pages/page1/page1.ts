import { Component, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameService } from '../../services/GameService'
import { IGame } from "../../businessObjects/IGame";
import {Observable} from 'rxjs/Observable';

@Component({
    templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
    divisible: boolean;
    subtractable: boolean;
    current: number;

    constructor(
        private navController: NavController,
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
