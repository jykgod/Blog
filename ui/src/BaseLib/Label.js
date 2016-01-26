/**
 * Created by jiangyuke on 2016/1/26.
 */
function Label() {
    DrawableObject.call(this);
    this.mText = "";
}

for (var i in DrawableObject.prototype) {
    Label.prototype[i] = DrawableObject.prototype[i];
}

Label.prototype.create = function (canvas, text) {
    DrawableObject.prototype.create.call(this, canvas);
    this.mText = text;
}

Label.prototype.draw = function () {
    this.mCanvas.mContext.fillText(this.mText, this.x, this.y);
}