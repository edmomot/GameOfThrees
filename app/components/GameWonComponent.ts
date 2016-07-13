import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'game-won',
    templateUrl: 'build/components/GameWonComponent.html'
})
export class GameWonComponent {
    @Input() moves: number;
    @Output() startNew : EventEmitter<boolean> = new EventEmitter();


}