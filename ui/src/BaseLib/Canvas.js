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
	this.interval = null ;
	this.x;
	this.y;
	this.w;
	this.h;
	this.z;
}
Canvas.prototype = {
	setPosition : function(x , y , w , h , zIndex)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.z = zIndex;
		this.canvas.width = w;
		this.canvas.height = h;
		this.canvas.style.left = x;
		this.canvas.style.top = y;
		this.canvas.style.zIndex = zIndex;
		this.canvas.style.position = "absolute";
	},
	createWithFatherName : function( fatherName )
	{
		var fatherNode = document.getElementById( fatherName );
		this.canvas = document.createElement('canvas');
		fatherNode.appendChild(this.canvas);
		this.setPosition( 0 , 0 , 1 , 1 , 0);
		this.mColliderManager = new ColliderManager();
		this.mDrawableManager = new DrawableObjectManager();
		this.mColliderManager.create( this );
		this.mDrawableManager.create( this );
		//var temp = this;
		//this.interval = setInterval(function(){temp.mDrawableManager.draw()},1000);
		this.mContext = this.canvas.getContext("2d");
	},
	createWithFatherNameAndPosition : function( fatherName , x , y , w , h , zIndex ) {
		var fatherNode = document.getElementById(fatherName);
		this.canvas = document.createElement('canvas');
		fatherNode.appendChild(this.canvas);
		this.setPosition(x, y, w, h , zIndex );
		this.mColliderManager = new ColliderManager();
		this.mDrawableManager = new DrawableObjectManager();
		this.mColliderManager.create( this );
		this.mDrawableManager.create( this );
		//var temp = this;
		//this.interval = setInterval(function(){temp.mDrawableManager.draw()},1000);
		this.mContext = this.canvas.getContext("2d");
	},
	setUpdateDeltaTime : function( time ){
		if(this.interval != null) {
			clearInterval(this.interval);
		}
		var temp = this;
		this.interval = setInterval(function(){temp.mDrawableManager.draw()},time);
	},
	update : function(){
		this.mDrawableManager.draw();
	},
	setVisible : function(show){
		if(show == true)
		{
			this.canvas.style.display = "block";
		}else
		{
			this.canvas.style.display = "none";
		}
	}
}