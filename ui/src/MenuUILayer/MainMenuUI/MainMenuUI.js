/**
 * Created by Administrator on 2016/1/30.
 */
function MainMenuUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"MainMenuUI");
    this.buttonPanel;
    this.pageList = new Array();
    this.pageCanvas = null;
}

for(var i in UIBase.prototype) {
    MainMenuUI.prototype[i] = UIBase.prototype[i];
}

MainMenuUI.prototype.onResize = function()
{
    this.mCanvas.setPosition(0,0,window.innerWidth,window.innerHeight,0);
    this.pageCanvas.setPosition(0,150,window.innerWidth,window.innerHeight - 150,1);
}

MainMenuUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
    var temp = this;
    this.pageCanvas = new Canvas();
    this.pageCanvas.createWithFatherNameAndPosition('fatherDiv', 0, 150, window.innerWidth , window.innerHeight - 150, 1);
    this.pageCanvas.setUpdateDeltaTime(40);
    var homePageButton = new UIButton();
    homePageButton.createWithColorRect(this.mCanvas,"#66CCFF","主 页","bold 14px 宋体");
    homePageButton.setShadowMargin(5);
    homePageButton.label.mColor = "#333333";
    homePageButton.colorRect.mAlpha = 0.8;
    homePageButton.setSize(100,50);
    homePageButton.onClick = function()
    {
        for(var i = 0;i < temp.pageList.length ; i ++)
        {
            temp.pageList[i].setVisible(false);
        }
        var ui = temp.manager.getUIByName("HomePageUI");
        if(ui == null)
        {
            temp.pageList.push(new HomePageUI(temp.manager, temp.pageCanvas));
        }else
        {
            ui.setVisible(true);
        }
    }

    var blogPageButton = new UIButton();
    blogPageButton.createWithColorRect(this.mCanvas,"#BD72F0","博 文","bold 14px 宋体");
    blogPageButton.setShadowMargin(5);
    blogPageButton.label.mColor = "#333333";
    blogPageButton.colorRect.mAlpha = 0.8;
    blogPageButton.setSize(100,50);
    blogPageButton.onClick = function()
    {
        console.log("shit");
        for(var i = 0;i < temp.pageList.length ; i ++)
        {
            temp.pageList[i].setVisible(false);
        }
        var ui = temp.manager.getUIByName("BlogPageUI");
        if(ui == null)
        {
            temp.pageList.push(new BlogPageUI(temp.manager, temp.pageCanvas));
        }else
        {
            ui.setVisible(true);
        }
    }

    var texturePageButton = new UIButton();
    texturePageButton.createWithColorRect(this.mCanvas,"#CC3333","相 册","bold 14px 宋体");
    texturePageButton.setShadowMargin(5);
    texturePageButton.label.mColor = "#333333";
    texturePageButton.colorRect.mAlpha = 0.8;
    texturePageButton.setSize(100,50);
    texturePageButton.onClick = function()
    {
        for(var i = 0;i < temp.pageList.length ; i ++)
        {
            temp.pageList[i].setVisible(false);
        }
        var ui = temp.manager.getUIByName("TexturePageUI");
        if(ui == null)
        {
            temp.pageList.push(new TexturePageUI(temp.manager, temp.pageCanvas));
        }else
        {
            ui.setVisible(true);
        }
    }

    var chatPageButton = new UIButton();
    chatPageButton.createWithColorRect(this.mCanvas,"#009933","留言板","bold 14px 宋体");
    chatPageButton.setShadowMargin(5);
    chatPageButton.label.mColor = "#333333";
    chatPageButton.colorRect.mAlpha = 0.8;
    chatPageButton.setSize(100,50);
    chatPageButton.onClick = function()
    {
        for(var i = 0;i < temp.pageList.length ; i ++)
        {
            temp.pageList[i].setVisible(false);
        }
        var ui = temp.manager.getUIByName("ChatPageUI");
        if(ui == null)
        {
            temp.pageList.push(new ChatPageUI(temp.manager, temp.pageCanvas));
        }else
        {
            ui.setVisible(true);
        }
    }

    var creativePageButton = new UIButton();
    creativePageButton.createWithColorRect(this.mCanvas,"#FF9999","创意空间","bold 14px 宋体");
    creativePageButton.setShadowMargin(5);
    creativePageButton.label.mColor = "#333333";
    creativePageButton.colorRect.mAlpha = 0.8;
    creativePageButton.setSize(100,50);
    creativePageButton.onClick = function()
    {
        for(var i = 0;i < temp.pageList.length ; i ++)
        {
            temp.pageList[i].setVisible(false);
        }
        var ui = temp.manager.getUIByName("CreativePageUI");
        if(ui == null)
        {
            temp.pageList.push(new CreativePageUI(temp.manager, temp.pageCanvas));
        }else
        {
            ui.setVisible(true);
        }
    }

    this.buttonPanel = new Panel();
    this.buttonPanel.create(this.mCanvas);
    this.buttonPanel.setSize(window.innerWidth,window.innerHeight);
    this.buttonPanel.setPosition(0,100);
    this.buttonPanel.offsetX = 50;
    this.buttonPanel.addComponent(creativePageButton);
    this.buttonPanel.addComponent(chatPageButton);
    this.buttonPanel.addComponent(texturePageButton);
    this.buttonPanel.addComponent(blogPageButton);
    this.buttonPanel.addComponent(homePageButton);
    this.buttonPanel.resetPosition();
    //this.onResize();
    var messageHelper = new MessageHelper();
    //messageHelper.postMessageToServer("http://127.0.0.1:10200/register","MSG_RQL_REGISTER",'{"username":"jyk4","password":"123"}');
    //messageHelper.postMessageToServer("http://127.0.0.1:10200/addDocument","MSG_RQL_ADD_DOCUMENT",{title:encodeURIComponent("测试"),body:encodeURIComponent('```javascript\nfunction haha(){\n\tvar a = 100;\n}\n```'),preview:100},"jyk","123");
    this.baseNode.addComponent(this.buttonPanel);

    var loginUI = new LoginUI(this.manager, temp.pageCanvas);

    this.pageList.push(new HomePageUI(this.manager, temp.pageCanvas));

}

MainMenuUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}
