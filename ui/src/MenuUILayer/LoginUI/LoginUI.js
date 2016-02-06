/**
 * Created by Administrator on 2016/2/7.
 */
function LoginUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"LoginUI");
    this.translateStartTime = new Date();
    this.translateNeedTime = 2;
    this.translateStart = false;
    /**
     * if value == 1 means open,else means close
     * @type {number}
     */
    this.state = 1;
    this.backGround = null;
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
    this.backGround.create(this.mCanvas , "#004444");
    this.backGround.setSize(210,800);
    this.backGround.setPosition(0,100);

    var collider = new Collider();
    collider.create(this.baseNode,1000);
    collider.setSize(10,800);
    collider.setPosition(200,0);
    this.baseNode.OnClick = function(x,y)
    {
        temp.changeState();
        alert("gan");
    }

    this.baseNode.addComponent(this.backGround);
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
        if (this.state == 1)
            this.baseNode.setPosition(-200 * ( 1 - translate ), this.y);
        else
            this.baseNode.setPosition(-200 * translate, this.y);
    }
}
LoginUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}

LoginUI.prototype.changeState = function() {
    this.translateStart = true;
    this.state = 1 - this.state;
}