import { IGameActions } from '../app/logic/contracts/IGameActions';
import { IGameState } from '../app/logic/contracts/IGameState';

import { GameValidator } from '../app/logic/GameValidator';

import { Mocks } from './Mocks'

describe('GameValidator', () => {

    /*
     * isValidStartNumber
     */

    it('permits 2 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(2)).toBeTruthy();
    });

    it('permits 3 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(3)).toBeTruthy();
    });

    it('permits 98571 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(98571)).toBeTruthy();
    });

    it('does not permit 1 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(1)).toBeFalsy();
    });

    it('does not permit 0 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(0)).toBeFalsy();
    });

    it('does not permit -1 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(-1)).toBeFalsy();
    });

    it('does not permit -56921 as a start number', () => {
        let validator: GameValidator = new GameValidator();
        expect(validator.isValidStartNumber(-56921)).toBeFalsy();
    });

    /*
     * isDivisible
     */


    it('does not permit an undefined IGameState on isDivisible', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState;
        expect(validator.isDivisible(gameState)).toBeFalsy();
    });

    it('permits 3 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 3, 0, false);
        expect(validator.isDivisible(gameState)).toBeTruthy();
    });

    it('permits 6 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 6, 0, false);
        expect(validator.isDivisible(gameState)).toBeTruthy();
    });

    it('permits 27 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(27, 27, 0, false);
        expect(validator.isDivisible(gameState)).toBeTruthy();
    });

    it('permits 1594323 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(1594323, 1594323, 0, false);
        expect(validator.isDivisible(gameState)).toBeTruthy();
    });

    it('does not permit 1 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 1, 0, false);
        expect(validator.isDivisible(gameState)).toBeFalsy();
    });

    it('does not permit 2 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 2, 0, false);
        expect(validator.isDivisible(gameState)).toBeFalsy();
    });

    it('does not permit 28 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(30, 28, 0, false);
        expect(validator.isDivisible(gameState)).toBeFalsy();
    });

    it('does not permit 791 as a divisible number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(791, 1, 0, false);
        expect(validator.isDivisible(gameState)).toBeFalsy();
    });

    /*
     * isSubtractable
     */
    
    it('does not permit an undefined IGameState on isSubtractable', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState;
        expect(validator.isSubtractable(gameState)).toBeFalsy();
    });

    it('permits 2 as a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 2, 0, false);
        expect(validator.isSubtractable(gameState)).toBeTruthy();
    });

    it('permits 3 as a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 3, 0, false);
        expect(validator.isSubtractable(gameState)).toBeTruthy();
    });

    it('permits 69 as a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(69, 69, 0, false);
        expect(validator.isSubtractable(gameState)).toBeTruthy();
    });

    it('does not permit 1 as a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 1, 0, false);
        expect(validator.isSubtractable(gameState)).toBeFalsy();
    });

    it('does not permit 0 as a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, 0, 0, false);
        expect(validator.isSubtractable(gameState)).toBeFalsy();
    });

    it('does not permit -45 as a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, -45, 0, false);
        expect(validator.isSubtractable(gameState)).toBeFalsy();
    });

    it('does not permit MIN_SAFE_INTEGER a subtractable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, Number.MIN_SAFE_INTEGER, 0, false);
        expect(validator.isSubtractable(gameState)).toBeFalsy();
    });

    /*
     * isAddable
     */

    it('does not permit an undefined IGameState on isAddable', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState;
        expect(validator.isAddable(gameState)).toBeFalsy();
    });

    it('does not permit MAX_SAFE_INT as an addable number', () => {
        let validator: GameValidator = new GameValidator();
        let gameState: IGameState = Mocks.gameState(15, Number.MAX_SAFE_INTEGER, 0, false);
        expect(validator.isAddable(gameState)).toBeFalsy();
    });


});