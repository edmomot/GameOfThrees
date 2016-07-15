import { IGame } from '../../Game/app/entities/IGame'

describe('Game', () => {
    it('can set and read start', () => {
        let game: IGame = { start: 3, current: 3, moves: 0 }

        expect(game.start).toEqual(3);
        game.start += 17;
        expect(game.start).toEqual(20);
    });

    it('can set and read current', () => {
        let game: IGame = { start: 3, current: 3, moves: 0 }

        expect(game.current).toEqual(3);
        game.current += 17;
        expect(game.current).toEqual(20);
    });

    it('can set and read moves', () => {
        let game: IGame = { start: 3, current: 3, moves: 0 }

        expect(game.moves).toEqual(0);
        game.moves += 17;
        expect(game.moves).toEqual(17);
    });
});