var faceScale = 1;
var faceType = 0;
var faceRotation = 0;

function setup() { 
	createCanvas(600, 200);
   noStroke();
} 

function draw() { 
   background(131, 175, 155);

   drawHappyFace(300, 100, faceScale, faceType, faceRotation);

   if(keyIsDown(68)){
      faceRotation += 0.1;
   }
   
   if(keyIsDown(65)){
      faceRotation -= 0.1;
   }

   if(keyIsDown(87) && faceScale < 1.5){
      faceScale += 0.02;
   }

   if(keyIsDown(83) && faceScale > 2/3){
      faceScale -= 0.02;
   }
}

function drawHappyFace(x, y, s, t, r){
   push();
   translate(x, y);
   rotate(r);
   scale(s);

   if(t == 0){
   //Face
   fill(249,205,173);//rosy beige
   ellipse(0, 0, 100, 100);

   //Eye 1
   fill(30);//dark gray
   ellipse(0, 10, 10, 10);

   //Eye 2
   ellipse(20, 10, 10, 10);

   //Mouth
   fill(252,157,154);//light pink
   arc(0, 25, 30, 30, 0, radians(180), PIE);
   pop();
   }
   else if(t == 1){
   //Face
   fill(233,247,172);//greenish
   ellipse(0, 0, 100, 100);
   
   //Eye 1
   stroke(30);//dark gray
   strokeWeight(2);
   line(-5, 5, 5, 15);
   line(-5, 15, 5, 5);
   
   //Eye 2
   line(15, 5, 25, 15);
   line(15, 15, 25, 5);
 
   //Mouth
   line(-10, 28, 10, 28);
   pop();
   }
}

function keyPressed(){
   if(keyCode == 69){
      faceType = 1;
   }
   if(keyCode == 81){
      faceType = 0;
   }
}