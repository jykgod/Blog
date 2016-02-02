/**
 * Created by Administrator on 2016/1/23.
 */
function Collider()
{
    BaseObject.call(this);
}

for (var i in BaseObject.prototype){
    Collider.prototype[i] = BaseObject.prototype[i];
}
/**
 * create function
 * @param father the father node , also extend from the BaseObject
 */
Collider.prototype.create = function( father , level )
{
    BaseObject.prototype.create.call(this , father.mCanvas );
    this.mRect = new Rect( 0 , 0 , father.w , father.h );
    this.mLevel = level;
    this.mCanvas.mColliderManager.addCollider( this );
    this.onClick = function (x, y) {
        father.onClick(x, y);
    }
    this.onMouseDown = function (x, y) {
        if (father.onPressed != undefined) father.onPressed = true;
        father.onMouseDown(x, y);
    }
    this.onMouseUp = function (x, y) {
        father.onMouseUp(x, y);
    }
    this.onMouseMove = function (x, y) {
        father.onMouseMove(x, y);
    }
    this.onRelease = function (x, y) {
        if (father.onPressed != undefined) father.onPressed = false;
        father.onRelease(x, y);
    }
}

Collider.prototype.setLevel = function (level) {
    BaseObject.prototype.setLevel.call(this, level);
    if (this.mCanvas == null || this.mCanvas == undefined)
        return;
    this.mCanvas.mColliderManager.removeObject(this);
    this.mCanvas.mColliderManager.addObject(this);
}


Collider.prototype.onClick = function(x,y){};
Collider.prototype.onMouseDown = function(x,y){};
Collider.prototype.onMouseUp = function(x,y){};
Collider.prototype.onMouseMove = function(x,y){};
Collider.prototype.onRelease = function(x,y){};
