Panel = function()
{
    BaseObject.call(this);
    this.offsetX = 0;
    this.offsetY = 0;
}

for ( var i in BaseObject.prototype )
{
    Panel.prototype[i] = BaseObject.prototype[i];
}

/**
 * you must add all of the component in the panel then reset the position and the size;
 * 这里是个坑！因为这个函数不仅对位置进行了重设还对大小进行了重设，所以最好再所有组件都加完了再使用这个函数重设。
 */
Panel.prototype.resetPositionAndSize = function()
{
    var fix = function(){ }
    fix.x = 0;
    fix.y = 0;
    fix.maxX = this.w;
    fix.offsetX = this.offsetX;
    fix.offsetY = this.offsetY;
    fix.RealyMaxX = 0;
    fix.RealyMaxY = 0;
    this.mComponents.Ergodic( fix , function(fix,now){
        now.setPosition(fix.x,fix.y);
        if(fix.RealyMaxX < fix.x + now.w)
            fix.RealyMaxX = fix.x + now.w;
        if(fix.RealyMaxY < fix.y + now.h)
            fix.RealyMaxY = fix.y + now.h;
        if(fix.x + now.w * 2 > fix.maxX)
        {
            fix.x = 0;
            fix.y = fix.y + now.h + fix.offsetY;
        }
        else
            fix.x = fix.x + now.w + fix.offsetX;
    } );
    this.setSize(fix.RealyMaxX,fix.RealyMaxY);
}