
import { Gameboard } from "../src/gameboard"
import { Node } from "../src/node"



test('build table', ()=>{
    const game = new Gameboard
    const result = game.buildBoard()
    expect(result.length).toEqual(8)
    result.forEach(row=>{
        expect(row.length).toBe(8)
    })
    
}
)
test('valid table nodes',()=>{
  const game = new Gameboard
  const result = game.buildBoard()
  expect(result[0][0]).toBeInstanceOf(Node)
})

test('valid struck and ship properties',()=>{
    const game = new Gameboard
    const result = game.buildBoard()
    expect(result[0][0].struck).toEqual(false)
    expect(result[0][0].ship).toEqual(null)
})


test('place ship', ()=>{
    const game = new Gameboard
     game.buildBoard()
     game.placeShip('X',0,0,3,'Fede')
    expect(game.board[0][0].ship.name).toEqual('Fede');
    expect(game.board[1][0].ship.name).toEqual('Fede');
    expect(game.board[0][1].ship).toEqual(null);
    expect(game.board[1][1].ship).toEqual(null);
})
