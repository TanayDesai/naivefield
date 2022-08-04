
var particles = [];
var indicator = [];
let ram = navigator.deviceMemory

const num = 2000 / (ram * 0.2);
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

	setTimeout(magic,3000);
	
}

function draw(){
	background(0,8); // Alpha is for trails

	// Displaying Particle
	for (let t=0;t<particles.length;t++){
		// particles[t].show()
	    particles[t].limit()
		particles[t].movement()
		particles[t].isOffScreen()
	}
	// Displaying Indicator
	for (let c=0;c<indicator.length;c++){
		indicator[c].show()
	}
}

// function mouseClicked(){
// 	if(state == "Closed"){
// 		state = "Open"
// 		Transform(state)
// 	}
// 	else if(state == "Open"){
// 		state = "Closed"
// 		speechRecognition.stop();
// 	}

// }

function magic(){
	noiseSeed(millis() * 100)
	setTimeout(magic,random(1000,3500))

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