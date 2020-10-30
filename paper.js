class Paper{
  constructor(x, y,radius) {
    var options = {
        'restitution':0.1,
        'friction':1.0,
        'density':1.5
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;

    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke("grey");
    fill("white");
    circle(0, 0, this.radius);
    pop();
  }
};

