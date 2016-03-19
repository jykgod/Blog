/**
 * Created by jiangyuke on 2016/1/27.
 */
HtmlFormatLabel = function () {
    DrawableObject.call(this);
    this.img = null;
    this.pText = "";
    Object.defineProperty(this, "mText", {
        configurable : true,
        get: function () {
            return this.pText;
        },
        set: function (value) {
            this.pText = value;
            this.updateImage();
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
HtmlFormatLabel.prototype.updateImage = function () {
    //var data = '<head><link rel="stylesheet" href="http://yandex.st/highlightjs/8.0/styles/solarized_dark.min.css">';
    //data +='<script src="http://yandex.st/highlightjs/8.0/highlight.min.js"></script>';
    //data +='<script>hljs.initHighlightingOnLoad();</script></head>';
    var data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.w + '" height = "' + this.h + '">';
    data += '<foreignObject width="100%" height="100%">';
    data += '<div xmlns="http://www.w3.org/1999/xhtml" >';
    data += this.mText;
    data += '</div></foreignObject></svg>';
    console.log(data);
    var DOMURL = window.URL || window.webkitURL || window;
    this.img = new Image();
    var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
    this.img.onload = function () {
        DOMURL.revokeObjectURL(url);
    }
    this.img.src = url;
}

HtmlFormatLabel.prototype.setSize = function (w,h) {
    this.w = w;
    this.h = h;
    this.updateImage();
}

HtmlFormatLabel.prototype.draw = function () {
    var fatherPosition = this.getFatherPosition();
    if(this.img != null && this.img.width != 0)
        this.mCanvas.mContext.drawImage(this.img, this.x + fatherPosition.x, this.y + fatherPosition.y, this.w, this.h);
}

HtmlFormatLabel.prototype.drawShadow = function () {
    return;
}

HtmlFormatLabel.prototype.drawOutLine = function () {
    return;
}