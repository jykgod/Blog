/**
 * Created by Administrator on 2016/1/31.
 */
function ChatPageUI(manager,canvas)
{
    UIBase.call(this,manager,canvas,"ChatPageUI");
}

for(var i in UIBase.prototype)
{
    ChatPageUI.prototype[i] = UIBase.prototype[i];
}

ChatPageUI.prototype.start = function()
{
    UIBase.prototype.start.call(this);
}

ChatPageUI.prototype.end = function()
{
    UIBase.prototype.end.call(this);
}