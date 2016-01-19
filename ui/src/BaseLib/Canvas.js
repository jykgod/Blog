//使用html的canvas进行构造
// function Canvas(canvas){
//     this.canvas  = canvas;
//     if(canvas == null) return ;
//     var bbox = canvas.getBoundingClientRect();
//     this.x = bbox.left * (canvas.width / bbox.width);
//     this.y = bbox.top * (canvas.height / bbox.height);
//     this.w = canvas.width;
//     this.h = canvas.height;
// }
//2016.1.19	尝试把canvas和panel定义分开？
function Canvas(){
	this.x = 0;
	this.y = 0;
	this.w = 1;
	this.h = 1;
	this.canvas;
}
Canvas.prototype = {
	createWithFatherName : function(fatherName)
	{
		var fatherNode = document.getElementById(fatherName);
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.w;
		this.canvas.height = this.h;
		this.canvas.x = this.x;
		this.canvas.y = this.y;
	}
}