class Box {
    constructor(xInput, yInput, widthInput, heightInput) {
      var options = {
        'restitution': 0.2,
        'density': 1.5,
        'friction': 1.0
      };
      this.width = widthInput;
      this.height = heightInput;
      this.body = Bodies.rectangle(xInput,yInput,this.width,this.height,options);
      World.add(userWorld, this.body);
    }
    display() {
       
      var boxpos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(boxpos.x, boxpos.y);
      rect(0,0,this.width,this.height);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      fill (255,300,255);
      pop();
    }
  }
  