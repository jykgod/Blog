/**
 * Created by Administrator on 2016/1/29.
 */
function UIBase(manager){
    this.initialed = false;
    this.manager = null;
    this.manager = manager;
    this.manager.addUI(this);
}

//UIBase.prototype.create = function(manager)
//{
//    this.manager = manager;
//    this.manager.addUI(this);
//}

UIBase.prototype.start = function()
{
    this.initialed = true;
}

UIBase.prototype.update = function()
{}

UIBase.prototype.end = function()
{
    this.manager.removeUI(this);
    this.manager = null;
}

UIBase.prototype.onResize = function()
{

}
