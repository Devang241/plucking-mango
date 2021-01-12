class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0,
          friction: 1,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Stone=loadImage("sprites/stone.png")
      World.add(world, this.body);
    }
  display(){

    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER)
    imageMode(CENTER);
    image(this.Stone,this.width,this.height,70,70);
    pop();
  }
}