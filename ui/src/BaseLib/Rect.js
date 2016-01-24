/**
 * Created by jiangyuke on 2016/1/24.
 */
function Rect(x,y,w,h)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Rect.prototype.pointIn = function(x,y)
{
    return ( this.x <= x && this.x + this.w >= x && this.y <= y && this.y + this.h >= y );
}

Rect.prototype.translate = function(x,y)
{
    this.x += x;
    this.y += y;
}

Rect.prototype.isCross = function(rect)
{
    return rect.x<=this.x + this.w && this.x <= rect.x + rect.w && rect.y<=this.y + this.h && this.y <= rect.y + rect.h;
}