class Bob{
    constructor(x,y){

       var options = {
           isStatic: false
       }

      this.body = Bodies.circle(x,y,40, options);
      this.image = loadImage("goldBallFinal.png");
      
      World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        /*ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y, 80,80);
        */
       
       image(this.image,pos.x-100,pos.y-80, 200);
       
      
    }
}