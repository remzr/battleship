import { Ship } from "./ships";

describe("Ship", () => {
    const ship = new Ship();

    test("defines gotHit()", () => {
        expect(typeof ship.gotHit).toBe("function");
    });

    test("defines isSunk()", () => {
        expect(typeof ship.isSunk).toBe("function");
    });

    test("Ship.sunk false by default", () => {
        expect(ship.sunk).toBe(false);
    })

    const realShip = new Ship(7, "player");

    test("Check constructors to set size to 7 and owner to Player", ()=> {
        expect(realShip.length).toBe(7);
        expect(realShip.owner).toBe("player");
    })
});