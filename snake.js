(function () {
	var elements =[];
function Snake(options){
	options = options || {};
	this.width = options.width || 10;
	this.height = options.height || 10;
	this.direction = options.direction || 'right';
	this.body = [
	  {x: 3, y: 2, color: 'red'},
      {x: 2, y: 2, color: 'blue'},
      {x: 1, y: 2, color: 'blue'}
	];
}
Snake.prototype.render = function (map) {
	remove();
	for (var i =0, len = this.body.length; i < len; i++){
		var object = this.body[i];
		var div = document.createElement('div');
		map.appendChild(div);
		elements.push(div);
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.top = object.y*this.height + 'px';
		div.style.left = object.x*this.width + 'px';
		div.style.backgroundColor = object.color;
		div.style.position = 'absolute';
	}
}
function remove (){
	for(var i = elements.length -1; i >= 0; i--){
	elements[i].parentNode.removeChild(elements[i]);
	// 删除数组元素
	elements.splice(i, 1);
	}
}
Snake.prototype.move = function(food, map){
	for(var i = this.body.length -1; i > 0; i--){
		this.body[i].x = this.body[i - 1].x;
		this.body[i].y = this.body[i - 1].y;
	}
	var head = this.body[0];
	switch(this.direction){
		case 'right':
			head.x += 1;
			break;
		case 'left':
			head.x -= 1;
			break;
		case 'top':
			head.y -= 1;
			break;
		case 'bottom':
			head.y += 1;
			break;
	}
	var headX = head.x*this.width;
	var headY = head.y*this.height;
	if(headX === food.x && headY === food.y){
		var last = this.body[this.body.length - 1];
		this.body.push({
			x : last.x,
			y : last.y,
			color : last.color
		})
		food.render(map);
	}
}
window.Snake = Snake;
})()
