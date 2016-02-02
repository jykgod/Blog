/**
 * Created by Administrator on 2016/1/30.
 */
function MainMenuUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"MainMenuUI");
    this.buttonPanel;
    this.pageList = new Array();
}

for(var i in UIBase.prototype) {
    MainMenuUI.prototype[i] = UIBase.prototype[i];
}

MainMenuUI.prototype.onResize = function()
{
    //this.mCanvas.setPosition(0,0,window.innerWidth,window.innerHeight,0);
    //
    //if(this.buttonPanel == null || this.buttonPanel == undefined) return;
    //
    //this.buttonPanel.mComponents.Ergodic(null,function(_null,now){
    //    now.setSize(window.innerWidth * 0.05,window.innerHeight * 0.06);
    //});
    //
    ////this.buttonPanel.setSize(window.innerWidth * 100,window.innerHeight * 100);
    //this.buttonPanel.setPosition(window.innerWidth * 0.05,window.innerHeight * 0.09);
    //this.buttonPanel.offsetX = window.innerWidth * 0.05;
    //this.buttonPanel.resetPosition();
}

MainMenuUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
    var temp = this;
    var canvas = new Canvas();
    canvas.createWithFatherNameAndPosition('fatherDiv', 100, 150, window.innerWidth - 100, window.innerHeight - 150, 1);
    canvas.setUpdateDeltaTime(60);
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
            temp.pageList.push(new HomePageUI(temp.manager, canvas));
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
        for(var i = 0;i < temp.pageList.length ; i ++)
        {
            temp.pageList[i].setVisible(false);
        }
        var ui = temp.manager.getUIByName("BlogPageUI");
        if(ui == null)
        {
            temp.pageList.push(new BlogPageUI(temp.manager, canvas));
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
            temp.pageList.push(new TexturePageUI(temp.manager, canvas));
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
            temp.pageList.push(new ChatPageUI(temp.manager, canvas));
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
            temp.pageList.push(new CreativePageUI(temp.manager, canvas));
        }else
        {
            ui.setVisible(true);
        }
    }

    this.buttonPanel = new Panel();
    this.buttonPanel.create(this.mCanvas);
    this.buttonPanel.setSize(window.innerWidth,window.innerHeight);
    this.buttonPanel.setPosition(100,100);
    this.buttonPanel.offsetX = 50;
    this.buttonPanel.addComponent(creativePageButton);
    this.buttonPanel.addComponent(chatPageButton);
    this.buttonPanel.addComponent(texturePageButton);
    this.buttonPanel.addComponent(blogPageButton);
    this.buttonPanel.addComponent(homePageButton);
    this.buttonPanel.resetPosition();
    //this.onResize();

    this.baseNode.addComponent(this.buttonPanel);

    this.pageList.push(new HomePageUI(this.manager, canvas));

}

MainMenuUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}
