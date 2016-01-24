/**
 * Created by jiangyuke on 2016/1/24.
 */
function Rect()
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Rect.prototype.PointIn = function(x,y)
{
    return ( this.x <= x && this.x + this.w >= x && this.y <= y && this.y + this.h >= y );
}

Rect.prototype.translate = function(x,y)
{
    this.x += x;
    this.y += y;
}