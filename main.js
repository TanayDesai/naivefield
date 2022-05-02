
var particles = [];
var indicator = [];
const num = 600;
let posx,posy;
let state;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// Creating Particles
	for(let i = 0;i<num;i++) {
		posx = random(windowWidth);
		posy = random(windowHeight);
		let pvector = new Particle(posx,posy)
		particles.push(pvector);
	}
	// Creating Indicator
	for(let v = 0;v<1;v++) {
		let ind = new Indicator("Red")
		indicator.push(ind);
	}
	
	// Speech State
	state = "Closed"
}

function draw(){
	background(0,8); // Alpha is for trails

	// Displaying Particle
	for (let t=0;t<particles.length;t++){
		//particles[t].show()
	    particles[t].limit()
		particles[t].movement()
		particles[t].isOffScreen()
	}
	// Displaying Indicator
	for (let c=0;c<indicator.length;c++){
		indicator[c].show()
	}
}

function mouseClicked(){
	if(state == "Closed"){
		state = "Open"
		Transform(state)
	}
	else if(state == "Open"){
		state = "Closed"
		speechRecognition.stop();
	}

}
function mousePressed(){
	if(state == "Closed"){
		state = "Open"
		Transform(state)
	}
	else if(state == "Open"){
		state = "Closed"
		speechRecognition.stop();
	}

}