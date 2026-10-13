import Node from "./node.js"
export class Ship{
    constructor(len){
        this.length = len
        this.hits = 0
        this.sunken = false
        this.nodes = []
    }
 
    hits(){
        return this.hits++
    }
    isSunken(){
        return this.hits === this.hits.length? true: false
    }
  
}