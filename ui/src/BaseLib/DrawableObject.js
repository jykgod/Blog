/**
 * Created by jiangyuke on 2016/1/23.
 */
DrawableObject = function()
{
    BaseObject.call(this);
    this.mAlpha = 1;
}

for(var i in BaseObject.prototype)
{
    DrawableObject.prototype[i] = BaseObject.prototype[i];
}

DrawableObject.prototype.draw = function() {}
DrawableObject.prototype.create = function(canvas)
{
    this.mCanvas = canvas;
    this.mCanvas.mDrawableManager.addObject(this);
}

