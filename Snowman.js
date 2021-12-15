class Snowman{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':1,
            'density':2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 300;
        this.height = 350;
        this.image = loadImage("snowman.png");
      
       
        World.add(world, this.body);
      }
      display(){
       
    
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
     
}