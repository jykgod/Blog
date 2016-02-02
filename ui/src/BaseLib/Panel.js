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

Panel.prototype.resetPosition = function()
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