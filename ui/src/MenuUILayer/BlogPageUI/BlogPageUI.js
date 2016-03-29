/**
 * Created by Administrator on 2016/1/31.
 */
function BlogPageUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"BlogPageUI");
    this.blogList = null;
    this.blogListNode = null;
    this.blogContent = null;
    this.blogContentBg = null;
    /**
     * state = 0 means the list page
     * state = 1 means the content page
     * @type {number}
     */
    this.state = 0;

    this.mBackBtn = null;
}

for(var i in UIBase.prototype)
{
    BlogPageUI.prototype[i] = UIBase.prototype[i];
}

BlogPageUI.prototype.onResize = function()
{
    this.blogList.dragMaxBottomFixY = window.innerHeight - 170;
    this.blogContentBg.setPosition(300,0);
    this.blogContentBg.setSize(innerWidth -300, innerHeight );
    this.blogContent.setRect(300,170,innerWidth - 300, innerHeight - 170);
}

BlogPageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
    var temp = this;
    this.blogList = new DragPanel();
    this.blogList.create(this.mCanvas);
    this.blogList.setSize(1000,window.innerHeight - 170);
    this.blogList.offsetY = 20;
    this.blogList.dragMaxBottomFixY = window.innerHeight - 170;
    this.blogList.mAxisYMove = true;

    this.blogListNode = new BaseObject();
    this.blogListNode.create(this.mCanvas);
    this.blogListNode.addComponent(this.blogList);
    this.blogListNode.setPosition(300,0);

    this.mBackBtn = new UIButton();
    this.mBackBtn.createWithColorRect(this.mCanvas,"#aaaaaa","返 回","bold 14px 宋体");
    this.mBackBtn.setShadowMargin(5);
    this.mBackBtn.mColorRect.mAlpha = 0.8;
    this.mBackBtn.setSize(100,50);
    this.mBackBtn.onClick = function()
    {
        temp.state = 0;
    }
    this.mBackBtn.setVisible(false);

    this.blogContent = new BlogText();
    this.blogContent.createWithFatherNameAndPosition("fatherDiv", 300, 170, innerWidth - 100, innerHeight - 170, 2);
    this.blogContentBg = new ColorRect();
    this.blogContentBg.create(this.mCanvas,"#ffffff");
    this.blogContentBg.setLevel(100);
    this.blogContentBg.setPosition(300,0);
    this.blogContentBg.setSize(innerWidth - 300, innerHeight);
    this.blogContentBg.setVisible(false);

    //this.blogList.addComponent();

    this.baseNode.addComponent(this.mBackBtn);
    this.baseNode.addComponent(this.blogContentBg);
    this.baseNode.addComponent(this.blogListNode);
    this.baseNode.setPosition(0,20);
    var messageHelper = new MessageHelper();
    messageHelper.Instance.postMessageToServer("/getDocumentListByAuthor", MG_TYPE.MSG_RQL_GET_DOCUMENT_LIST, {
        author: "jyk",
        page: "1"
    });
}

BlogPageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}

BlogPageUI.prototype.update = function()
{
    if(this.baseNode.mVisible == false) return;
    this.blogList.updatePanelPosition();
    if(this.state == 1)
    {
        this.blogContent.setVisible(true);
        this.blogListNode.setVisible(false);
        this.mBackBtn.setVisible(true);
        this.blogContentBg.setVisible(true);
    }else
    {
        this.blogContent.setVisible(false);
        this.blogListNode.setVisible(true);
        this.mBackBtn.setVisible(false);
        this.blogContentBg.setVisible(false);
    }
}

BlogPageUI.prototype.showBlogText = function (id) {
    var messageHelper = new MessageHelper();
    if(this.blogContent.id == id)
    {
        return;
    }
    this.blogContent.id = id;
    messageHelper.Instance.postMessageToServer("/getDocument", MG_TYPE.MSG_RQL_GET_DOCUMENT, {id: id});
}

BlogPageUI.prototype.setVisible = function (visible) {
    UIBase.prototype.setVisible.call(this,visible);
    if (visible == false) {
        this.blogListNode.setVisible(false);
        this.blogContent.setVisible(false);
        this.mBackBtn.setVisible(false);
        this.blogContentBg.setVisible(false);
    }else {
        if(this.state == 1)
        {
            this.blogListNode.setVisible(false);
            this.blogContent.setVisible(true);
            this.mBackBtn.setVisible(true);
            this.blogContentBg.setVisible(true);
        }
        else
        {
            this.blogListNode.setVisible(true);
            this.blogContent.setVisible(false);
            this.mBackBtn.setVisible(false);
            this.blogContentBg.setVisible(false);
        }
    }
}

BlogPageUI.prototype.addBlogButton = function(id,text)
{
    var blogButton = new UIButton();
    blogButton.createWithColorRect(this.mCanvas,"#dddddd",text,"bold 24px 宋体",2);
    blogButton.setShadowMargin(10);
    blogButton.label.mColor = "#333333";
    blogButton.setSize(1000,200);
    var temp = this;
    blogButton.onClick = function()
    {
        //console.log("click blog id:",id);
        temp.state = 1;
        temp.showBlogText(id);
    }
    this.blogList.addComponent(blogButton);
    this.blogList.resetPositionAndSize();
}