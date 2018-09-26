let paddle;
let ball;

let bricks = [];

var ballVelocity = 5;
var timesCleared = 0;
var completed = false;

function setup() {
  // put setup code here
  createCanvas(600,400);
  paddle = new Paddle(width/2-40, 350);
  ball = new Ball(width/2, 300);
  for (let i = 0; i < 8; i++) {
  	bricks[i] = [];
  	for (let j = 0; j < 4; j++) {
  		bricks[i][j] = new Brick(75 * i, 25 * j);
  	}
  }
}

function draw() {
  // put drawing code here
  completed = true;
  background(0);
  ball.act();
  paddle.act();
  for (let i = 0; i < bricks.length; i++) {
  	for(let j = 0; j < bricks[i].length; j++) {
  		bricks[i][j].act();
  	}
  }
  reset();
  fill(255);
  text(timesCleared, 585, 395);
}

function reset() {
	for (let i = 0; i < bricks.length; i++) {
  		for(let j = 0; j < bricks[i].length; j++) {
  			if(!bricks[i][j].hit) {
  				completed = false;
  			}
  		}
  	}
  	if (completed) {
  		timesCleared++;
  		ballVelocity += 0.5;
  		setup();
  	}
}