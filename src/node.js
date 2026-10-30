export class Node {
  constructor(x = null, y = null) {
    this.x = x;
    this.y = y;
    this.struck = false;
    this.ship = null;
  }

  nameShip(name) {
   this.ship = name
  }
}
