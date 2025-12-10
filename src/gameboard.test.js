import { Gameboard } from "./gameboard";

describe("Gameboard", () => {
    const board = new Gameboard();

    test("defines placeShip()", () => {
        expect(typeof board.placeShip).toBe("function");
    });

    test("defines receiveAttack()", () => {
        expect(typeof board.receiveAttack).toBe("function");
    });

    test("Missed fields is 0 by default", () => {
        expect(board.missed).toBe(0);
    });
    
    test("Check if fleet array is 5 by default", () => {
        expect(board.fleet.length).toBe(5);
        expect(typeof board.fleet).toBe("array");
    });        
});