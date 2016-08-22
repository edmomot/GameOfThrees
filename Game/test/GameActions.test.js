"use strict";
var GameActions_1 = require('../app/logic/GameActions');
function createMockValidator(validStartNumber, divisible, subtractable) {
    if (validStartNumber === void 0) { validStartNumber = true; }
    if (divisible === void 0) { divisible = true; }
    if (subtractable === void 0) { subtractable = true; }
    return {
        isValidStartNumber: function () { return validStartNumber; },
        isDivisible: function () { return divisible; },
        isSubtractable: function () { return subtractable; }
    };
}
function createMockGameState(start, current, moves, hasWon) {
    return {
        start: start,
        current: current,
        moves: moves,
        hasWon: hasWon
    };
}
// Wraps GameActions.divideByThree call to use a mock validator
function divideByThree(state, validator) {
    if (validator === void 0) { validator = createMockValidator(); }
    var actions = new GameActions_1.GameActions(validator);
    actions.divideByThree(state);
    return state;
}
;
function expectStateToHave(state, start, current, moves, hasWon) {
    expect(state.start).toEqual(start);
    expect(state.current).toEqual(current);
    expect(state.moves).toEqual(moves);
    expect(state.hasWon).toEqual(hasWon);
}
describe('GameActions', function () {
    it('should divide 3 by 3 correctly and win', function () {
        var state = createMockGameState(3, 3, 0, false);
        divideByThree(state);
        expectStateToHave(state, 3, 1, 1, true);
    });
    it('should divide 15 by 3 correctly', function () {
        var state = createMockGameState(15, 15, 0, false);
        divideByThree(state);
        expectStateToHave(state, 15, 5, 1, false);
    });
    it('should divide 0 by 3 correctly', function () {
        var state = createMockGameState(0, 0, 0, false);
        divideByThree(state);
        expectStateToHave(state, 0, 0, 1, false);
    });
    it('should divide 33 by 3 correctly', function () {
        var state = createMockGameState(33, 33, 0, false);
        divideByThree(state);
        expectStateToHave(state, 33, 11, 1, false);
    });
    it('should divide 27 by 3 twice correctly', function () {
        var state = createMockGameState(27, 27, 0, false);
        divideByThree(state);
        divideByThree(state);
        expectStateToHave(state, 27, 3, 2, false);
    });
    it('should divide 19683 by 3 correctly', function () {
        var state = createMockGameState(19683, 19683, 0, false);
        divideByThree(state);
        expectStateToHave(state, 19683, 6561, 1, false);
    });
    it('should divide 19683 by 3 six times correctly', function () {
        var state = createMockGameState(19683, 19683, 0, false);
        var validator = createMockValidator(true, true, true);
        for (var i = 0; i < 6; i++) {
            divideByThree(state, validator);
        }
        expectStateToHave(state, 19683, 27, 6, false);
    });
    it('should divide 19683 by 3 nine times correctly and win', function () {
        var state = createMockGameState(19683, 19683, 0, false);
        var validator = createMockValidator(true, true, true);
        for (var i = 0; i < 9; i++) {
            divideByThree(state, validator);
        }
        expectStateToHave(state, 19683, 1, 9, true);
    });
    it('should not divide indivisible numbers', function () {
        var state = createMockGameState(15, 15, 0, false);
        divideByThree(state, createMockValidator(true, false, true));
        expectStateToHave(state, 15, 15, 0, false);
    });
});
