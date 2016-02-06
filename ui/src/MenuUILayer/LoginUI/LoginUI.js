/**
 * Created by Administrator on 2016/2/7.
 */
function LoginUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"LoginUI");
    this.translateStartTime = new Date();
    this.translateNeedTime = 200;
    this.translateStart = false;
    /**
     * if value == 1 means open,else means close
     * @type {number}
     */
    this.state = 1;
    this.backGround = null;
    this.translateRect = null;
}

for(var i in UIBase.prototype)
{
    LoginUI.prototype[i] = UIBase.prototype[i];
}
LoginUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
    var temp = this;
    this.backGround = new ColorRect();
    this.backGround.create(this.mCanvas , "#3399cc");
    this.backGround.setSize(230,800);
    this.backGround.setPosition(0,100);

    this.translateRect = new ColorRect();
    this.translateRect.create(this.mCanvas , "#ff9933");
    this.translateRect.setSize(30,800);
    this.translateRect.setPosition(200,100);
    this.translateRect.setLevel(1);

    var collider = new Collider();
    collider.create(this.translateRect,1000);
    this.translateRect.onClick = function(x,y)
    {
        temp.changeState();
    }
    this.baseNode.addComponent(this.backGround);
    this.baseNode.addComponent(this.translateRect);
    this.baseNode.setLevel(1000);

}
LoginUI.prototype.update = function()
{
    UIBase.prototype.update.call(this);
    if(this.translateStart == true) {
        var time = new Date();
        var translate = 1.0;
        if (time - this.translateStartTime < this.translateNeedTime) {
            translate = translate * ( time - this.translateStartTime );
            translate = translate / this.translateNeedTime;
        }
        console.log(translate+"state:"+this.state);
        if (this.state == 1)
            this.baseNode.setPosition(-200 * ( 1 - translate ), this.baseNode.y);
        else
            this.baseNode.setPosition(-200 * translate, this.baseNode.y);
    }
}
LoginUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}

LoginUI.prototype.changeState = function() {
    this.translateStart = true;
    this.translateStartTime = new Date();
    this.state = 1 - this.state;
}