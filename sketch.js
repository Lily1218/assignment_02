function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  background(0);
  frameRate(60); 
}

// [...] Do not forget what comes before the draw()
   
function draw() {

  translate(width/2,height/2);
  //rotate(frameCount*3);
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/120));
  line(100,0,(cos (frameCount*3)*100),(sin (frameCount*3)*100));
  if (frameCount == 120) {
    noLoop();
  }

}