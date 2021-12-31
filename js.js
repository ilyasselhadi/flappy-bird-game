let buble;
let walls = [] ;
let img ;
let d ;
let h1 ;
let score,scorenumber ;

function preload(){
img = loadImage('https://openclipart.org/image/400px/191743')
}

function setup() {
  createCanvas(400, 400);
  buble = new Buble();
  pos= random(100,400)
  walls.push(new Walls())
  h1 = createElement("h1","score : ");
  score = createP("0");
}

function draw() {
  background(0);

  buble.show();
  buble.update();
    

    if(frameCount%200 == 0){
      walls.push(new Walls())
    }
       scorenumber = walls.length ;
        score.html (scorenumber) ;
    for(i=0;i<walls.length;i++){
      walls[i].show();
      walls[i].update();

      if(walls[i].hits(buble)){

        score.html(0);
        walls.length = 0;
       
      }

    
     
    }
 
    
  


}



class Buble{

  constructor(){
    this.x=70;
    this.y=380 ;
    this.yspeed = 0
  }
  update(){
    let gravity = 0.1;
    this.y +=this.yspeed ;
    this.yspeed +=gravity ;

   

    if(keyIsDown(UP_ARROW)){
      this.y -= 5;
      this.yspeed *=-0.09;
      
    } 
    if(this.y>380){
      this.y=380;
      this.yspeed=0;
    }

  }


  show(){
    //fill(0,150);
    image(img,this.x,this.y,25,25);
  }
}

class Walls {

  hits(buble)  {
  
  if(buble.y<=this.y3 || buble.y>=this.y2){
   if(buble.x<this.x+10&&buble.x>this.x-10){
   this.hilight = true ;
     return true;
   
   }
   else{
     this.hilight=false;
     return false;
   }
  }
  }


 constructor(y2,y3){
   this.x=409 ;
   this.y2=random(200,400) ;
   this.y3=random(50,130);
   this.hilight = false ;
 }
 show(){
  stroke(0,150,0);
  if(this.hilight){
    stroke(100,0,0);
  }
  strokeWeight(15);
  line(this.x,400,this.x,this.y2);
  line(this.x,0,this.x,this.y3);
 }
 update(){
 this.x-- ;

 }





}

