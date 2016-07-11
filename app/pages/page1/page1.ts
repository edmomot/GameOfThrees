import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameService } from '../../services/GameService'
import { IGame } from "../../businessObjects/IGame";

@Component({
    templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
    private game: IGame;

    constructor(
        private navController: NavController,
        private gameService: GameService) {
    }

    ngOnInit() {
        this.game = this.gameService.start(150);
    }
    

}
