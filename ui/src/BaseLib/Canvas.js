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
	this.canvas = null;
	this.colliderManager = null;
}
Canvas.prototype = {
	setPosition : function(x , y , w , h)
	{
		this.canvas.width = w;
		this.canvas.height = h;
		this.canvas.x = x;
		this.canvas.y = y;
	},
	createWithFatherName : function( fatherName )
	{
		var fatherNode = document.getElementById( fatherName );
		this.canvas = document.createElement('canvas');
		this.setPosition( 0 , 0 , 1 , 1 );
		this.colliderManager = new ColliderManager();
	},
	createWithFatherNameAndPosition : function( fatherName , x , y , w , h )
	{
		var fatherNode = document.getElementById(fatherName);
		this.canvas = document.createElement('canvas');
		this.setPosition( x , y , w , h );
		this.colliderManager = new ColliderManager();
	}
}