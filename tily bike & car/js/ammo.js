class Ammo {
    constructor(x,y){
       var options = {
           restitution: 0.4,
           friction: 0.0,
           isStatic: true
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       this.image = loadImage("sprites/ammo.png");
       this.fuelImage = loadImage("sprites/fuel.jpg");
       this.trajectory =[];
       World.add(world, this.body);
   }
  
   display() {
      
      var pos = this.body.position;
        
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
       var position = [this.body.position.x, this.body.position.y];
       this.trajectory.push(position);
      }
     
  
     for(var i=0; i<this.trajectory.length; i++){
       image(this.fuelImage, this.trajectory[i][0], this.trajectory[i][1],10,10);
     }
   }
 }
  