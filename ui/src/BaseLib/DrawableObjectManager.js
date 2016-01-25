/**
 * Created by jiangyuke on 2016/1/23.
 */
DrawableObjectManager = function()
{
    this.DrawableObjectList = null;
    this.mCanvas = null;
    this.create = function(canvas)
    {
        this.mCanvas = canvas;
        this.DrawableObjectList = new List( function(a,b) {
            return a.mLevel < b.mLevel;
        });
    }
    this.draw = function()
    {
        this.DrawableObjectList.Ergodic(null,function(_null,now){
            now.drawShadow();
            now.drawOutLine();
            now.draw();
        });
    }
    this.addObject = function(obj)
    {
        this.DrawableObjectList.add(obj);
    }
    this.removeObject = function(obj)
    {
        this.DrawableObjectList.remove(obj);
    }
}
