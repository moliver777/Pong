var Ball = function() {
	this.init();
}

Ball.prototype.init = function() {
	var ball = this;
	ball.id = new Date().getTime();
}

Ball.prototype.teardown = function() {
	var ball = this;
	if (ball.interval) clearInterval(ball.interval);
	ball.interval = null
	ball = null;
}
