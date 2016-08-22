import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { GameStartPage } from './pages/GameStartPage/GameStartPage';
import { GameService } from './services/GameService';
import { GameValidator } from './logic/GameValidator';
import { GameActions } from './logic/GameActions';
import { GameState } from './logic/GameState';

@Component({
    templateUrl: 'build/app.html',
    providers: [GameService, GameState, GameActions, GameValidator]
})
class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = GameStartPage;

    pages: Array<{ title: string, component: any }>;

    constructor(private platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Start new game', component: GameStartPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}

ionicBootstrap(MyApp);
