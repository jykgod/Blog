/**
 * Created by jiangyuke on 2016/1/27.
 */
HtmlFormatLabel = function () {
    DrawableObject.call(this);
    this.img = null;
    this.pText = "";
    Object.defineProperty(this, "mText", {
        get: function () {
            return this.mText;
        },
        set: function (value) {
            this.pText = value;
            var data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.w + ' height = "' + this.h + '">';
            data += '<foreignObject width="100%" height="100%">';
            data += '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">';
            data += value;
            data += '</div></foreignObject></svg>';
            alert(data);
            var DOMURL = window.URL || window.webkitURL || window;
            this.img = new Image();
            var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
            var url = DOMURL.createObjectURL(svg);
            this.img.onload = function () {
                DOMURL.revokeObjectURL(url);
            }
        }

    });
}

for (var i in DrawableObject.prototype) {
    HtmlFormatLabel.prototype[i] = DrawableObject.prototype[i];
}

HtmlFormatLabel.prototype.create = function (canvas, text) {
    DrawableObject.prototype.create.call(this, canvas);
    this.mText = text;
}

HtmlFormatLabel.prototype.draw = function () {
    var fatherPosition = this.getFatherPosition();
    this.mCanvas.mContext.drawImage(this.img, this.x + fatherPosition.x, this.y + fatherPosition.y, this.w, this.h);
}

HtmlFormatLabel.prototype.drawShadow = function () {
    return;
}

HtmlFormatLabel.prototype.drawOutLine = function () {
    return;
}