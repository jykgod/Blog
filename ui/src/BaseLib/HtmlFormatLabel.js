/**
 * Created by jiangyuke on 2016/1/27.
 */
HtmlFormatLabel = function () {
    this.img = null;
    Object.defineProperty(this, "mText", {
        get: function () {
            return this.mText;
        },
        set: function (value) {
            this.mText = value;
            var data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + this.w + ' height = "' + this.h + '">';
            data += '<foreignObject width="100%" height="100%">';
            data += value;
            data += '</foreignObject></svg>';
            var DOMURL = window.URL || window.webkitURL || window;
            this.img = new Image();
            var svg = Blob([data], {type: 'image/svg+xml;charset=utf-8'});
            var url = DOMURL.createObjectURL(svg);
            this.img.onload = function () {
                DOMURL.revokeObjectURL(url);
            }
        }

    });
}