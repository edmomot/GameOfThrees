import { Component, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { GameComponent } from '../../components/GameComponent'

@Component({
    templateUrl: 'build/pages/page1/page1.html',
    directives: [GameComponent]
})
export class Page1 {

}
