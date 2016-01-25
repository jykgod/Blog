/**
 * Created by jiangyuke on 2016/1/23.
 */
DrawableObject = function()
{
    BaseObject.call(this);
    this.mAlpha = 1;
    this.mShadowMargin = 0;
    this.mOutLineMargin = 0;
}

for(var i in BaseObject.prototype)
{
    DrawableObject.prototype[i] = BaseObject.prototype[i];
}

DrawableObject.prototype.draw = function() {}
DrawableObject.prototype.drawShadow = function() {
    if(this.mShadowMargin == 0 || this.mOutLineMargin != 0)
        return;
    this.x += this.mShadowMargin;
    this.y += this.mShadowMargin;
    var tmpColor = this.mCanvas.mContext.fillStyle;
    this.mCanvas.mContext.fillStyle = "#000000";
    this.draw();
    this.mCanvas.mContext.fillStyle = tmpColor;
    this.x -= this.mShadowMargin;
    this.y -= this.mShadowMargin;
}

DrawableObject.prototype.drawOutLine = function() {
    if(this.mShadowMargin != 0 || this.mOutLineMargin == 0)
        return;
    this.x -= this.mOutLineMargin;
    this.y -= this.mOutLineMargin;
    this.w += 2*this.mOutLineMargin;
    this.h += 2*this.mOutLineMargin;
    var tmpColor = this.mCanvas.mContext.fillStyle;
    this.mCanvas.mContext.fillStyle = "#000000";
    this.draw();
    this.mCanvas.mContext.fillStyle = tmpColor;
    this.x += this.mOutLineMargin;
    this.y += this.mOutLineMargin;
    this.w -= 2*this.mOutLineMargin;
    this.h -= 2*this.mOutLineMargin;
}
DrawableObject.prototype.create = function(canvas)
{
    BaseObject.prototype.create.call(this,canvas);
    this.mCanvas.mDrawableManager.addObject(this);
}

