/**
 * Created by Administrator on 2016/1/31.
 */
function TexturePageUI(manager)
{
    UIBase.call(this,manager);
    this.baseNode = null;
}

for(var i in UIBase.prototype)
{
    TexturePageUI.prototype[i] = UIBase.prototype[i];
}

TexturePageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
}

TexturePageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
    this.baseNode.setVisible(false);
}