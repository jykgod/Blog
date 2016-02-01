/**
 * Created by Administrator on 2016/1/31.
 */
function BlogPageUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"BlogPageUI");
}

for(var i in UIBase.prototype)
{
    BlogPageUI.prototype[i] = UIBase.prototype[i];
}

BlogPageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
}

BlogPageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}