let x1 = 100;     // x position of the ball
let y1 = 0;       // y position of the ball
let x1Speed = 3;  // speed in X direction
let y1Speed = 7; // speed in Y direction
let d1 = 100;      // diameter of the ball

let x2 = 100;     // x position of the ball
let y2 = 0;       // y position of the ball
let x2Speed = 3;  // speed in X direction
let y2Speed = 10; // speed in Y direction
let d2 = 150;      // diameter of the ball

let x3 = 100;
let y3 = 0;
let x3Speed = 3;
let y3Speed = 12;
let d3 = 200;

//can simplify most of this; make your own function 

function setup() {
  createCanvas(1920, 991); //fullscreen in a chrome tab
  textSize(60);
}

function draw() {
  background(240,0,0); 
  text(key, 20, 75); // Draw at coordinate (20,75)
{if (mouseButton == LEFT) {
    fill(137,10,234); // a nice purple
  }
  else {
    fill(127, 118, 243);   // another nice purple
  }
  rect(0, 0, 1920, 991); //changes color of the background with mouse click
}

// fix keyIsPressed, thats a variable, use keyPressed() instead
// use keypressed outside of draw
{if ((keyIsPressed == true) && (key == 't') || (key == 'i') || (key == 'e') || (key == 'n')){  // If the key is pressed,
  fill(1,200,0);      // reacts if i type my name in lowercase
}
else {                       // idk what else to do for the else
}
}
ellipse(x3,y3,d3);
  

  fill(113, 218, 150)// changes color of circle1
 
  // if x hits the right side or the left side of the canvas,
  // switch directions...
  if (x1 > width || x1 < 0) {
    x1Speed = x1Speed * -1;  
  }
  x1 = x1 + x1Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y1 > height || y1 < 0) {//i changed witdh to height here
    y1Speed = y1Speed * -1;  
  }
  y1 = y1 + y1Speed;

  ellipse(x1, y1, d1);

fill(0,0,200) //changes color of circle2


  if (x2 > width || x2 < 0) {
    x2Speed = x2Speed * -1;  
  }
  x2 = x2 + x2Speed; // adding a negative xSpeed *decreases* x, right?
  
  // same as above, but for the top and bottom of the canvas
  if (y2 > height || y2 < 0) {
    y2Speed = y2Speed * -1;  
  }
  y2 = y2 + y2Speed;

  ellipse(x2, y2, d2);

   //changes color of circle3


  if (x3 > width || x3 < 0) {
    x3Speed = x3Speed * -1;  
  }
  x3 = x3 + x3Speed; 
  if (y3 > height || y3 < 0) {
    y3Speed = y3Speed * -1;  
  }
  y3 = y3 + y3Speed;


 


}
