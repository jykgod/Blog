/**
 * Created by jiangyuke on 2016/1/23.
 */
function Texture()
{
    DrawableObject.call( this );
    this.src = null;
    this.img = null;
    this.D
    this.drawType = 0;
}

for (var i in DrawableObject.prototype){
    Texture.prototype[i] = DrawableObject.prototype[i];
}

Texture.prototype.createWith2Factor = function( canvas , src )
{
    this.create(canvas);
    this.src = src;
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

Texture.prototype.drawWith = function()
{
    if ( this.src == null || this.canvas == null) return;
    var fatherPosition = this.getFatherPosition();
    var x = this.x + fatherPosition.x;
    var y = this.y + fatherPosition.y;
    this.canvas.mContext.drawImage(this.img , this.x, this.y , this.w , this.h );
}
Texture.prototype.draw = function()
{
    var tempAlpha = this.canvas.mContext.globalAlpha;
    this.canvas.mContext.globalAlpha = this.mAlpha;

    this.canvas.mContext.globalAlpha = tempAlpha;
}