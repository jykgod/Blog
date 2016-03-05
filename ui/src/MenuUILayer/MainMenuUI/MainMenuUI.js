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
    //messageHelper.postMessageToServer("addDocument", MG_TYPE.MSG_RQL_ADD_DOCUMENT, {
    //    title: encodeURIComponent("测试"),
    //    body: encodeURIComponent('# kill me baby\n```c\n#include<stdio.h> \nint main()\n\t{\n\t\tprintf("hello world!");\n\t}\n```'),
    //    preview: 200
    //}, "jyk", "123");
    messageHelper.postMessageToServer("addDocument", MG_TYPE.MSG_RQL_ADD_DOCUMENT, {
            title: encodeURIComponent('写给我第一个喜欢的女孩的歌'),
            body: encodeURIComponent('演唱：洛天依\n\t作词：ilem\n\t作曲：ilem\n\t编曲：ilem\n\t混缩：ilem\n\t分类：原创\n\t语种：华语\n\t曲风：流行\n\t你温柔的长发，在风中划过嘴角\n\t我幼稚的笑话，为何只有你没笑\n\t你靠着窗发呆，我看你发呆而发呆\n\t女孩，你太可爱，我不知怎么办\n\t感谢你，那样沁人心脾的美丽\n\t感谢你，让我回忆也变得甜\n\t原谅我，有点笨拙的少女心\n\t感谢你，出现在那里\n\t你温柔的长发，在风中划过嘴角\n\t我幼稚的笑话，为何只有你没笑\n\t你靠着窗发呆，我看你发呆而发呆\n\t女孩，你太可爱，我不知怎么办\n\t你问我的答案，是简单还是很难\n\t我看着你的脸，就忘记该怎么算\n\t老师说着未来，我想着未来和未来\n\t女孩，你太可爱，我不想离开\n\t感谢你，那样沁人心脾的美丽\n\t感谢你，让我回忆都变得甜\n\t原谅我，有点笨拙的少女心\n\t感谢你，出现在那里\n\t有一个，早已被你猜到的秘密\n\t请允许，我把你写进我的歌\n\t纸飞机，载着岁月飞散在风里\n\t不知你，还能否想起\n\t原谅我，有点笨拙的少女心'),
            preview: 0
        }, "jykMusic", "123");
    this.baseNode.addComponent(this.buttonPanel);

    var loginUI = new LoginUI(this.manager, temp.pageCanvas);

    this.pageList.push(new HomePageUI(this.manager, temp.pageCanvas));

}

MainMenuUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}
