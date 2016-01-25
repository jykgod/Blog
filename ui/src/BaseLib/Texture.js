/**
 * Created by jiangyuke on 2016/1/23.
 */
function Texture()
{
    DrawableObject.call( this );
    this.src = null;
    this.img = null;
    this.clipRect = null;
}

for (var i in DrawableObject.prototype){
    Texture.prototype[i] = DrawableObject.prototype[i];
}

Texture.prototype.createWith2Factor = function( canvas , src ,clipRect)
{
    this.create(canvas);
    this.src = src;
    this.clipRect = clipRect;
}

Texture.prototype.loadTexture = function()
{
    this.img = new Image();
    this.img.src = this.src;
}

Texture.prototype.fixSizeAsTextureSize = function()
{
    if(this.img == null) return;
    this.setSize(this.img.width,this.img.height);
}

Texture.prototype.drawTexture = function()
{
    if ( this.src == null || this.canvas == null) return;
    var fatherPosition = this.getFatherPosition();
    var x = this.x + fatherPosition.x;
    var y = this.y + fatherPosition.y;
    if(this.clipRect == null) {
        this.canvas.mContext.drawImage(this.img, x, y, this.w, this.h);
    }else {
        this.canvas.mContext.drawImage(this.img, this.clipRect.x, this.clipRect.y, this.clipRect.w, this.clipRect.h, x, y, this.w, this.h);
    }
}
Texture.prototype.draw = function()
{
    var tempAlpha = this.canvas.mContext.globalAlpha;
    this.canvas.mContext.globalAlpha = this.mAlpha;
    this.drawTexture();
    this.canvas.mContext.globalAlpha = tempAlpha;
}