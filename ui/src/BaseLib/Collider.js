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
    this.mFather = father;
    father.onPressed = false;
    this.mRect = new Rect( 0 , 0 , father.w , father.h );
    this.mLevel = level;
    this.mCanvas.mColliderManager.addCollider( this );
}

Collider.prototype.setLevel = function (level) {
    BaseObject.prototype.setLevel.call(this, level);
    if (this.mCanvas == null || this.mCanvas == undefined)
        return;
    this.mCanvas.mColliderManager.removeCollider(this);
    this.mCanvas.mColliderManager.addCollider(this);
}


Collider.prototype.onClick = function (x, y) {
    if(this.mFather.onClick != undefined)
        this.mFather.onClick(x, y);
}
Collider.prototype.onMouseDown = function (x, y) {
    this.mFather.onPressed = true;
    if(this.mFather.onMouseDown != undefined)
        this.mFather.onMouseDown(x, y);
}
Collider.prototype.onMouseUp = function (x, y) {
    if(this.mFather.onClick != undefined && this.mFather.onPressed == true)
        this.mFather.onClick(x, y);
    if(this.mFather.onMouseUp != undefined)
        this.mFather.onMouseUp(x, y);
}
Collider.prototype.onMouseMove = function (x, y) {
    if(this.mFather.onMouseMove != undefined)
        this.mFather.onMouseMove(x, y);
}
Collider.prototype.onRelease = function (x, y) {
    this.mFather.onPressed = false;
    if(this.mFather.onRelease != undefined)
        this.mFather.onRelease(x, y);
}
