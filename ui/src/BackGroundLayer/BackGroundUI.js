function BackGroundUI(manager)
{
    UIBase.call(this,manager);
    this.canvas;
        this.baseNode;
            this.texture;
}

for(var i in UIBase.prototype) {
    BackGroundUI.prototype[i] = UIBase.prototype[i];
}

BackGroundUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);

    this.canvas = new Canvas();
    this.canvas.createWithFatherNameAndPosition("fatherDiv",0,0,1600,900,0);

    this.texture = new Texture();
    this.texture.mShadowMargin = 10;
    this.texture.setSize(800,450);
    this.texture.create(this.canvas,"../asset/texture/test1.jpg");
    this.texture.loadTexture();
    var temp = this;
    this.texture.doAfterLoad(function(){
        temp.canvas.update();
    });

    this.baseNode = new BaseObject();
    this.baseNode.create(this.canvas);
    this.baseNode.addComponent(this.texture);
}
