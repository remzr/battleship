import { Ship } from "./ships";

export class Gameboard {
    fieldAmount = 100;
    fleet = [];

    constructor() {
        this.owner = owner;
    }

    placeShip(owner) {
        //Push new ships to fleet
        //Check fleet length to see which boats are next
        switch (this.fleet.length) {
            case 5:
                this.fleet.push(new Ship(this.fleet.length, owner));
                break;
            case 4:
                this.fleet.push(new Ship(this.fleet.length, owner));
                break;
            case 3:
                this.fleet.push(new Ship(this.fleet.length, owner));
                break;
            case 2:
                this.fleet.push(new Ship(this.fleet.length, owner));
                break;
            case 1:
                this.fleet.push(new Ship(this.fleet.length, owner));
                break;
            case 0:
                console.log(`${this.owner}s Ships are built.`)
        }
    }
}