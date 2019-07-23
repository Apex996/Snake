// 自调用函数避免命名冲突
// window便于压缩js文件
// undefined老的浏览器版本中可能会发生改变
// 自调用函数一般来写都带上这两个实参
(function (window, undefined) {
var tools = {
	getRandom : function (min, max) {
		 return Math.floor(Math.random() * (max - min + 1)) + min;
	} 
}
var elements = [];
function Food(options) {
	// 创建食物对象
	options = options || {};
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.width = options.width || 10;
	this.height = options.height || 10;
	this.backgroundColor = options.backgroundColor || 'red';
}
Food.prototype.render = function(map){
	remove();
	this.x = tools.getRandom(0, map.offsetWidth/this.width-1)*this.width;
	this.y = tools.getRandom(0, map.offsetHeight/this.height-1)*this.height;
	var div = document.createElement('div');
	map.appendChild(div);
	elements.push(div);
	
	div.style.position = 'absolute';
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.left = this.x + 'px';
	div.style.top = this.y + 'px';
	div.style.backgroundColor = this.backgroundColor;
}
function remove() {
	for (var i = elements.length - 1; i >= 0; i--){
	// 删除div
	elements[i].parentNode.removeChild(elements[i]);
	// 删除数组元素
	elements.splice(i, 1);
	}
}
window.Food = Food;
}) (window, undefined)

