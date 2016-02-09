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

    this.usernameInput = null;
    this.passwordInput = null;
    this.usernameLabel = null;
    this.passwordLabel = null;

    this.loginBtn = null;
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

    this.usernameInput = new Input();
    this.usernameInput.create("fatherDiv","text");
    this.usernameInput.setPositionAndSize(10,300,100,20,10);
    this.passwordInput = new Input();
    this.passwordInput.create("fatherDiv","password");
    this.passwordInput.setPositionAndSize(10,400,100,20,10);
    this.usernameLabel = new Label();
    this.usernameLabel.create(this.mCanvas,"username","bold 24px ËÎÌו");
    this.usernameLabel.setPosition(60,130);
    this.usernameLabel.setLevel(10);
    this.passwordLabel = new Label();
    this.passwordLabel.create(this.mCanvas,"password","bold 24px ËÎÌו");
    this.passwordLabel.setLevel(10);
    this.passwordLabel.setPosition(60,230);

    var temp = this;
    this.loginBtn = new UIButton();
    this.loginBtn.createWithColorRect(this.mCanvas,"#dd0000","login","bold 14px ËÎÌו");
    this.loginBtn.setSize(100,50);
    this.loginBtn.colorRect.mAlpha = 0.8;
    this.loginBtn.setPosition(20,300);
    this.loginBtn.setShadowMargin(5);
    this.loginBtn.setLevel(1);
    this.loginBtn.onClick = function(x,y)
    {
        console.log( "username:" + temp.usernameInput.value() );
        console.log( "password:" + temp.passwordInput.value() );
    }


    this.baseNode.addComponent(this.loginBtn);
    this.baseNode.addComponent(this.backGround);
    this.baseNode.addComponent(this.translateRect);
    this.baseNode.addComponent(this.passwordLabel);
    this.baseNode.addComponent(this.usernameLabel);
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
        //console.log(translate+"state:"+this.state);
        if (this.state == 1)
            this.baseNode.setPosition(-200 * ( 1 - translate ), this.baseNode.y);
        else
            this.baseNode.setPosition(-200 * translate, this.baseNode.y);
        this.usernameInput.setPosition( this.baseNode.x + 10 , this.usernameInput.y);
        this.passwordInput.setPosition( this.baseNode.x + 10 , this.passwordInput.y);
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