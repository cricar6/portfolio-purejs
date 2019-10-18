console.log("running");

var nmobiles=700;
var mobiles=[];
var noisescale;
var a1, a2, a3, a4, a5, amax;
var bw=false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noFill();  
  colorMode(HSB, 360, 255, 255, 255);
  strokeWeight(.6);
  reset();
}
function reset() {
  noisescale=random(.01, .1);
  noiseDetail(int(random(2,10)));
  amax=random(5);
  a1=random(1, amax);
  a2=random(1, amax);
  a3=random(1, amax);
  a4=random(1, amax);
  a5=30;
  for (var i = 0; i < nmobiles; i++) {
    mobiles[i] = new Mobile(i);
  }
}
function draw() {
	//noiseSeed(millis()*.00005);
  for (var i = 0; i < nmobiles; i++) {
    mobiles[i].run();
  }
}
function keyReleased() {
  if (keyCode==32) reset();
  if(key=="r" || key=="R")setup();
}

function Mobile(index) {
  this.index=index;
  this.velocity=createVector(0, 0);
  this.acceleration=createVector(0, 0);
  this.position0=createVector(random(0, width), random(0, height));
  this.position=this.position0.copy();
}

Mobile.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Mobile.prototype.update = function() {
  this.velocity=createVector(1-2*noise(a4+a2*sin(PI*this.position.x/width), a4+a2*sin(PI*this.position.y/height)), 1-2*noise(a2+a3*cos(PI*this.position.x/width), a4+a3*cos(PI*this.position.y/height)));
  this.velocity.mult(a5);//100*fbm(this.position));
  //this.velocity.rotate(10*noise(a4+a3*sin(PI*this.position.x/width)));
  this.position0=this.position.copy();
  this.position.add(this.velocity);
};

// Method to display
Mobile.prototype.display = function() {
  stroke(157, 87, 97,100);
  line(this.position0.x, this.position0.y, this.position.x, this.position.y);
  if (this.position.x>width || this.position.x<0||this.position.y>height||this.position.y<0) {
    this.position0=createVector(random(0, width), random(0, height));
    this.position=this.position0.copy();
  }
};
