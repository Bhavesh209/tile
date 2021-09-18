class Futurecar {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.4,
            friction: 0.0,
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/racing11.png");
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        imageMode(CENTER);

        if (this.body.speed < 3) {
            image(this.image, pos.x, pos.y, this.width, this.height);
        }
        else {

            World.remove(world, this.body);


            push();


            this.visiblity = this.visiblity - 5;



            tint(255, this.visiblity);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }


    }


}