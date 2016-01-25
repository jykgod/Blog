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
/**
 * HIT:canvas means the canvas which in html5
 * mCanvas means this class;
 * @constructor
 */
function Canvas(){
	this.canvas = null;
	this.mColliderManager = null;
	this.mDrawableManager = null;
	this.mContext = null;
}
Canvas.prototype = {
	setPosition : function(x , y , w , h , level)
	{
		this.canvas.width = w;
		this.canvas.height = h;
		this.canvas.style.left = x;
		this.canvas.style.top = y;
		this.canvas.style.zIndex = level;
	},
	createWithFatherName : function( fatherName )
	{
		var fatherNode = document.getElementById( fatherName );
		this.canvas = document.createElement('canvas');
		fatherNode.appendChild(this.canvas);
		this.setPosition( 0 , 0 , 1 , 1 , 1);
		this.mColliderManager = new ColliderManager();
		this.mDrawableManager = new DrawableObjectManager();
		this.mColliderManager.create( this );
		this.mDrawableManager.create( this );
		var temp = this;
		setInterval(function(){temp.mDrawableManager.draw()},60);
		this.mContext = this.canvas.getContext("2d");
	},
	createWithFatherNameAndPosition : function( fatherName , x , y , w , h , level ) {
		var fatherNode = document.getElementById(fatherName);
		this.canvas = document.createElement('canvas');
		fatherNode.appendChild(this.canvas);
		this.setPosition(x, y, w, h , level );
		this.mColliderManager = new ColliderManager();
		this.mDrawableManager = new DrawableObjectManager();
		this.mColliderManager.create( this );
		this.mDrawableManager.create( this );
		var temp = this;
		setInterval(function(){temp.mDrawableManager.draw()},60);
		this.mContext = this.canvas.getContext("2d");
	}
}