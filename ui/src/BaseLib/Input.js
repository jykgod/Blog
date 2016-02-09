/**
 * Created by Administrator on 2016/2/7.
 */
function Input()
{
    this.input = null;
    this.z = 0;
}
Input.prototype.setPosition = function( x , y )
{
    this.input.style.left = x;
    this.input.style.top = y;
}

Input.prototype.value = function()
{
    return this.input.value;
}

Input.prototype.setPositionAndSize = function(x,y,w,h,zIndex)
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

Input.prototype.setVisible = function(visible)
{
    if(visible == false)
        this.frame.style.display = "none";
    else
        this.frame.style.display = "block";
}

Input.prototype.create = function(fatherName,type)
{
    var fatherNode = document.getElementById( fatherName );
    this.input = document.createElement('input');
    this.input.type = type;
    this.input.style.position = "absolute";
    this.input.maxLength = 15;
    this.setPositionAndSize(0,0,100,10,0);
    fatherNode.appendChild(this.input);
}