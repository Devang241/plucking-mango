class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,options);
      this.Tree=loadImage("sprites/tree.png")

    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        image(this.Tree,pos.x,pos.y,600,600);
      
      }
    };