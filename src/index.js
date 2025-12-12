import "./styles.css";
import { Gameboard } from "./gameboard.js";

const playerOne = new Gameboard("player");

playerOne.boardLoader();

console.log(playerOne);

//Chose players gameboard for now -> later event handlers are needed on enemy board
document.querySelector(".gameboard.player").addEventListener("click", function(e) {
    playerOne.squareMarker(e.target.id);
});
