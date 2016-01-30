/**
 * Created by Administrator on 2016/1/30.
 */
function MainMenuUI(manager,canvas)
{
    UIBase.call(this,manager);
    this.canvas = canvas;
        this.baseNode;
            this.panel;
                //MenuButton
}

for(var i in UIBase.prototype) {
    MainMenuUI.prototype[i] = UIBase.prototype[i];
}

MainMenuUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);

    var homePageButton = new UIButton();
    homePageButton.createWithColorRect(this.canvas,"#66CCFF","�� ҳ","bold 14px ����");
    homePageButton.setShadowMargin(5);
    homePageButton.colorRect.mAlpha = 0.8;
    homePageButton.setSize(100,50);

    var blogPageButton = new UIButton();
    blogPageButton.createWithColorRect(this.canvas,"#BD72F0","�� ��","bold 14px ����");
    blogPageButton.setShadowMargin(5);
    blogPageButton.colorRect.mAlpha = 0.8;
    blogPageButton.setSize(100,50);

    var texturePageButton = new UIButton();
    texturePageButton.createWithColorRect(this.canvas,"#CC3333","�� ��","bold 14px ����");
    texturePageButton.setShadowMargin(5);
    texturePageButton.colorRect.mAlpha = 0.8;
    texturePageButton.setSize(100,50);

    var chatPageButton = new UIButton();
    chatPageButton.createWithColorRect(this.canvas,"#009933","���԰�","bold 14px ����");
    chatPageButton.setShadowMargin(5);
    chatPageButton.colorRect.mAlpha = 0.8;
    chatPageButton.setSize(100,50);

    var creativePageButton = new UIButton();
    creativePageButton.createWithColorRect(this.canvas,"#FF9999","����ռ�","bold 14px ����");
    creativePageButton.setShadowMargin(5);
    creativePageButton.colorRect.mAlpha = 0.8;
    creativePageButton.setSize(100,50);

    this.panel = new Panel();
    this.panel.create(this.canvas);
    this.panel.setSize(1600,900);
    this.panel.setPosition(100,100);
    this.panel.offsetX = 50;
    this.panel.addComponent(creativePageButton);
    this.panel.addComponent(chatPageButton);
    this.panel.addComponent(texturePageButton);
    this.panel.addComponent(blogPageButton);
    this.panel.addComponent(homePageButton);
    this.panel.resetPosition();
}
