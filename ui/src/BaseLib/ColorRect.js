/**
 * Created by jiangyuke on 2016/1/26.
 */
function ColorRect() {
    DrawableObject.call( this );
}
for(var i in DrawableObject.prototype)
{
    ColorRect.prototype[i] = DrawableObject.prototype[i];
}
ColorRect.prototype.create = function( canvas , color )
{
    DrawableObject.prototype.create.call( this , canvas );
    this.mColor = color;
}

ColorRect.prototype.draw = function( )
{
    var tempAlpha = this.mCanvas.mContext.globalAlpha;
    this.mCanvas.mContext.globalAlpha = this.mAlpha;
    this.mCanvas.mContext.fillStyle = this.mColor;
    var fatherPosition = this.getFatherPosition();
    this.mCanvas.mContext.fillRect( this.x + fatherPosition.x, this.y + fatherPosition.y, this.w , this.h );
    this.mCanvas.mContext.globalAlpha = tempAlpha;
}