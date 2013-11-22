var PongApp = function() {
	this.init();
}

PongApp.prototype.init = function() {
	var app = this;
	app.scene = new Scene();
	app.controller = new Controller();
	app.balls = [];
	app.running = false;
	app.interval = null;
	app.started_at = null;
	app.high_score = 0;

	$("button#start").click(function() {
		app.start();
	});

	$("button#reset").click(function() {
		app.reset();
	});
}

PongApp.prototype.start = function() {
	var app = this;

	app.running = true;
	app.started_at = new Date();
	app.balls.push(new Ball());
	app.interval = setInterval(function() {
		app.balls.push(new Ball());
	}, 20000);
}

PongApp.prototype.reset = function () {
	var app = this;

	if (app.running) {
		if (app.interval) clearInterval(app.interval);
		$.each(app.balls, function(i,ball) {
			ball.teardown();
		});
		app.balls = [];
		app.running = false;
		var score = Math.floor(new Date().getTime()/1000)-Math.floor(app.started_at.getTime()/1000);
		if (score > app.high_score) app.high_score = score;
		$("div#high-score span").html(app.high_score);
	}
}
