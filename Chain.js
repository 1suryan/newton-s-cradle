class Chain{
    constructor(body1, body2, d1){
        this.d1 = d1;
    
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.d1,y:0},
            
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    
    }
  
   


    



    display(){
     


        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        
        line(pointA.x, pointA.y, pointB.x + this.d1, pointB.y);
          
       
       
       
        
    }
    

}