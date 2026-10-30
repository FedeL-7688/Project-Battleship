
export class Ship{
    constructor(len,name){
        this.length = len
        this.hits = 0
        this.sunken = false
        this.nodes = []
        this.name = name
    }

     isValid(node){


    if (0<=node[0]&& node[0]<8 && 0<=node[1] && node[1]<8) return true

    return false
   }

    buildParts(axis,xCor,yCor){
         if (axis!=='X' && axis!=='Y'){
        throw new Error("choose a proper axis (X or Y)")
     }
       
        if (axis == 'X'){ 
             let i = 1;
        let x = xCor;
        let y = yCor;
             while (i<this.length){

            let part = [x,y]
            if(this.isValid(part)){
             this.nodes.push(part)
            }
            else if (!this.isValid(part)){
                break
            }
            x++
            i++
        }
    }
        else if (axis=='Y'){
             let i = 1;
        let x = xCor;
        let y = yCor;
            while (i<this,this.length){

            let part = [x,y]
            if(this.isValid(part)){
             this.nodes.push(part)
            }
            else if (!this.isValid(part)){
                break
            }
            y++
            i++
        }

        }
        if (this.nodes.length===0){
            return "node list is empty. check coordinates. Must be over 0 and under 8."
        }
        return this.nodes

    }
 
    hits(){
        return this.hits++
    }
    isSunken(){

        return this.hits === this.length? true: false
    }
  
}