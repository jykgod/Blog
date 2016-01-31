function BackGroundUI(manager)
{
    UIBase.call(this,manager);
    this.canvas;
        this.baseNode;
            this.texture;
            this.colorRect;
}

for(var i in UIBase.prototype) {
    BackGroundUI.prototype[i] = UIBase.prototype[i];
}

BackGroundUI.prototype.onResize = function()
{
    this.canvas.setPosition(0,0,window.innerWidth,window.innerHeight,-100);

    this.texture.setSize(window.innerWidth,window.innerHeight);

    this.colorRect.setSize(window.innerWidth - 100,window.innerHeight - 150);

    this.canvas.update();
}

BackGroundUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);

    this.canvas = new Canvas();
    this.canvas.createWithFatherNameAndPosition("fatherDiv",0,0,window.innerWidth,window.innerHeight,-100);

    this.canvas = new Canvas();
    this.canvas.createWithFatherNameAndPosition("fatherDiv",0,0,window.innerWidth,window.innerHeight,-100);

    this.texture = new Texture();
    this.texture.setSize(window.innerWidth,window.innerHeight);
    this.texture.create(this.canvas,"../asset/texture/test1.jpg");
    this.texture.loadTexture();
    var temp = this;
    this.texture.doAfterLoad(function(){
        temp.canvas.update();
    });

    this.colorRect = new ColorRect();
    this.colorRect.create(this.canvas,"#000000");
    this.colorRect.mAlpha = 0.5;
    this.colorRect.setPosition(100,150);
    this.colorRect.setSize(window.innerWidth - 100,window.innerHeight - 150);
    this.colorRect.setLevel(1);

    this.baseNode = new BaseObject();
    this.baseNode.create(this.canvas);
    this.baseNode.addComponent(this.texture);
    this.baseNode.addComponent(this.colorRect);
}
