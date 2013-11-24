var Controller = function() {
	this.init();
}

Controller.prototype.init = function() {
	var controller = this;
	window.onkeydown = function(e) {
		switch (e.keyCode) {
			case 37:
				controller.goLeft();
				e.preventDefault();
			break;
			case 39:
				controller.goRight();
				e.preventDefault();
			break;
		}
	}
}

Controller.prototype.goLeft = function() {
	if ($("span#controller").position().left > 2) {
		$("span#controller").css({left: $("span#controller").position().left-100});
	}
}

Controller.prototype.goRight = function() {
	if ($("span#controller").position().left < 402) {
		$("span#controller").css({left: $("span#controller").position().left+100});
	}
}
