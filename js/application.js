var PongApp = function() {
	this.init();
}

PongApp.prototype.init = function() {
	var app = this;

	$("button#start").click(function() {
		app.start();
	});

	$("button#reset").click(function() {
		app.reset();
	});
}

PongApp.prototype.start = function() {
	var app = this;
}

PongApp.prototype.reset = function () {
	var app = this;
}
