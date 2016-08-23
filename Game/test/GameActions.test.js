"use strict";
var GameActions_1 = require('../app/logic/GameActions');
var Mocks_1 = require('./Mocks');
// Wraps GameActions.divideByThree call to use a mock validator
function divideByThree(state, validator) {
    if (validator === void 0) { validator = Mocks_1.Mocks.gameValidator(); }
    var actions = new GameActions_1.GameActions(validator);
    actions.divideByThree(state);
    return state;
}
;
function subtract(state, validator) {
    if (validator === void 0) { validator = Mocks_1.Mocks.gameValidator(); }
    var actions = new GameActions_1.GameActions(validator);
    actions.subtract(state);
    return state;
}
function add(state, validator) {
    if (validator === void 0) { validator = Mocks_1.Mocks.gameValidator(); }
    var actions = new GameActions_1.GameActions(validator);
    actions.add(state);
    return state;
}
function expectStateToHave(state, start, current, moves, hasWon) {
    expect(state.start).toEqual(start);
    expect(state.current).toEqual(current);
    expect(state.moves).toEqual(moves);
    expect(state.hasWon).toEqual(hasWon);
}
describe('GameActions', function () {
    /*
     * general
     */
    it('should keep track of moves', function () {
        var state = Mocks_1.Mocks.gameState(55, 55, 0, false);
        var validator = Mocks_1.Mocks.gameValidator();
        for (var i = 0; i < 15; i++) {
            subtract(state);
            add(state);
        }
        expectStateToHave(state, 55, 55, 30, false);
    });
    it('should not count non-action moves', function () {
        var state = Mocks_1.Mocks.gameState(55, 55, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, false, false, false);
        for (var i = 0; i < 15; i++) {
            subtract(state, validator);
            add(state, validator);
            divideByThree(state, validator);
        }
        expect(state.moves).toEqual(0);
    });
    /*
     * divideByThree
     */
    it('should divide 3 by 3 correctly and win', function () {
        var state = Mocks_1.Mocks.gameState(3, 3, 0, false);
        divideByThree(state);
        expectStateToHave(state, 3, 1, 1, true);
    });
    it('should divide 15 by 3 correctly', function () {
        var state = Mocks_1.Mocks.gameState(15, 15, 0, false);
        divideByThree(state);
        expectStateToHave(state, 15, 5, 1, false);
    });
    it('should divide 0 by 3 correctly', function () {
        var state = Mocks_1.Mocks.gameState(0, 0, 0, false);
        divideByThree(state);
        expectStateToHave(state, 0, 0, 1, false);
    });
    it('should divide 33 by 3 correctly', function () {
        var state = Mocks_1.Mocks.gameState(33, 33, 0, false);
        divideByThree(state);
        expectStateToHave(state, 33, 11, 1, false);
    });
    it('should divide 27 by 3 twice correctly', function () {
        var state = Mocks_1.Mocks.gameState(27, 27, 0, false);
        divideByThree(state);
        divideByThree(state);
        expectStateToHave(state, 27, 3, 2, false);
    });
    it('should divide 19683 by 3 correctly', function () {
        var state = Mocks_1.Mocks.gameState(19683, 19683, 0, false);
        divideByThree(state);
        expectStateToHave(state, 19683, 6561, 1, false);
    });
    it('should divide 19683 by 3 six times correctly', function () {
        var state = Mocks_1.Mocks.gameState(19683, 19683, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, true, true);
        for (var i = 0; i < 6; i++) {
            divideByThree(state, validator);
        }
        expectStateToHave(state, 19683, 27, 6, false);
    });
    it('should divide 19683 by 3 nine times correctly and win', function () {
        var state = Mocks_1.Mocks.gameState(19683, 19683, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, true, true);
        for (var i = 0; i < 9; i++) {
            divideByThree(state, validator);
        }
        expectStateToHave(state, 19683, 1, 9, true);
    });
    it('should not divide indivisible numbers', function () {
        var state = Mocks_1.Mocks.gameState(15, 15, 0, false);
        divideByThree(state, Mocks_1.Mocks.gameValidator(true, false, true));
        expectStateToHave(state, 15, 15, 0, false);
    });
    /*
     * subtract
     */
    it('should subtract from 3 correctly', function () {
        var state = Mocks_1.Mocks.gameState(15, 3, 0, false);
        subtract(state);
        expectStateToHave(state, 15, 2, 1, false);
    });
    it('should subtract from -7 correctly', function () {
        var state = Mocks_1.Mocks.gameState(15, -7, 0, false);
        subtract(state);
        expectStateToHave(state, 15, -8, 1, false);
    });
    it('should subtract from 2 correctly and win', function () {
        var state = Mocks_1.Mocks.gameState(15, 2, 0, false);
        subtract(state);
        expectStateToHave(state, 15, 1, 1, true);
    });
    it('should subtract from MAX_SAFE_INTEGER', function () {
        var state = Mocks_1.Mocks.gameState(79, Number.MAX_SAFE_INTEGER, 0, false);
        subtract(state);
        expectStateToHave(state, 79, Number.MAX_SAFE_INTEGER - 1, 1, false);
    });
    it('should subtract from 79 correctly', function () {
        var state = Mocks_1.Mocks.gameState(79, 79, 0, false);
        subtract(state);
        expectStateToHave(state, 79, 78, 1, false);
    });
    it('should not subtract from an unsubtractable number', function () {
        var state = Mocks_1.Mocks.gameState(79, 79, 0, false);
        subtract(state, Mocks_1.Mocks.gameValidator(true, false, false));
        expectStateToHave(state, 79, 79, 0, false);
    });
    it('should subtract from 65 correctly three times', function () {
        var state = Mocks_1.Mocks.gameState(65, 65, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, true, true);
        for (var i = 0; i < 3; i++) {
            subtract(state, validator);
        }
        expectStateToHave(state, 65, 62, 3, false);
    });
    it('should subtract from 10 correctly nine times and win', function () {
        var state = Mocks_1.Mocks.gameState(10, 10, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, true, true);
        for (var i = 0; i < 9; i++) {
            subtract(state, validator);
        }
        expectStateToHave(state, 10, 1, 9, true);
    });
    /*
     * add
     */
    it('should add to 3 correctly', function () {
        var state = Mocks_1.Mocks.gameState(15, 3, 0, false);
        add(state);
        expectStateToHave(state, 15, 4, 1, false);
    });
    it('should add to -7 correctly', function () {
        var state = Mocks_1.Mocks.gameState(15, -7, 0, false);
        add(state);
        expectStateToHave(state, 15, -6, 1, false);
    });
    it('should add to 0 correctly and win', function () {
        var state = Mocks_1.Mocks.gameState(15, 0, 0, false);
        add(state);
        expectStateToHave(state, 15, 1, 1, true);
    });
    it('should not add to unaddable number', function () {
        var state = Mocks_1.Mocks.gameState(79, 79, 0, false);
        add(state, Mocks_1.Mocks.gameValidator(true, true, true, false));
        expectStateToHave(state, 79, 79, 0, false);
    });
    it('should add to MIN_SAFE_INTEGER', function () {
        var state = Mocks_1.Mocks.gameState(79, Number.MIN_SAFE_INTEGER, 0, false);
        add(state);
        expectStateToHave(state, 79, Number.MIN_SAFE_INTEGER + 1, 1, false);
    });
    it('should add to 65 correctly three times', function () {
        var state = Mocks_1.Mocks.gameState(65, 65, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, true, true);
        for (var i = 0; i < 3; i++) {
            add(state, validator);
        }
        expectStateToHave(state, 65, 68, 3, false);
    });
    it('should add to -8 correctly nine times and win', function () {
        var state = Mocks_1.Mocks.gameState(10, -8, 0, false);
        var validator = Mocks_1.Mocks.gameValidator(true, true, true);
        for (var i = 0; i < 9; i++) {
            add(state, validator);
        }
        expectStateToHave(state, 10, 1, 9, true);
    });
});
