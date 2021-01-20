class Ball {
    constructor(x, y,width,height,angle) {
      var options = {
          'frictionAir':0.005,
          'density':1.0
      }
      this.s=loadImage("superman image.jpg");
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.s,0,0,this.width+50,this.height);
      pop();
    }
  };