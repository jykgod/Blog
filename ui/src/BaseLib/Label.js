/**
 * Created by jiangyuke on 2016/1/26.
 */
function Label() {
    DrawableObject.call(this);
    this.mText = "";
    this.mFont = null;
    this.textAlign = "center";
    this.textBaseline = "middle";
}

for (var i in DrawableObject.prototype) {
    Label.prototype[i] = DrawableObject.prototype[i];
}

Label.prototype.create = function (canvas, text , font) {
    DrawableObject.prototype.create.call(this, canvas);
    this.mText = text;
    if(font != null && font != undefined)
        this.mFont = font;
}

Label.prototype.draw = function () {
    this.mCanvas.mContext.textAlign = this.textAlign;
    this.mCanvas.mContext.textBaseline = this.textBaseline;
    if(this.mFont != null)
        this.mCanvas.mContext.font= this.mFont;
    this.mCanvas.mContext.fillStyle = this.mColor;
    var fatherPosition = this.getFatherPosition();
    //console.log(fatherPosition);
    this.mCanvas.mContext.fillText (this.mText, fatherPosition.x + this.x, fatherPosition.y + this.y);
}