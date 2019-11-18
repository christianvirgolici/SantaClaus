var eye = 2;
var eyeball = 30;
var snowflake1 = 0;
var snowflake2 = 10;



function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {   
 background("#55efc4");
       

 fill("#fab1a6");
    noStroke();
ellipse(200,335,200,200);                //Santa's Face
    
 fill("#ff7675");
triangle(200,100,300,300,100,300);       //Red Hat
    
    fill("white");
ellipse(200, 100, 50,50);                //white top of hat
    
    
    
    
                                //BEARD
    
    fill("white");
ellipse(130, 400, 100,100);
    
        fill("white");
ellipse(270, 400, 100,100);
    
        fill("white");
ellipse(200, 400, 100,100); 
    
    
     fill("white");
ellipse(150, 430, 70,70); 

         fill("white");
ellipse(250, 430, 70,70); 
    
         fill("white");
ellipse(200, 450, 70,70); 
                                //END OF BEARD
    
    
    
                                //START OF MOUTH
    fill("#ff7675");
    ellipse(200, 400, 20,20);
    
     fill("white");
    ellipse(200, 395, 20,20);
    
    
    
    
                                    //START OF EYES
         fill("white");
ellipse(150, 320, eyeball, eyeball); //white eye
    
           fill("white");
ellipse(250, 320, eyeball, eyeball); 
   
    
    
        fill("black");
ellipse(150, 320, eye,eye);             // iris left and right
    
           fill("black");
ellipse(250, 320, eye,eye); 
                                    //END OF EYES
    
    
    
                                    //TEXT
    fill("white");
    textSize(20);
    text("BE GOOD", 370, 140);
    text("SANTA'S WATCHING!", 270, 180);
     textSize(20);
    text("IT'S ALMOST XMAS!", 280, 220);
	
    
    
	
                                    //SNOWFLAKES
	fill("white");
    textSize(90);
	text("*", 200, 50);
	text("*", 400, 300);
    text("*", 300, 100);
    text("*", 70, 200);
    text("*", 25, 350);
    text("*", mouseX, mouseY);
    text("*", 50, 500);
    text("*", snowflake1, snowflake1);
    snowflake1 = snowflake1 +10;
    text("*", snowflake2, snowflake2);
    snowflake2 = snowflake2 +20;
                                    //END OF SNOWFLAKES
}

   

function mousePressed(){
    if (eye >= 50){
        eye = 5;
    }
    else{
        eye = eye + 10;
    }
    
    
     if (eyeball >= 100){
        eyeball = 20;
    }
    else{
        eyeball = eyeball + 20;
    }
    
    
}



 