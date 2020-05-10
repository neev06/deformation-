
var car,car2,car3;
 var wall,wall2,wall3;
 var weight,speed,speed1,speed2;
 var deformation3,deformation1,deformation2;
 var l1,l2,l3,l4;
 var flag=0;
 var fl=0;
 var f=0;
 var temp;
 var temp_wt;
 var temps;
 var temp_wts;
 var tem;
 var te;

function setup() {
  createCanvas(1280,610);
  

  car=createSprite(50, 150, 80, 20);
    car.shapeColor="blue";
 
    car2=createSprite(50, 350, 80, 20);
    car2.shapeColor="blue";

    car3=createSprite(50, 520, 80, 20);
    car3.shapeColor="blue";
 
wall=createSprite(1250,95,20,180);
  wall.shapeColor="purple";

  
wall2=createSprite(1250,300,20,180);
wall2.shapeColor="purple";


wall3=createSprite(1250,500,20,180);
  wall3.shapeColor="purple";




  l1=createSprite(800,200,16000,10);
  l1.shapeColor="black";

  l2=createSprite(800,400,16000,10);
  l2.shapeColor="black";

  l2=createSprite(800,610,16000,20);
  l2.shapeColor="black";
}

function draw() {
  background("pink");

  weight=random(700,1500);
  weight1=random(900,1500);
  weight2=random(500,1500);
  speed=random(70,90);
  speed1=random(65,90);
  speed2=random(55,110);

   car.velocityX=speed;
   car2.velocityX=speed1;
   car3.velocityX=speed2;

   textSize(20);
   text("RED= FAIL",20,20);
   textSize(20);
   text("YELLOW= CHECK AGAIN",200,20);
   textSize(20);
   text("GREEN= SAFE",500,20);

   textSize(20);
   text("RED= FAIL",20,230);
   textSize(20);
   text("YELLOW= CHECK AGAIN",200,230);
   textSize(20);
   text("GREEN= SAFE",500,230);
   text("Car Name : ZENIA",700,20);
   textSize(20);
   
   text("Car Name : TOURUS",700,230);
   text("Car Name : CYCLAP",700,430);
   textSize(10);
  
 

   textSize(20);
   text("RED= FAIL",20,430);
   textSize(20);
   text("YELLOW= CHECK AGAIN",200,430);
   textSize(20);
   text("GREEN= SAFE",500,430);
   textSize(10);
   //text(Math.round(speed),990,20);
   //text(Math.round(weight),1100,20);
   text("SPEED :",950,20);
   text("WEIGHT :",1050,20); 
   //text(Math.round(speed1),990,230);
   //text(Math.round(weight1),1100,230);
   text("SPEED :",950,230);
   text("WEIGHT :",1050,230); 
   //text(Math.round(speed2),990,430);
   //text(Math.round(weight2),1100,430);
   text("SPEED :",950,430);
   text("WEIGHT :",1050,430); 
    
  
 if(car.collide(wall) && flag==0){

temp=speed;
temp_wt=weight;

 deformation3=0.5*weight*speed*speed/22500;
 flag=1;}
 
if(deformation3>180 ){
  
 car.shapeColor="red";
 textSize(40);
   text("NOT SAFE",500,150);
   
   textSize(10);
   text(Math.round(temp),990,20);
   text(Math.round(temp_wt),1100,20);
 
}

else if(deformation3<180&&deformation3>90){
  car.shapeColor="yellow";
  textSize(40);
  text("CHECKING REQUIRED",500,150);

  textSize(10);
  text(Math.round(temp),990,20);
  text(Math.round(temp_wt),1100,20);
 
}

else if(deformation3<90){
  car.shapeColor="green";
  textSize(40);
   text("SAFE",500,150);
  
   textSize(10);
   text(Math.round(temp),1100,20);
   text(Math.round(temp_wt),1050,20);
}
 

 if(car2.collide(wall2) && fl==0){
  temps=speed1;
  temp_wts=weight1;

  deformation1=0.5*weight1*speed1*speed1/22500;
  fl=1;
 }

  if(deformation1>180 ){
  
    car2.shapeColor="red";
    textSize(40);
    text("NOT SAFE",500,300);
    textSize(10);
   text(Math.round(temps),990,230);
   text(Math.round(temp_wts),1100,230);
    // speed1.pause();
    // weight.pause();
   }
   
   else if(deformation1<180 && deformation1>90){
     car2.shapeColor="yellow";
     textSize(40);
     text("CHECKING REQUIRED",500,300);
     textSize(10);
   text(Math.round(temps),990,230);
   text(Math.round(temp_wts),1100,230);
    
   }
   
   else if(deformation1<90){
     car2.shapeColor="green";
     textSize(40);
   text("SAFE",500,300);
   textSize(10);
   text(Math.round(temps),990,20);
   text(Math.round(temp_wts),1100,230);
  //  speed1.pause();
  //  weight.pause();
    }
   
    if(car3.collide(wall3) && f==0){
     tem=speed2;
     te=weight2;
    

      deformation2=0.5*weight2*speed2*speed2/22500;
      f=1;
     }
    
      if(deformation2>180 ){
      
        car3.shapeColor="red";
        textSize(40);
        text("NOT SAFE",500,510);

        textSize(10);
        text(Math.round(tem),990,430);
        text(Math.round(te),1100,430);
        
       }
       
       else if(deformation2<180&&deformation2>90){
         car3.shapeColor="yellow";
         textSize(40);
         text("CHECKING REQUIRED",500,510);
         textSize(10);
         text(Math.round(tem),990,430);
         
         text(Math.round(te),1100,430);
       }
       
       else if(deformation2<90){
         car3.shapeColor="green";
         textSize(40);
         text("SAFE",500,510);
         textSize(10);
        text(Math.round(tem),990,430);
       
        text(Math.round(te),1100,430);
        }
       
          
 drawSprites();
 
  
}
speed.stop();
weight.stop();   