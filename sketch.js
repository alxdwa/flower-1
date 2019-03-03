let x;
let y;
let r;
let off;
// let gifLength = 360;
// let canvas;


function setup() {
	// var p5Canvas = 
	createCanvas(600, 600);
	// canvas = p5Canvas.canvas;

	// capturer.start();

	angleMode(DEGREES);
	colorMode(HSL);
}

function draw() {
	background(233, 0, 88);
	strokeWeight(0.5);
	noFill();
	push();
	translate(width/2, height/2);

	for (let j = 0; j < 100; j += 1) {
		stroke(132 + j, 90, 61);
		off = j * 2;

		beginShape();
		for (let i = 0; i < 360; i++) {
			r = map(noise(sin(i) * (frameCount/20)), 0, 1, 0 + off, 80 + off);
			x = r * cos(i) * sin(j);
			y = r * sin(i);
			vertex(x, y);
		}
		endShape(CLOSE);
	}
	pop();

	// if (frameCount < gifLength) {
	// 		capturer.capture(canvas);
	// } else if (frameCount === gifLength) {
	// 		capturer.stop();
	// 		capturer.save();
	// }
}

//	r = map(noise(sin(i)+(frameCount/100)), 0, 1, 100, 300)
//this makes blob exterior evolve, but it does not fold upon itself

//r = map(noise(sin(i)*(frameCount/100)), 0, 1, 100, 300)
//exterior folds in on itself in vertical direction

//r = map(noise(sin(i)*frameCount/100), 0, 1, 0+off, 100+off)
//exterior evolves as a flower, noise emerging from center 

//r = map(noise(sin(i)*frameCount/100), 0, 1, 0, 100+off)
//as above, but evolves with more noise around exterior