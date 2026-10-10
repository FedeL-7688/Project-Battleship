import {ship} from './ship.js'

class Gameboard{
    constructor(){
            this.board = []
    }
    
    isValid(node){


    if (0<=node[0]&& node[0]<8 && 0<=node[1] && node[1]<8) return true

    return false
   }

    placeShip(){
     
    }
}