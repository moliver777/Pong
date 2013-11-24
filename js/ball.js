var Ball = function() {
	this.init();
}

Ball.prototype.init = function() {
	var ball = this;
	ball.id = new Date().getTime();
	ball.x = 0;
	ball.xOffset = 4;
	ball.xDirection = true;
	ball.y = 0;
	ball.yOffset = 4;
	ball.yDirection = true;
	$("div#scene").append("<span id='"+ball.id+"' class='ball'>&nbsp;</span");
	ball.interval = setInterval(function() {
		ball.updatePosition();
		ball.detectCollision();
	}, 10);
}

Ball.prototype.updatePosition = function() {
	var ball = this;
	ball.xDirection ? ball.x+=ball.xOffset : ball.x-=ball.xOffset;
	ball.yDirection ? ball.y+=ball.yOffset : ball.y-=ball.yOffset;
	$("span#"+ball.id).css({top: parseInt(ball.y), left: parseInt(ball.x)});
}

Ball.prototype.detectCollision = function() {
	var ball = this;
	if (parseInt(ball.x) <= 0) {
		ball.xDirection = true;
		ball.xOffset = ball.randomNumber();
	} else if (parseInt(ball.x) >= 500) {
		ball.xDirection = false;
		ball.xOffset = ball.randomNumber();
	}
	if (parseInt(ball.y) <= 0) {
		ball.yDirection = true;
		ball.yOffset = ball.randomNumber();
	} else if (parseInt(ball.y) >= 500) {
		if (ball.reflected()) {
			ball.yDirection = false;
			ball.yOffset = ball.randomNumber();
		} else {
			window.pong.reset();
		}
	}
}

Ball.prototype.reflected = function() {
	var ball = this;
	return (parseInt(ball.x) >= $("span#controller").position().left-7 && parseInt(ball.x) <= $("span#controller").position().left+107);
}

Ball.prototype.randomNumber = function() {
	return Math.floor(Math.random()*4)+4;
}

Ball.prototype.teardown = function() {
	var ball = this;
	$("span#"+ball.id).remove();
	if (ball.interval) clearInterval(ball.interval);
	ball.id = null;
	ball.interval = null;
	ball = null;
}
