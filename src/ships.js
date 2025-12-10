export class Ship {
    sunk = false;
    hits = 0;
    constructor(length, owner) {
        this.length = length;
        this.owner = owner;
    }
    gotHit() {
        this.hits ++
        this.isSunk();
    }
    isSunk() {
        if (this.hits == this.length) {
            console.log(`${this.owner}s ${this.length}-sized ship has been Sunk`);
        }
    }
}