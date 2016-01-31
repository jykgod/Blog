/**
 * Created by Administrator on 2016/1/30.
 */
function UIManager()
{
    this.UIList = null;
    this.interval = null;
}

UIManager.prototype.create = function()
{
    this.UIList = new List(null);
    this.setUpdateDeltaTime(30);
}

UIManager.prototype.addUI = function(ui)
{
    this.UIList.add(ui);
}

UIManager.prototype.removeUI = function(ui)
{
    this.UIList.remove(ui);
}


UIManager.prototype.setUpdateDeltaTime = function( time ){
    if(this.interval != null) {
        clearInterval(this.interval);
    }
    var temp = this;
    this.interval = setInterval(function(){temp.update()},time);
}

UIManager.prototype.update = function(){
    this.UIList.Ergodic(this,function(manager,now)
    {
        if(now.initialed == false)
        {
            now.start();
            return;
        }
        now.update();
    });

}

UIManager.prototype.onResize = function(){
    this.UIList.Ergodic(this,function(manager,now)
    {
        if(now.initialed == true)
        {
            now.onResize();
            return;
        }
    });
}
