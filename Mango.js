class Mango {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Mango=loadImage("sprites/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      image(this.Mango,pos.x,pos.y,70,70);
    
    }
  };