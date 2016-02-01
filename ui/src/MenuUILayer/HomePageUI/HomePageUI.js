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
}

HomePageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}
