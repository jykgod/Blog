/**
 * Created by Administrator on 2016/1/31.
 */
function HomePageUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"HomePageUI");
}

for(var i in UIBase.prototype)
{
    HomePageUI.prototype[i] = UIBase.prototype[i];
}

HomePageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);

    var label = new MarkDownFormatLabel();
    label.create(this.mCanvas,'# JYK的博客\n## 说好的博客终于算是有个雏形了，来来回回推翻重写几次，至今都还是想再推翻重写= =。\n## 还有很多功能没完成，比如那个login就目前来看是毫无卵用的东西，当它不存在就行了。\n## 最后还是要感谢一下苏大神的后台\n');
    label.setPosition(200,20);
    label.mColor = "#bbbbbb";
    label.setSize(1000,1000);
    this.baseNode.addComponent(label);
}

HomePageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}
