let centerX;
let centerY;
let radiusBigX;
let radiusBigY;
let radiusSmall = 5;
let numCircles;


function preload(){
    img=loadImage('Mysore Palace.jpg')
  //https://www.explorebees.com/uploads/Mysore%20Palace%20(35).jpg
  }

function setup() {
 
  createCanvas(700, 700);
  img.loadPixels();
  background(img)
  filter(BLUR,3)
  
  centerX = 362;
  centerY = 130;
  radiusBigX = 80;
  radiusBigY = 47;
  radiusSmall = 5;
  numCircles = random(5,13);
  
}

function draw() {

  noLoop();
  noFill();
  stroke('gold');
  strokeWeight(2.5)
  arc(centerX, centerY, radiusBigX * 2, radiusBigY * 2,PI,TWO_PI); //start at PI and end at 2PI

  // Draw smaller circles on the arc
  for (let i = 0; i <= numCircles; i++) {
    //divide half of circle (2PI or 360 deg) into desired number of parts
    let angle = -(PI / numCircles * i); //minus theta for flipping position to upper half
    let xsmall = cos(angle) * radiusBigX; //radius * cos(theta)
    let ysmall = sin(angle) * radiusBigY; //radius * sin(theta)
    fill('gold');
    noStroke();
    circle(centerX + xsmall, centerY + ysmall, radiusSmall * 2);
  }
  
  

}