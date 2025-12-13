import "./styles.css";
import { Gameboard } from "./gameboard.js";

const playerOne = new Gameboard("player");

playerOne.createFleet("player");
playerOne.boardLoader();


//Chose players gameboard for now -> later event handlers are needed on enemy board
document.querySelector(".gameboard.player").addEventListener("click", function(e) {
    playerOne.squareMarker(e.target.id);
});
