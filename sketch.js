let x;
let y;
let r;
let off;

function setup() {
	createCanvas(600, 700);
	angleMode(DEGREES);
}

function draw() {
	background(233);
	strokeWeight(0.5);
	noFill();
	push();
	translate(width/2, height/2);
	stroke(0, 0, 255);

	for (let j = 0; j < 100; j++) {
		off = j*2

		beginShape();
		for (let i = 0; i < 360; i++) {
			r = map(noise(sin(i)+frameCount/100), 0, 1, 100, 200)
			x = r * cos(i) * sin(j);
			y = r * sin(i);
			vertex(x,y);
		}
		endShape(CLOSE);
	}
	pop();
}