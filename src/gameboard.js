import { Ship } from "./ships";

export class Gameboard {
    fieldAmount = 100;
    fieldsHit = [];
    fieldsTaken = [];
    fleet = [];
    fieldsSunk = [];

    constructor(owner) {
        this.owner = owner;
    }

    boardLoader() {
        //Get gameboard canvas
        const newBoard = document.querySelector(`.gameboard.${this.owner}`)

        //Delete existing child elements
        while (newBoard.hasChildNodes()) {
            newBoard.removeChild(newBoard.firstChild);
        }

        //Check for sunken ships and get their coordinates
        this.fleet.forEach((element) => {
            if (element.sunk == true) {
                this.fieldsSunk.push(...element.coordinates);
            }
        });

        //Populate gameboard
        for (let i = 1; i <= this.fieldAmount; i++) {
            let newSquare = document.createElement("div");
            newSquare.className = "field";
            newSquare.id = `${i}`;
            newSquare.innerText = "O";
            
            //Check if field is ship and add class if yes
            if (this.fleet.some(ship => ship.coordinates.includes(i))) {
                newSquare.className = "field ship";
            }

            //Check if field is ship AND is hit and add hit-class
            if (this.fleet.some(ship => ship.coordinates.includes(i) &&
                this.fieldsHit.some(hits => hits.includes(i)))) {
                newSquare.className = "field ship hit";
            }

            //Mark field if ship is sunk
            if (this.fieldsSunk.includes(i)) {
                newSquare.className = "field ship sunk";
            }

            //Check if field is marked and place X
            if (this.fieldsHit.includes(`${i}`)) {
                newSquare.innerText = "X";
            }

            newBoard.appendChild(newSquare);
        }
        console.log(this.fleet)
        console.log(this);
    }

   createFleet(owner) {
        for (let i = 5; i >= 1; i--) {
            let newShip = new Ship(i, owner);
            this.fleet.push(newShip);

            this.placeShip(newShip);
        }
        console.log(this.fleet);
    }

    placeShip(ship) {
        //Randomly choose ship direction: 0 = horizontal, 1 = vertical
        let shipDirection = Math.floor(Math.random() * 2)

        for (let i = 0; i < ship.length; i++) {
            ship.coordinates.push(this.getValidFields(i, shipDirection, ship));
        }
    }

    getValidFields(digit, direction, ship) {
        //Create unique starting point, the first time this is called
        if (digit == 0) {
            let randomCoordinate = Math.floor(Math.random() * this.fieldAmount);
            this.fieldsTaken.push(randomCoordinate);
            return randomCoordinate;
        //Place horizontal boats
        } else if (direction == 0) {
            let nextCoordinate = ship.coordinates[digit - 1];
            
            //Check if starting point is on the left side of the field
            if (ship.coordinates[0] >= 0 && ship.coordinates[0] <= 5 ||
                ship.coordinates[0] >= 10 && ship.coordinates[0] <= 15 ||
                ship.coordinates[0] >= 20 && ship.coordinates[0] <= 25 ||
                ship.coordinates[0] >= 30 && ship.coordinates[0] <= 35 ||
                ship.coordinates[0] >= 40 && ship.coordinates[0] <= 45 ||
                ship.coordinates[0] >= 50 && ship.coordinates[0] <= 55 ||
                ship.coordinates[0] >= 60 && ship.coordinates[0] <= 65 ||
                ship.coordinates[0] >= 70 && ship.coordinates[0] <= 75 ||
                ship.coordinates[0] >= 80 && ship.coordinates[0] <= 85 ||
                ship.coordinates[0] >= 90 && ship.coordinates[0] <= 95) {
                nextCoordinate = nextCoordinate + 1;
                return nextCoordinate;
            } else {
                nextCoordinate = nextCoordinate - 1;
                return nextCoordinate;
            }
        //Place vertical boats
        } else if (direction == 1) {
            let nextCoordinate = ship.coordinates[digit - 1];
            //Check if starting point is in upper half of the field
            if (ship.coordinates[0] <= (this.fieldAmount / 2)) {          
                nextCoordinate = nextCoordinate + 10;
                return nextCoordinate;
            } else {
                nextCoordinate = nextCoordinate - 10;
                return nextCoordinate;            
            }
        }
    }
    


    /*placeShip(owner) {    //For later use to place single ships
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
    }*/

    receiveAttack(coords) {
        //Check which ship is placed on the coordinates and trigger its gotHit Function

        this.fleet.forEach((element) => {
            if (element.coordinates.includes(+coords) == true) {
                element.gotHit();
                console.log("Its a hit!")
            }
        })
    }

    squareMarker(coordinates) {
       
        //Register attack on hitlist
        this.fieldsHit.push(coordinates);

        this.receiveAttack(coordinates);
        //Reload board
        this.boardLoader();
    }
}