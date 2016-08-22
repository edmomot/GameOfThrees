import { IGameValidator } from '../app/logic/contracts/IGameValidator';
import { IGameState } from '../app/logic/contracts/IGameState';

import { GameActions } from '../app/logic/GameActions';

function createMockValidator(
        validStartNumber: boolean = true,
        divisible: boolean = true,
        subtractable: boolean = true): IGameValidator {
    return {
        isValidStartNumber: () => { return validStartNumber; },
        isDivisible: () => { return divisible; },
        isSubtractable: () => { return subtractable; }
    };
}

function createMockGameState(
        start: number,
        current: number,
        moves: number,
        hasWon: boolean): IGameState {
    return {
        start: start,
        current: current,
        moves: moves,
        hasWon: hasWon
    }
}

// Wraps GameActions.divideByThree call to use a mock validator
function divideByThree(
        state: IGameState,
        validator: IGameValidator = createMockValidator()): IGameState{
    let actions: GameActions = new GameActions(validator);
    actions.divideByThree(state);
    return state;
};

function expectStateToHave(
        state: IGameState,
        start: number,
        current: number,
        moves: number,
        hasWon: boolean): void {
    expect(state.start).toEqual(start);
    expect(state.current).toEqual(current);
    expect(state.moves).toEqual(moves);
    expect(state.hasWon).toEqual(hasWon);
}

describe('GameActions', () => {
    it('should divide 3 by 3 correctly and win', () => {
        let state: IGameState = createMockGameState(3, 3, 0, false);
        divideByThree(state);
        expectStateToHave(state, 3, 1, 1, true);
    });

    it('should divide 15 by 3 correctly', () => {
        let state: IGameState = createMockGameState(15, 15, 0, false);
        divideByThree(state);
        expectStateToHave(state, 15, 5, 1, false);
    });

    it('should divide 0 by 3 correctly', () => {
        let state: IGameState = createMockGameState(0, 0, 0, false);
        divideByThree(state);
        expectStateToHave(state, 0, 0, 1, false);
    });

    it('should divide 33 by 3 correctly', () => {
        let state: IGameState = createMockGameState(33, 33, 0, false);
        divideByThree(state);
        expectStateToHave(state, 33, 11, 1, false);
    });

    it('should divide 27 by 3 twice correctly', () => {
        let state: IGameState = createMockGameState(27, 27, 0, false);
        divideByThree(state);
        divideByThree(state);
        expectStateToHave(state, 27, 3, 2, false);
    });

    it('should divide 19683 by 3 correctly', () => {
        let state: IGameState = createMockGameState(19683, 19683, 0, false);
        divideByThree(state);
        expectStateToHave(state, 19683, 6561, 1, false);
    });

    it('should divide 19683 by 3 six times correctly', () => {
        let state: IGameState = createMockGameState(19683, 19683, 0, false);
        let validator: IGameValidator = createMockValidator(true, true, true);

        for (let i = 0; i < 6; i++)
        {
            divideByThree(state, validator);
        }

        expectStateToHave(state, 19683, 27, 6, false);
    });

    it('should divide 19683 by 3 nine times correctly and win', () => {
        let state: IGameState = createMockGameState(19683, 19683, 0, false);
        let validator: IGameValidator = createMockValidator(true, true, true);

        for (let i = 0; i < 9; i++) {
            divideByThree(state, validator);
        }

        expectStateToHave(state, 19683, 1, 9, true);
    });
    
    it('should not divide indivisible numbers', () => {
        let state: IGameState = createMockGameState(15, 15, 0, false);
        divideByThree(state, createMockValidator(true, false, true));
        expectStateToHave(state, 15, 15, 0, false);
    });
    
});