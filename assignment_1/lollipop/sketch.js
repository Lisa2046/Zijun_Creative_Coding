


//move the mouse to change the volumn and playing rate of the music.
var thesound = new p5.SoundFile();
var vol=1; //sound volumn
var speed=1;// playing speed of the music
var mouseclick = 0;
var num=100;
var i;
var red=255;//color of the mouse circle
var ballradius=30;//radius of the mouse circle
var r,g,b,a;//color of background balls
var mouseclick=0;
var x=new Array(num);
var y=new Array(num);
var radius=new Array(num);//radius of background ball
function preload() {
  thesound = loadSound('mika.mp3');

}

function setup() {
  
  createCanvas(640, 480); 
	frameRate(5);
  textAlign(CENTER);
  background(255);
  thesound.play();
  for(i=0;i<num;i++)
   {
    r = random(128, 255);
    g = random(0, 192);
    b = random(0, 50);
    a = random(50, 100);
    fill(r, g, b,a);
    x[i] = random(0, width);
    y[i] = random(0, height);
    radius[i]=random(20,55);
    stroke(r, g, b,a);
    ellipse(x[i], y[i], radius[i], radius[i]);
     
   }


}

function draw() {
  vol=constrain(mouseX/width,0.5,1);
  println(vol);
  masterVolume(vol);
  speed = constrain(mouseY/height, 0.5, 3);
  thesound.rate(speed);
  if (mouseclick=="0"){
    background(255);
    textSize(25);
    fill(200,0,0);
    text("Move the mouse to adjust volumn and playing rate.",width/2,height/2);
    for(i=0;i<num;i++)
    {  
      r = random(128, 255);
      g = random(0, 192);
      b = random(0, 50);
      a = random(50, 100);
      stroke(r, g, b,a);
      fill(r, g, b,a);
      radius[i]=radius[i]+5;
      if(radius[i]>55) {radius[i]=20;}
      ellipse(x[i], y[i], radius[i], radius[i]);
      red=constrain(mouseY/height*255, 80, 200);
      fill(red,0,0,80);
      ballradius=constrain(mouseX/width*50,20,50);
     ellipse(mouseX,mouseY,ballradius,ballradius);
    }
  }
}

function keyPressed()
{ if(key=='P')
  {
    thesound.play();
    mouseclick=0;
  }
  if(key=='S')
  {
    thesound.stop();
     mouseclick=1
  }
}

