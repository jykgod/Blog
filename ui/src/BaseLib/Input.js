/**
 * Created by Administrator on 2016/2/7.
 */
function Input()
{
    this.input = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.z = 0;
}

Input.prototype.setPosition(x,y,w,h,zIndex)
{
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.z = zIndex;
    this.input.width = w;
    this.input.height = h;
    this.input.style.left = x;
    this.input.style.top = y;
    this.input.style.zIndex = zIndex;
}

Input.prototype.create = function(fatherName,type)
{
    var fatherNode = document.getElementById( fatherName );
    this.input = document.createElement('input');
    this.input.type = type;
    this.input.style.position = "absolute";
    this.setPosition(0,0,100,10,0);
    fatherNode.appendChild(fatherNode);
}