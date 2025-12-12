import { Ship } from "./ships";

export class Gameboard {
    fieldAmount = 100;
    fieldsHit = [];
    fleet = ["1","100","10","20"];

    constructor(owner) {
        this.owner = owner;
    }

    boardLoader() {
        //Get gameboard canvas
        const newBoard = document.querySelector(`.gameboard.${this.owner}`)

        //Populate with squares
        for (let i = 1; i <= this.fieldAmount; i++) {
            let newSquare = document.createElement("div");
            newSquare.className = "field";
            newSquare.id = `${i}`;
            newSquare.innerText = "O";
            newBoard.appendChild(newSquare);           
        }
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

    receiveAttack(coordinates) {
        //Check if
        if (this.fleet.includes(coordinates) == true) {
            console.log("Its a hit!")
        } else {
            console.log("Its a miss...")
        }
    }

    squareMarker(coordinates) {
        //Select square
        const square = document.getElementById(`${coordinates}`);
        square.innerText = "X";
        
        //Register attack on hitlist
        this.fieldsHit.push(coordinates);
        console.log(this.fieldsHit);

        this.receiveAttack(coordinates);
    }
}