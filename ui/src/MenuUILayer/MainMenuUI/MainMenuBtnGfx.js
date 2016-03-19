/**
 * Created by Administrator on 2016/1/30.
 */
function MainMenuBtnGfx(btn)
{
    DrawableObject.call(this);
    this.mButton = btn;
    this.mTime = 0;
    this.mPointOn = false;
    var temp = this;
    btn.onMouseMove = function(x,y)
    {
        temp.mPointOn = true;
    }
    btn.onMouseMoveOut = function(x,y)
    {
        temp.mTime = 0;
        temp.mPointOn = false;
    }
}

for(var i in DrawableObject.prototype)
{
    MainMenuBtnGfx.prototype[i] = DrawableObject.prototype[i];
}

MainMenuBtnGfx.prototype.create = function()
{
    DrawableObject.prototype.create.call( this , this.mButton.mCanvas );
    this.setSize(this.mButton.w,this.mButton.h);
    this.setLevel(10);
}

MainMenuBtnGfx.prototype.draw = function( )
{
    var pos = this.getFatherPosition();
    if(this.mButton.onPressed)
    {
        pos.x = pos.x + this.mButton.tempShadowMargin;
        pos.y = pos.y + this.mButton.tempShadowMargin;
    }
    this.mCanvas.mContext.fillStyle = this.mButton.mColorRect.mColor;
    var tempAlpha = this.mCanvas.mContext.globalAlpha;
    this.mCanvas.mContext.globalAlpha= 1.0;
    this.mCanvas.mContext.fillRect(pos.x,pos.y,this.w,10);
    if ( this.mPointOn )
    {
        //console.log("x:"+pos.x + "y:"+pos.y);
        if(this.mTime < 2)
        this.mTime = this.mTime + 1;
        var gradient=this.mCanvas.mContext.createLinearGradient(pos.x+this.w/2,pos.y+this.h,pos.x+this.w/2,pos.y+this.h+this.mTime*25);
        this.mCanvas.mContext.globalAlpha= 0.8;
        gradient.addColorStop(0,this.mButton.mColorRect.mColor);
        gradient.addColorStop(1,'rgba(255,255,255,0)');
        this.mCanvas.mContext.fillStyle=gradient;
        this.mCanvas.mContext.fillRect(pos.x,pos.y+this.h,this.w,this.mTime*25);
    }
    this.mCanvas.mContext.globalAlpha = tempAlpha;
}