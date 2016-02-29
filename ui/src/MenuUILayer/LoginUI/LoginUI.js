/**
 * Created by Administrator on 2016/2/7.
 */
function LoginUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"LoginUI");
    this.translateStartTime = new Date();
    this.translateNeedTime = 200;
    this.translateStart = false;

    this.goNode = null;
    this.goLoginBtn = null;
    this.goRegisterBtn = null;
    /**
     * if goWhere = 0; means not go to anyone;
     * if goWhere = 1; means go to login;
     * if goWhere = 2; means go to register;
     * if goWhere = 3; means go to logged-in;
     * @type {number}
     */
    this.going = false;
    this.goWhere = 0;
    /**
     * if state == 1 means open,else means close
     * @type {number}
     */
    this.openOrCloseState = 1;
    this.backGround = null;
    this.translateRect = null;

    this.loggedInNode = null;
    this.loggedUserName = null;
    this.loggedMotto = null;

    this.usernameInput = null;
    this.passwordInput = null;
    this.usernameLabel = null;
    this.passwordLabel = null;
    this.sureBtn = null;
    this.backBtn = null;

    this.updateVisibleUI = function()
    {
        if( this.going == true ) {
            if (this.goWhere == 0) {
                this.goNode.setVisible(true);
            }
            else {
                this.goNode.setVisible(false);
            }

            if (this.goWhere == 1) {
                var temp = this;
                this.sureBtn.label.mText = "登陆";
                this.sureBtn.onClick = function(x,y)
                {
                    console.log( "username:" + temp.usernameInput.value() );
                    console.log( "password:" + temp.passwordInput.value() );
                    var messageHelper = new MessageHelper();
                    messageHelper.Instance.postMessageToServer("/login", MG_TYPE.MSG_RQL_LOGIN, {}, temp.usernameInput.value(), temp.passwordInput.value());
                }
            }

            if (this.goWhere == 2) {
                var temp = this;
                this.sureBtn.label.mText = "注册";
                this.sureBtn.onClick = function(x,y)
                {
                    console.log( "username:" + temp.usernameInput.value() );
                    console.log( "password:" + temp.passwordInput.value() );
                    var messageHelper = new MessageHelper();
                    messageHelper.Instance.postMessageToServer("/register", MG_TYPE.MSG_RQL_REGISTER, {
                        username: temp.usernameInput.value(),
                        password: temp.passwordInput.value()
                    });
                }
            }

            if (this.goWhere == 3) {
                var logicHelper = LogicHelper.prototype.getInstance();
                var user = logicHelper.getLocalUser();
                if(user != null) {
                    console.log(user.username);
                    this.loggedUserName.mText = user.username;
                    this.loggedMotto.mText = user.motto;
                }
                this.loggedInNode.setVisible(true);
            }
            else{
                this.loggedInNode.setVisible(false);
            }

            if (this.goWhere == 0 || this.goWhere == 3) {
                this.usernameInput.setVisible(false);
                this.passwordInput.setVisible(false);
                this.usernameLabel.setVisible(false);
                this.passwordLabel.setVisible(false);
                this.sureBtn.setVisible(false);
                this.backBtn.setVisible(false);
            }
            else {
                this.usernameInput.setVisible(true);
                this.passwordInput.setVisible(true);
                this.usernameLabel.setVisible(true);
                this.passwordLabel.setVisible(true);
                this.sureBtn.setVisible(true);
                this.backBtn.setVisible(true);
            }
            this.going = false;
        }
    }
}

