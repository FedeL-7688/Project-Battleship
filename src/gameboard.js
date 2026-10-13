import {Ship} from './ship.js'
import Node from "./node.js"
class Gameboard{
    constructor(){
            this.board = []
    }
    
    isValid(node){


    if (0<=node[0]&& node[0]<8 && 0<=node[1] && node[1]<8) return true

    return false
   }

    placeShip(axis){
     if (axis!=='x'||axis!=='y'){
        throw new Error("choose a proper axis (X or Y)")
     }
     let ship = new Ship()

    
    }
}