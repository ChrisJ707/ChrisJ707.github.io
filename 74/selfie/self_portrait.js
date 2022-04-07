function setup() {
  createCanvas(520, 520);

}

function draw() {
 background(177, 156, 217); // background color
  //cube bubbles
  fill(255, 255, 255, 70);
  rect(130, 50, 30, 30); //tiniest cube
  rect(50, 110, 40, 40); //tiny cube
  rect(420, 190, 60, 60); //smaller cube
  rect(110, 300, 100, 100); //small cube
  rect(320, 0, 200, 200); //medium cube
  rect(305, 10, 200, 200); //medium cube
  rect(60, 120, 400, 200); //big cube
  rect(20, 260, 210, 210); //bigger cube
  
 //shirt
 fill(171, 36, 26);
  ellipse(315, 500, 280, 350);//hoodie
 
 //hoodie
 fill(204, 44, 33);
  ellipse(330, 380, 190, 160);// back ofhoodie
 fill(204, 61, 51);
  ellipse(300, 380, 190, 160);//hoodie
 fill(87, 17, 12);
  ellipse(295, 400, 120, 100);// shading
 
 //hair behind face
 fill(5, 5, 5);
  rect(160, 100, 250, 200, 100, 100, 90, 80); //Big rectangle
  triangle(165, 225, 140, 230, 162, 160); //first strand
  triangle(150, 205, 120, 220, 162, 160); //second strand
  triangle(155, 190, 100, 180, 162, 150); //third strand
  triangle(145, 180, 100, 125, 190, 130); //fourth strand
  triangle(185, 160, 130, 100, 210, 110); //fifth strand
  triangle(185, 160, 130, 100, 210, 110); //sixth strand
  triangle(210, 160, 170, 70, 350, 130); //seventh strand
  triangle(230, 160, 245, 68, 360, 130); //eight strand
  triangle(190, 160, 320, 72, 350, 130); //ninth strand

  //left glasses stems
  fill(54, 86, 138);
   rect(147, 275, 20, 10); //left glasses stem

  ///neck
  fill(207, 191, 149);
   rect(260, 340, 60, 70); //main neck
  fill(200, 100, 90);
   rect(260, 345, 60, 40); //shading
  fill(207, 191, 149);
   arc(290, 400, 70, 70, TWO_PI, PI);
  endShape();

  ///face
  fill(207, 191, 149);
   ellipse(260, 255, 210, 240); //main head
   ellipse(250, 325, 190, 100); //left cheek
   ellipse(260, 325, 190, 100); //right cheek
    
 //hairline over face
 fill(5, 5, 5);
  rect(160, 132, 230, 60, 80, 70, 0, 0); //top of hairline
  rect(333, 200, 40, 100); //side hairline
  rect(300, 160, 70, 50); //ear hairline
 
   ///whites of the eyes
 fill(255, 255, 255);
  arc(200, 272, 60, 72, 0, PI, CHORD); //left eye
  arc(290, 272, 60, 72, 0, PI, CHORD); //right eye
  
 ///pupils
 fill(0, 0, 0);
  arc(200, 272, 30, 36, 0, PI, CHORD); //left pupil
  arc(290, 272, 30, 35, 0, PI, CHORD); //right pupil
  
 //eye wrinkle
   fill(100, 100, 100);
  arc(200, 275, 70, 90, 40, PI, CHORD); //left wrinkle
  arc(290, 275, 70, 90, 40, PI, CHORD); //right wrinkle
  
 //right glasses stem
 fill(54, 86, 138);
  rect(320, 275, 80, 10); //right glasses stem
  
 ///ear
 fill(207, 191, 149);
  ellipse(365, 300, 65, 65);
  //ear shade
      fill(217, 130, 104); 
      arc(370, 300, 40, 40, 0,357);

 //mouth
 fill(255,0,0,100);
  arc(240, 338, 50, 40, TWO_PI, PI);
  endShape();
  //Teeth
  fill(255);
  strokeWeight(2);
  arc(240, 338, 49, 15, 0, 91.1);
  
 //eyebrows
 fill(20, 20, 20);
  arc(160,260,120,10, 180, 0); //left eyerbrow
  arc(260,260,130,10, 180, 0); //right eyebrow
  
 //Glasses
  stroke(150,150,150,255);
  fill(255,255,255,120);
  //rightlens
  rect(250, 275, 70, 50, 0, 0, 20, 20);
  fill(65, 65, 65);
  rect(250,275,70,6);
  fill(255,255,255,120);
  stroke(150,150,150,255);
  //leftlens
  rect(150, 275, 70, 50, 0, 0, 20, 20);
  fill(65, 65, 65);
  rect(150,275,70,6);
    noStroke();
     //Lens Glares
      fill(255);
      ellipse(165,315,15,10); //left glare
      ellipse(300,315,15,10); //right glare
      //Nose Bridge Frames
      fill(54, 86, 138);
      rect(220, 275, 30, 5);
  
  noStroke();
}
