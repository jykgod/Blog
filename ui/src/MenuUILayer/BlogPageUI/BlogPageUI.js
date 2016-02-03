/**
 * Created by Administrator on 2016/1/31.
 */
function BlogPageUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"BlogPageUI");
    this.blogList = null;
}

for(var i in UIBase.prototype)
{
    BlogPageUI.prototype[i] = UIBase.prototype[i];
}

BlogPageUI.prototype.onResize = function()
{
    this.mCanvas.setPosition(100,150,innerWidth-100,innerHeight - 150,1);
    this.blogList.dragMaxBottomFixY = window.innerHeight - 150;
}

BlogPageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
    this.blogList = new DragPanel();
    this.blogList.create(this.mCanvas);
    console.log("start blog page");
    this.blogList.setSize(1000,window.innerHeight - 150);
    this.blogList.setPosition(0,0);
    this.blogList.offsetY = 20;
    this.blogList.dragMaxBottomFixY = window.innerHeight - 150;
    this.blogList.mAxisYMove = true;
    this.addBlogButton(10,"aha");
    this.addBlogButton(11,"aha");
    this.addBlogButton(12,"aha");
    this.addBlogButton(13,"aha");
    this.addBlogButton(14,"aha");
    this.addBlogButton(15,"aha");
    this.addBlogButton(16,"aha");
    this.addBlogButton(17,"aha");
    this.addBlogButton(18,"aha");
    this.addBlogButton(19,"aha");
    this.addBlogButton(20,"aha");
    //this.blogList.addComponent();

    this.baseNode.addComponent(this.blogList);
}

BlogPageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}

BlogPageUI.prototype.update = function()
{
    this.blogList.updatePanelPosition();
}

BlogPageUI.prototype.addBlogButton = function(id,text)
{
    var blogButton = new UIButton();
    blogButton.createWithColorRect(this.mCanvas,"#dddddd",text,"bold 14px ����");
    blogButton.setShadowMargin(10);
    blogButton.label.mColor = "#333333";
    blogButton.setSize(1000,200);
    blogButton.onClick = function()
    {
        console.log("click blog id:",id);
    }
    this.blogList.addComponent(blogButton);
    this.blogList.resetPosition();
}