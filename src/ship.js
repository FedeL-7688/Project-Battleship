class ship{
    constructor(len,hitN){
        this.length = len
        this.hits = hitN
        this.sunken = false
    }

    hits(){
        return this.hits++
    }
}