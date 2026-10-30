import { Ship } from "./ship.js";
import { Node } from "./node.js";
import { forEach } from "lodash";
import { forEachOf } from "neo-async";

export class Gameboard {
  constructor() {
    this.board = [];
  }

  buildBoard() {
    let i = 0;

    while (i < 8) {
      let j = 0;
      let row = [];
      while (j < 8) {
        let square = new Node(i, j);
        row.push(square);
        j++;
      }
      this.board.push(row);
      i++;
    }
    return this.board;
  }

  placeShip(axis, x, y, len, name) {
    let ship = new Ship(len, name);
    ship.buildParts(axis, x, y);
    let parts = ship.nodes;
    parts.forEach((part) => {
      this.board[part[0]][part[1]].ship = ship
    });
  }
  recieveAttack(x,y){
    
  }
}
