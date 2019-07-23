(function (){
	var that;
function Game(map){
	this.food = new Food();
	this.snake = new Snake();
	this.map = map;
	that = this;
}
Game.prototype.start = function (){
	this.food.render(this.map);
	this.snake.render(this.map);
	runSnake();
	bindKey();

}
function bindKey(){
	document.onkeydown = function(e){
		switch(e.keyCode){
			case 37:
				that.snake.direction = 'left';
				break;
			case 38:
				that.snake.direction = 'top';
				break;
			case 39:
				that.snake.direction = 'right';
				break;
			case 40:
				that.snake.direction = 'bottom';
				break;
		}
	}
}
function runSnake(){
	var timerId = setInterval(function(){
		that.snake.move(that.food, that.map);
		that.snake.render(map);
		var headX = that.snake.body[0].x;
		var headY = that.snake.body[0].y;
		var maxX = that.map.offsetWidth/that.snake.width;
		var maxY = that.map.offsetHeight/that.snake.height;
		if(headX <0 || headX > maxX - 1){
			alert('游戏结束');
			clearInterval(timerId);
		}
		if(headY <0 || headY > maxY - 1){
			alert('游戏结束');
			clearInterval(timerId);
		}
	},150)
}
window.Game = Game;
})()
