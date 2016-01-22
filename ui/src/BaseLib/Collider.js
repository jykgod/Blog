/**
 * Created by Administrator on 2016/1/23.
 */
function Collider()
{
    BaseObject.call(this);
    this.mPointerOn = false;
}

for (var i in BaseObject.prototype){
    Collider.prototype[i] = Collider.prototype[i];
}

Collider.prototype.create = function(canvas)
{
    this.mCanvas = canvas;

}

Collider.prototype.onClick = function(){};
Collider.prototype.onMouseDown = function(){};
Collider.prototype.onMouseUp = function(){};
Collider.prototype.onMouseMove = function(){};

