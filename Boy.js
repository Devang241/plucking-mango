class Boy {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,options);
      this.Boy=loadImage("sprites/boy.png")

    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        image(this.Boy,pos.x,pos.y,200,200);
      
      }
    };