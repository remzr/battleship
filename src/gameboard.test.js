import { Gameboard } from "./gameboard";

describe("Gameboard", () => {
    const board = new Gameboard();

    test("defines placeShip()", () => {
        expect(typeof board.placeShip).toBe("function");
    });

    test("defines receiveAttack()", () => {
        expect(typeof board.receiveAttack).toBe("function");
    });

    test.skip("Missed fields is 0 by default", () => {
        expect(board.missed).toBe(0);
    });
    
    test.skip("Check if fleet array is empty by default", () => {
        expect(board.fleet.length).toBe(0 || undefined);
        expect(typeof board.fleet).toBe("array");
    });        
});