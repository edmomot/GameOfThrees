System.register(['../../Game/app/logic/GameState'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GameState_1;
    return {
        setters:[
            function (GameState_1_1) {
                GameState_1 = GameState_1_1;
            }],
        execute: function() {
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
            });
        }
    }
});
//# sourceMappingURL=Game.spec.js.map