let x;
let y;
let r;
let off;
let col = 61;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);
	colorMode(HSL);
}

function draw() {
	background(233, 0, 88);
	strokeWeight(0.5);
	noFill();
	push();
	translate(width/2, height/2);


	for (let j = 0; j < 100; j++) {
		stroke(132 + (j * 1), 90, 61);
		off = j * 2;

		beginShape();
		for (let i = 0; i < 360; i++) {
			r = map(noise(sin(i) * (frameCount/100)), 0, 1, 0 + off, 80 + off);
			x = r * cos(i) * sin(j);
			y = r * sin(i);
			vertex(x, y);
		}
		endShape(CLOSE);
	}
	pop();
}

//	r = map(noise(sin(i)+(frameCount/100)), 0, 1, 100, 300)
// this makes blob exterior evolve, but does not fold upon itself

//r = map(noise(sin(i)*(frameCount/100)), 0, 1, 100, 300)
//exterior folds in on itself in vertical direction

//r = map(noise(sin(i)*frameCount/100), 0, 1, 0+off, 100+off)
//exterior evolves as a flower, noise emerging from center 

//r = map(noise(sin(i)*frameCount/100), 0, 1, 0, 100+off)
//evolves with more noise around exterior