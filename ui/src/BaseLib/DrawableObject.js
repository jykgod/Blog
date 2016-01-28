/**
 * Created by jiangyuke on 2016/1/23.
 */
DrawableObject = function()
{
    BaseObject.call(this);
    this.mAlpha = 1;
    this.mShadowMargin = 0;
    this.mOutLineMargin = 0;
    this.mColor = "#000000";
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
    //var tmpColor = this.mCanvas.mContext.fillStyle;
    var tmpColor = this.mColor;
    this.mColor = "#000000";
    this.mCanvas.mContext.fillStyle = "#000000";
    this.draw();
    this.mColor = tmpColor;
    //this.mCanvas.mContext.fillStyle = tmpColor;
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
    //var tmpColor = this.mCanvas.mContext.fillStyle;
    var tmpColor = this.mColor;
    this.mColor = "#000000";
    this.mCanvas.mContext.fillStyle = "#000000";
    this.draw();
    this.mColor = tmpColor;
    //this.mCanvas.mContext.fillStyle = tmpColor;
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

DrawableObject.prototype.setLevel = function(level)
{
    BaseObject.prototype.setLevel.call(this,level);
    if ( this.mCanvas == null || this.mCanvas == undefined)
        return;
    this.mCanvas.mDrawableManager.removeObject(this);
    this.mCanvas.mDrawableManager.addObject(this);
}

