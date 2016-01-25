/**
 * Created by Administrator on 2016/1/23.
 */
function Collider()
{
    BaseObject.call(this);
}

for (var i in BaseObject.prototype){
    Collider.prototype[i] = Collider.prototype[i];
}
/**
 * create function
 * @param father the father node , also extend from the BaseObject
 */
Collider.prototype.create = function( father , level )
{
    BaseObject.prototype.create.call(this , father.mCanvas );
    this.rect = new Rect( 0 , 0 , father.w , father.h );
    this.mLevel = level;
    this.mCanvas.mColliderManager.addCollider( this );
}

Collider.prototype.onClick = function(){};
Collider.prototype.onMouseDown = function(){};
Collider.prototype.onMouseUp = function(){};
Collider.prototype.onMouseMove = function(){};

