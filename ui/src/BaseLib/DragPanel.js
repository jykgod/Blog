/**
 * DragPanel
 * can Drag up-down or left-right;
 * hit:The panel always put the components start at left-top,
 * so I define this dragPanel can only move to left or top.
 * @constructor
 */
function DragPanel() {
    Panel.call(this);
    this.mCollider;
    this.onPressed = false;
    this.pointerDownPoint = new function () {
        this.x = 0;
        this.y = 0;
    }
    this.mAxisXMove = false;
    this.mAxisYMove = false;
    //拉到最右或最下方的位置根据需要进行修正
    //if you drag this object to max right or max bottom then it will add these two values to fix the position;
    this.dragMaxRightFixX = 0;
    this.dragMaxBottomFixY = 0;
    //计算得到的当前偏移值
    //calculated results,need use them to set this object's position;
    this.deltaX = 0;
    this.deltaY = 0;
    //下面四个参数代表dragPanel位置的取值范围，用于在设置位置的时候提供有效的参考
    //这里需要注意的是，因为我们默认panel的滚动只能朝上或朝左（因为panel是从左上角开始依次往后放置内部组件的）。
    //所以cXMax 和cYMax的值始终为0!
    this.cXMax = 0;
    this.cXMin = 0;
    this.cYMin = 0;
    this.cYMax = 0;
}

for (var i in Panel.prototype) {
    DragPanel.prototype[i] = Panel.prototype[i];
}

DragPanel.prototype.create = function (canvas) {
    Panel.prototype.create.call(this, canvas);
    this.mCollider = new Collider();
    this.mCollider.create(this, 0);
    var temp = this;
    this.mCollider.onMouseDown = function (x, y) {
        temp.onPressed = true;
        temp.onMouseDown(x, y);
    }
    this.mCollider.onClick = function (x, y) {
        temp.onClick(x, y);
    }
    this.mCollider.onMouseMove = function (x, y) {
        temp.onMouseMove(x, y);
    }
    this.mCollider.onMouseUp = function (x, y) {
        temp.onMouseUp(x, y);
    }
    this.mCollider.onRelease = function (x, y) {
        temp.onPressed = false;
        temp.onRelease(x, y);
    }
}
DragPanel.prototype.setPosition = function(x,y)
{
    var tempX = this.x;
    var tempY = this.y;
    if (this.cXMin < this.cXMax)
    {
        if(x < this.cXMin) x = this.cXMin;
        if(x > this.cXMax) x = this.cXMax;
        tempX = x;
    }
    if (this.cYMin < this.cYMax)
    {
        if(y < this.cYMin) y = this.cYMin;
        if(y > this.cYMax) y = this.cYMax;
        tempY = y;
    }
    Panel.prototype.setPosition.call(this,tempX,tempY);
}
DragPanel.prototype.setSize = function(w, h)
{
    Panel.prototype.setSize.call(this, w, h);
    if (this.mCollider != null)
        this.mCollider.setSize(w, h);
    this.cYMax = 0;
    this.cYMin = -this.h + this.dragMaxBottomFixY;
    this.cXMax = 0;
    this.cXMin = -this.w + this.dragMaxRightFixX;
}

DragPanel.prototype.onMouseDown = function (x, y) {
    this.pointerDownPoint.x = x;
    this.pointerDownPoint.y = y;
}

DragPanel.prototype.onMouseMove = function (x, y) {
    if (this.onPressed == true) {
        var resultX = this.x;
        var resultY = this.y;
        if (this.mAxisXMove) {
            if (this.cXMin < this.cXMax) {
                var num = (x - this.pointerDownPoint.x);
                if( num > 0 )
                    resultX -= (num * num * 1.0) / 1000;
                else
                    resultX += (num * num * 1.0) / 1000;
                if (resultX < this.cXMin) resultX = this.cXMin;
                if (resultX > this.cXMax) resultX = this.cXMax;
            }
        }
        if (this.mAxisYMove) {
            if (this.cYMin < this.cYMax) {
                var num = (y - this.pointerDownPoint.y);
                if( num > 0 )
                    resultY -= (num * num * 1.0) / 1000;
                else
                    resultY += (num * num * 1.0) / 1000;
                if (resultY < this.cYMin) resultY = this.cYMin;
                if (resultY > this.cYMax) resultY = this.cYMax;
            }
        }
        this.deltaX = resultX - this.x;
        this.deltaY = resultY - this.y;
        //this.setPosition(resultX, resultY);
    }
}


DragPanel.prototype.onMouseUp = function(w, h){}
DragPanel.prototype.onClick = function(w, h){}
DragPanel.prototype.onRelease = function(w, h){
    this.deltaX = 0;
    this.deltaY = 0;
}