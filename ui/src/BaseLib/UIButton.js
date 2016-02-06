function UIButton()
{
    BaseObject.call(this);
    this.colorRect = null;
    this.texture = null;
    this.tempShadowMargin = 0;
    this.label = null;
    this.collider = null;
    this.onPressed = false;
    this.refDeltaTime = 200;
    this.lastHitTime = new Date();
    this.mShadowMargin = 0;
}

for(var i in BaseObject.prototype)
{
    UIButton.prototype[i] = BaseObject.prototype[i];
}

UIButton.prototype.setSize = function(w,h)
{
    BaseObject.prototype.setSize.call(this,w,h);
    if(this.colorRect != null)
        this.colorRect.setSize(w,h);
    if(this.texture != null)
        this.texture.setSize(w,h);
    if(this.collider != null)
        this.collider.setSize(w,h);
    if(this.label != null)
        this.label.setPosition(this.w / 2,this.h / 2);
}

UIButton.prototype.createWithColorRect = function(canvas ,color , text , font)
{
    BaseObject.prototype.create.call(this,canvas);
    this.colorRect = new ColorRect();
    this.colorRect.create(canvas,color);
    this.colorRect.setLevel(0);

    this.label = new Label();
    this.label.create(canvas,text,font);
    this.label.setLevel(1);

    this.collider = new Collider();
    this.collider.create(this,0);
    var tmp = this;
    this.collider.onClick = function(x,y){tmp.preOnClick(x,y);}
    this.collider.onMouseDown = function(x,y){tmp.preOnMouseDown(x,y);}
    this.collider.onMouseUp = function(x,y){tmp.preOnMouseUp(x,y);}
    this.collider.onMouseMove = function(x,y){tmp.preOnMouseMove(x,y);}
    this.collider.onRelease = function(x,y){tmp.preOnRelease(x,y);}

    this.addComponent(this.colorRect);
    this.addComponent(this.label);
    this.addComponent(this.collider);
}

UIButton.prototype.createWithTexture = function(canvas ,src ,clipRect , text,font)
{
    BaseObject.prototype.create.call(this,canvas);
    this.texture = new Texture();
    this.texture.create(canvas,src,clipRect);
    this.texture.setLevel(0);

    this.label = new Label();
    this.label.create(canvas,text,font);
    this.label.setLevel(1);

    this.collider = new Collider();
    this.collider.create(this,0);
    var tmp = this;
    this.collider.onClick = function(x,y){tmp.preOnClick(x,y);}
    this.collider.onMouseDown = function(x,y){tmp.preOnMouseDown(x,y);}
    this.collider.onMouseUp = function(x,y){tmp.preOnMouseUp(x,y);}
    this.collider.onMouseMove = function(x,y){tmp.preOnMouseMove(x,y);}
    this.collider.onRelease = function(x,y){tmp.preOnRelease(x,y);}

    this.addComponent(this.texture);
    this.addComponent(this.label);
    this.addComponent(this.collider);
}

UIButton.prototype.preOnClick = function(x,y){
    var time = new Date();
    console.log("click");
    if(this.refDeltaTime > time.getTime() - this.lastHitTime)
    {
        return;
    }
    console.log("click2");
    this.lastHitTime = this.refDeltaTime;
    this.onClick(x,y);
};
UIButton.prototype.preOnMouseDown = function(x,y){
    this.onPressed = true;
    console.log("down");
    if(this.mShadowMargin != 0)
    {
        if(this.colorRect != null)
            this.colorRect.setPosition(this.colorRect.x + this.mShadowMargin, this.colorRect.y + this.mShadowMargin);
        if(this.texture != null)
            this.texture.setPosition(this.texture.x + this.mShadowMargin,this.texture.y + this.mShadowMargin);
        if(this.label != null)
            this.label.setPosition(this.label.x + this.mShadowMargin,this.label.y + this.mShadowMargin);
        this.tempShadowMargin = this.mShadowMargin;
        this.setShadowMargin(0);
    }
    this.onMouseDown(x,y);
};
UIButton.prototype.preOnMouseUp = function(x,y){
    console.log("up");
    if(this.onPressed == true)
    {
        this.preOnClick();
    }
    this.onMouseUp(x,y);
};
UIButton.prototype.preOnMouseMove = function(x,y){
    this.onMouseMove(x,y);
};
UIButton.prototype.preOnRelease = function(x,y)
{
    console.log("release");
    this.onPressed = false;
    if(this.tempShadowMargin != 0)
    {
        this.setShadowMargin(this.tempShadowMargin);
        this.tempShadowMargin = 0;
        if(this.colorRect != null)
            this.colorRect.setPosition(this.colorRect.x - this.mShadowMargin,this.colorRect.y - this.mShadowMargin);
        if(this.texture != null)
            this.texture.setPosition(this.texture.x - this.mShadowMargin,this.texture.y - this.mShadowMargin);
        if(this.label != null)
            this.label.setPosition(this.label.x - this.mShadowMargin,this.label.y - this.mShadowMargin);
    }
    this.onRelease(x,y);
}

UIButton.prototype.setShadowMargin = function(margin)
{
    this.mShadowMargin = margin;
    if(this.colorRect != null)
        this.colorRect.mShadowMargin = margin;
    if(this.texture != null)
        this.texture.mShadowMargin = margin;
}

UIButton.prototype.onClick = function(x,y){};
UIButton.prototype.onMouseDown = function(x,y){};
UIButton.prototype.onMouseUp = function(x,y){};
UIButton.prototype.onMouseMove = function(x,y){};
UIButton.prototype.onRelease = function(x,y){};


