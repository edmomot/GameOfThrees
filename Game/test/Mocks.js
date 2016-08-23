"use strict";
var Mocks = (function () {
    function Mocks() {
    }
    Mocks.gameValidator = function (validStartNumber, divisible, subtractable, addable) {
        if (validStartNumber === void 0) { validStartNumber = true; }
        if (divisible === void 0) { divisible = true; }
        if (subtractable === void 0) { subtractable = true; }
        if (addable === void 0) { addable = true; }
        return {
            isValidStartNumber: function () { return validStartNumber; },
            isDivisible: function () { return divisible; },
            isSubtractable: function () { return subtractable; },
            isAddable: function () { return addable; }
        };
    };
    Mocks.gameState = function (start, current, moves, hasWon) {
        return {
            start: start,
            current: current,
            moves: moves,
            hasWon: hasWon
        };
    };
    return Mocks;
}());
exports.Mocks = Mocks;
