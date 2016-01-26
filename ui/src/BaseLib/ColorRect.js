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
    this.mCanvas.mContext.fillStyle = this.mColor;
    this.mCanvas.mContext.fillRect( this.x, this.y , this.w , this.h );
}