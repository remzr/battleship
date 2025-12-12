import "./styles.css";
import { Gameboard } from "./gameboard.js";

const playerOne = new Gameboard("player");

playerOne.boardLoader();

console.log(playerOne);