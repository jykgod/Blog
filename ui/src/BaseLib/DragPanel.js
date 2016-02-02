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
    this.dragFixX = 0;
    this.dragFixY = 0;
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

DragPanel.prototype.setSize = function(w, h)
{
    Panel.prototype.setSize.call(this, w, h);
    if (this.mCollider != null)
        this.mCollider.setSize(w, h);
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
            var cXMax = 0;
            var cXMin = -this.w + this.dragFixX;
            if (cXMin < cXMax) {
                resultX += ((x - this.pointerDownPoint.x) * 1.0) / 5;
                if (resultX < cXMin) resultX = cXMin;
                if (resultX > cXMax) resultX = cXMax;
            }
        }
        if (this.mAxisYMove) {
            var cYMax = 0;
            var cYMin = -this.h + this.dragFixY;
            if (cYMin < cYMax) {
                resultY += ((y - this.pointerDownPoint.y) * 1.0) / 5;
                if (resultY < cYMin) resultY = cYMin;
                if (resultY > cYMax) resultY = cYMax;
            }
        }
        this.setPosition(resultX, resultY);
    }
}