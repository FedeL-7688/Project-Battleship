export class Ship{
    constructor(len){
        this.length = len
        this.hits = 0
        this.sunken = false
    }

    hits(){
        return this.hits++
    }
    isSunken(){
        return this.hits === this.hits.length? true: false
    }

}