for(var i in UIBase.prototype)
{
    LoginUI.prototype[i] = UIBase.prototype[i];
}
LoginUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
    //Background
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
    //Go Node
    var logicHelper = LogicHelper.prototype.getInstance();
    logicHelper.registerLocalUserChangeEvent(function(){
        temp.goWhere = 3;
        temp.going = true;
        console.log("logged-in!");
    });
    this.goLoginBtn = new UIButton();
    this.goLoginBtn.createWithColorRect(this.mCanvas,"#6699ff","登 陆","bold 14px 宋体");
    this.goLoginBtn.setSize(160,40);
    this.goLoginBtn.colorRect.mAlpha = 0.8;
    this.goLoginBtn.setPosition(10,200);
    this.goLoginBtn.setShadowMargin(5);
    this.goLoginBtn.setLevel(1);
    this.goLoginBtn.onClick = function(x,y)
    {
        temp.goWhere = 1;
        temp.going = true;
    }

    this.goRegisterBtn = new UIButton();
    this.goRegisterBtn.createWithColorRect(this.mCanvas,"#6699ff","注 册","bold 14px 宋体");
    this.goRegisterBtn.setSize(160,40);
    this.goRegisterBtn.colorRect.mAlpha = 0.8;
    this.goRegisterBtn.setPosition(10,300);
    this.goRegisterBtn.setShadowMargin(5);
    this.goRegisterBtn.setLevel(1);
    this.goRegisterBtn.onClick = function(x,y)
    {
        temp.goWhere = 2;
        temp.going = true;
    }
    this.goNode = new BaseObject();
    this.goNode.create(this.mCanvas);
    this.goNode.addComponent(this.goLoginBtn);
    this.goNode.addComponent(this.goRegisterBtn);

    //logged-in node
    this.loggedUserName = new Label();
    this.loggedUserName.create(this.mCanvas,"","bold 40px 宋体");
    this.loggedUserName.setPosition(40,130);
    this.loggedUserName.setLevel(10);
    this.loggedMotto = new Label();
    this.loggedMotto.create(this.mCanvas,"","bold 10px 宋体");
    this.loggedMotto.setPosition(20,210);
    this.loggedMotto.setLevel(10);
    this.loggedInNode = new BaseObject();
    this.loggedInNode.create(this.mCanvas);
    this.loggedInNode.addComponent(this.loggedMotto);
    this.loggedInNode.addComponent(this.loggedUserName);
    //login or register
    this.usernameInput = new Input();
    this.usernameInput.create("fatherDiv","text");
    this.usernameInput.setPositionAndSize(10,300,100,20,10);
    this.passwordInput = new Input();
    this.passwordInput.create("fatherDiv","password");
    this.passwordInput.setPositionAndSize(10,400,100,20,10);
    this.usernameLabel = new Label();
    this.usernameLabel.create(this.mCanvas,"username","bold 24px 宋体");
    this.usernameLabel.setPosition(60,130);
    this.usernameLabel.setLevel(10);
    this.passwordLabel = new Label();
    this.passwordLabel.create(this.mCanvas,"password","bold 24px 宋体");
    this.passwordLabel.setLevel(10);
    this.passwordLabel.setPosition(60,230);

    this.sureBtn = new UIButton();
    this.sureBtn.createWithColorRect(this.mCanvas,"#dd0000","","bold 14px 宋体");
    this.sureBtn.setSize(100,50);
    this.sureBtn.colorRect.mAlpha = 0.8;
    this.sureBtn.setPosition(20,300);
    this.sureBtn.setShadowMargin(5);
    this.sureBtn.setLevel(1);

    this.backBtn = new UIButton();
    this.backBtn.createWithColorRect(this.mCanvas,"#dd0000","返回","bold 14px 宋体");
    this.backBtn.setSize(100,50);
    this.backBtn.colorRect.mAlpha = 0.8;
    this.backBtn.setPosition(20,360);
    this.backBtn.setShadowMargin(5);
    this.backBtn.setLevel(1);
    this.backBtn.onClick = function(x,y)
    {
        temp.goWhere = 0;
        temp.going = true;
    }
    //baseNode
    this.baseNode.addComponent(this.goNode);
    this.baseNode.addComponent(this.backGround);
    this.baseNode.addComponent(this.translateRect);
    this.baseNode.addComponent(this.passwordLabel);
    this.baseNode.addComponent(this.usernameLabel);
    this.baseNode.addComponent(this.sureBtn);
    this.baseNode.addComponent(this.backBtn);
    this.baseNode.addComponent(this.loggedInNode);
    this.baseNode.setLevel(1000);
    this.going = true;
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
        if (this.openOrCloseState == 1)
            this.baseNode.setPosition(-200 * ( 1 - translate ), this.baseNode.y);
        else
            this.baseNode.setPosition(-200 * translate, this.baseNode.y);
        this.usernameInput.setPosition(this.baseNode.x + 10, this.usernameInput.y);
        this.passwordInput.setPosition(this.baseNode.x + 10, this.passwordInput.y);
    }
    this.updateVisibleUI();
}
LoginUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}

LoginUI.prototype.changeState = function() {
    this.translateStart = true;
    this.translateStartTime = new Date();
    this.openOrCloseState = 1 - this.openOrCloseState;
}