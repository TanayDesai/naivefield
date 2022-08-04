function Particle(x,y) {
    this.px = x;
    this.py = y;
    this.d = random(3,5) 
    this.body = createVector(this.px ,this.py)
    // You can play around with these 2 values
    this.scale = 0.0059 
    this.speed = 1

    this.show = function() {
        stroke(190)
        ellipse(this.px,this.py,this.d ,this.d);
        //point(this.px, this.py)
    }

    this.movement = function(){
        this.n = noise(this.px * this.scale,this.py * this.scale);
        this.angle = TAU * this.n;
        this.px += cos(this.angle) * this.speed;
        this.py += sin(this.angle) * this.speed;
    }

    this.isOffScreen = function() {
        if(this.px <=0 || this.px >=windowWidth || this.py <=0 || this.py >= windowHeight){
            this.px = random(windowWidth);
            this.py = random(windowHeight)
        }
    }

    this.limit = function() {
        if (dist(windowWidth / 2,windowHeight / 2, this.px,this.py) < (300)) {
            this.show()
        }
    }

}