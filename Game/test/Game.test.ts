﻿import { IGameState } from '../app/logic/contracts/IGameState';
import { GameState } from '../app/logic/GameState';

describe('GameState', () => {
    it('initializes start number correctly', () => {
        let game: GameState = new GameState();
        game.initialize(15);

        expect(game.start).toEqual(15);
    });

    it('initializes current number correctly', () => {
        let game: GameState = new GameState();
        game.initialize(15);
        
        expect(game.current).toEqual(15);
    });
});