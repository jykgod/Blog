/**
 * Created by Administrator on 2016/1/31.
 */
function HomePageUI(manager)
{
    UIBase.call(this,manager);
    this.baseNode = null;
}

for(var i in UIBase.prototype)
{
    HomePageUI.prototype[i] = UIBase.prototype[i];
}

HomePageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
}

HomePageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
    this.baseNode.setVisible(false);
}
