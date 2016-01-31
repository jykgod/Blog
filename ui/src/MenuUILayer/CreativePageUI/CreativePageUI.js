/**
 * Created by Administrator on 2016/1/31.
 */
function CreativePageUI(manager)
{
    UIBase.call(this,manager);
    this.baseNode = null;
}

for(var i in UIBase.prototype)
{
    CreativePageUI.prototype[i] = UIBase.prototype[i];
}

CreativePageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
}

CreativePageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
    this.baseNode.setVisible(false);
}
