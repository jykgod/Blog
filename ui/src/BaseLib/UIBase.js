/**
 * Created by Administrator on 2016/1/29.
 */
function UIBase(manager,canvas,name){
    this.initialed = false;
    this.manager = null;
    this.baseNode = null;
    this.name = name;
    this.mCanvas = canvas;
    this.manager = manager;
    this.manager.addUI(this);
}

UIBase.prototype.start = function()
{
    this.initialed = true;
    this.baseNode = new BaseObject();
    this.baseNode.create(this.mCanvas);
}

UIBase.prototype.update = function()
{}

UIBase.prototype.end = function()
{
    this.manager.removeUI(this);
    this.manager = null;
    this.baseNode.setVisible(false);
}

UIBase.prototype.onResize = function()
{

}

UIBase.prototype.setVisible = function(show)
{
    if(show == true) console.log("show " + this.name);
    this.baseNode.setVisible(show);
}
