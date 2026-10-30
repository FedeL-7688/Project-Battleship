import { Ship } from "./src/ship";

test("build shipParts",()=>{

    let ship = new Ship(3,'A1')
    expect(ship.buildParts('X',0,0)).toEqual([[0,0],[1,0]])
})

test("limit size check",()=>{
  let ship = new Ship(3,'A1')
    expect(ship.buildParts('X',10,20)).toEqual("node list is empty. check coordinates. Must be over 0 and under 8.")
})