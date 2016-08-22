"use strict";
var GameState_1 = require('../app/logic/GameState');
describe('GameState', function () {
    it('initializes start number correctly', function () {
        var game = new GameState_1.GameState();
        game.initialize(15);
        expect(game.start).toEqual(15);
    });
    it('initializes current number correctly', function () {
        var game = new GameState_1.GameState();
        game.initialize(15);
        expect(game.current).toEqual(15);
    });
    it('initializes moves correctly', function () {
        var game = new GameState_1.GameState();
        game.initialize(15);
        expect(game.moves).toEqual(0);
    });
    it('initializes hasWon correctly', function () {
        var game = new GameState_1.GameState();
        game.initialize(15);
        expect(game.hasWon).toEqual(false);
    });
});
