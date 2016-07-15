System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('Game', function () {
                it('can set and read start', function () {
                    var game = { start: 3, current: 3, moves: 0 };
                    expect(game.start).toEqual(3);
                    game.start += 17;
                    expect(game.start).toEqual(20);
                });
                it('can set and read current', function () {
                    var game = { start: 3, current: 3, moves: 0 };
                    expect(game.current).toEqual(3);
                    game.current += 17;
                    expect(game.current).toEqual(20);
                });
                it('can set and read moves', function () {
                    var game = { start: 3, current: 3, moves: 0 };
                    expect(game.moves).toEqual(0);
                    game.moves += 17;
                    expect(game.moves).toEqual(17);
                });
            });
        }
    }
});
//# sourceMappingURL=Game.spec.js.map