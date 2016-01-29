function UIButton()
{
    BaseObject.call(this);
    this.colorRect = null;
    this.texture = null;
    this.tempShadowMargin = 0;
    this.label = null;
    this.collider = null;
    this.pressDown = false;
    this.refDeltaTime = 200;
    this.lastHitTime = new Date();
}

for(var i in BaseObject.prototype)
{
    UIButton.prototype[i] = BaseObject.prototype[i];
}

UIButton.prototype.createWithColorRect = function(canvas ,color , text)
{
    this.colorRect = new ColorRect();
    this.colorRect.setLevel(0);
    this.colorRect.create(canvas,color);

    this.label = new Label();
    this.label.setLevel(1);
    this.label.create(canvas,text);

    this.collider = new Collider();
    this.collider.create(this,0);
    var tmp = this;
    this.collider.onClick = function(x,y){tmp.onClick(x,y);}
    this.collider.onMouseDown = function(x,y){tmp.onMouseDown(x,y);}
    this.collider.onMouseUp = function(x,y){tmp.onMouseUp(x,y);}
    this.collider.onMouseMove = function(x,y){tmp.onMouseMove(x,y);}
}

UIButton.prototype.onClick = function(x,y){
    var time = new Date();
    if(this.refDeltaTime > time.getTime() - this.lastHitTime)
    {
        return;
    }
    this.lastHitTime = this.refDeltaTime;
};
UIButton.prototype.onMouseDown = function(x,y){
    this.pressDown = true;
    if(this.colorRect.mShadowMargin != 0)
    {
        this.colorRect.setPosition(this.colorRect.x + this.colorRect.mShadowMargin.x,this.colorRect.y + this.colorRect.mShadowMargin.y);
        this.tempShadowMargin = this.colorRect.mShadowMargin;
        this.colorRect.mShadowMargin = 0;
    }
};
UIButton.prototype.onMouseUp = function(x,y){
    if(this.pressDown == true)
    {
        UIButton.prototype.onClick();
    }
};
UIButton.prototype.onMouseMove = function(x,y){
};
UIButton.prototype.onRelease = function()
{
    this.pressDown = false;
    if(this.tempShadowMargin != 0)
    {
        this.colorRect.mShadowMargin = this.tempShadowMargin;
        this.tempShadowMargin = 0;
        this.colorRect.setPosition(this.colorRect.x - this.colorRect.mShadowMargin.x,this.colorRect.y - this.colorRect.mShadowMargin.y);
    }
}



