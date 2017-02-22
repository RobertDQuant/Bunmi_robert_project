

var y = 0; // to make the ball move on the y axis
var speed = 5; 

function setup() {
  createCanvas(600, 480);
}

function draw() {
  background("grey");
  stroke(125);
  strokeWeight(3);
  fill(mouseX, 225, mouseY);
  ellipse(240, y, 80, 80);
  
  if (y > height){
    speed = -5;
  }
  
    if
      (y < 0) { // to make the ball bounce back
      speed = 5;
  }

 y = y + speed; 

    
}

function mousePressed() {
    speed = 0;
    
    function mousePressed() {
        speed = -5;
    }
}
