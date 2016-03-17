/**
 * Created by jiangyuke on 2016/1/23.
 */
function Texture()
{
    DrawableObject.call( this );
    this.src = null;
    this.img = null;
    this.imgWidth = 0;
    this.imgHeght = 0;
    this.clipRect = null;
    this.interval = null;
}

for (var i in DrawableObject.prototype){
    Texture.prototype[i] = DrawableObject.prototype[i];
}

Texture.prototype.create = function( canvas , src ,clipRect)
{
    DrawableObject.prototype.create.call(this,canvas);
    this.src = src;
    this.clipRect = clipRect;
}

Texture.prototype.loadTexture = function()
{
    this.img = new Image();
    this.img.src = this.src;
}
Texture.prototype.waitForLoad = function(cmd)
{
    if(this.img == null || this.img.width == 0 || this.img.height == 0) return;
    cmd();
    clearInterval( this.interval );
}

Texture.prototype.doAfterLoad = function(cmd)
{
    var temp = this;
    this.interval = setInterval(function(){temp.waitForLoad(cmd);},100);
}

Texture.prototype.fixSizeAsTextureSize = function()
{
    var temp = this;
    this.doAfterLoad(function(){
            temp.setSize(temp.img.width,temp.img.height)
    });
}

Texture.prototype.drawTexture = function()
{
    if ( this.img == null || this.mCanvas == null) return;
    var fatherPosition = this.getFatherPosition();
    var x = this.x + fatherPosition.x;
    var y = this.y + fatherPosition.y;
    if(this.clipRect == null) {
        //alert("x:"+x+",y:"+y+",w:"+this.w+",h:"+this.h);
        this.mCanvas.mContext.drawImage(this.img, x, y, this.w, this.h);
    }else {
        this.mCanvas.mContext.drawImage(this.img, this.clipRect.x, this.clipRect.y, this.clipRect.w, this.clipRect.h, x, y, this.w, this.h);
    }
}
Texture.prototype.draw = function()
{
    var tempAlpha = this.mCanvas.mContext.globalAlpha;
    this.mCanvas.mContext.globalAlpha = this.mAlpha;
    this.drawTexture();
    this.mCanvas.mContext.globalAlpha = tempAlpha;
}
Texture.prototype.drawOutLine = function()
{
    return;
}
Texture.prototype.drawShadow = function()
{
    if( this.mShadowMargin == 0 || this.img == null || this.mCanvas == null)
        return;
    var fatherPosition = this.getFatherPosition();
    //var tmpColor = this.mCanvas.mContext.fillStyle;
    this.mCanvas.mContext.fillStyle = "#000000";
    this.mCanvas.mContext.fillRect( this.x + fatherPosition.x + this.mShadowMargin,this.y + fatherPosition.y + this.mShadowMargin ,this.w ,this.h );
    //this.mCanvas.mContext.fillStyle = tmpColor;
}
