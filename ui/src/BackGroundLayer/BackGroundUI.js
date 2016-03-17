function BackGroundUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"BackGroundUI");
    this.texture;
    this.colorRect;
    this.setTexture = function(url)
    {
        this.texture.src = url;
        this.texture.loadTexture();
        var temp = this;
        this.texture.doAfterLoad(function(){
            temp.mCanvas.update();
        });
    }
}

for(var i in UIBase.prototype) {
    BackGroundUI.prototype[i] = UIBase.prototype[i];
}

BackGroundUI.prototype.onResize = function()
{
    this.mCanvas.setPosition(0,0,window.innerWidth,window.innerHeight,-100);

    this.texture.setSize(window.innerWidth,window.innerHeight);

    //this.colorRect.setPosition(0.05 * window.innerWidth,0.15 * window.innerHeight);
    this.colorRect.setSize(window.innerWidth,window.innerHeight - 150);

    this.mCanvas.update();
}

BackGroundUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);

    this.texture = new Texture();
    this.texture.setSize(window.innerWidth,window.innerHeight);
    this.texture.create(this.mCanvas,"ui/asset/texture/2.jpg");
    this.texture.loadTexture();
    var temp = this;
    this.texture.doAfterLoad(function(){
        temp.mCanvas.update();
    });

    this.colorRect = new ColorRect();
    this.colorRect.create(this.mCanvas,"#000000");
    this.colorRect.mAlpha = 0.5;
    this.colorRect.setPosition(0,150);
    this.colorRect.setSize(window.innerWidth,window.innerHeight - 150);
    //this.colorRect.setPosition(0.1 * window.innerWidth,0.15 * window.innerHeight);
    //this.colorRect.setSize(window.innerWidth * 0.9,window.innerHeight * 0.85);
    this.colorRect.setLevel(1);

    this.onResize();

    this.baseNode.addComponent(this.texture);
    this.baseNode.addComponent(this.colorRect);
}