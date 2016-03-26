/**
 * Created by Administrator on 2016/1/28.
 */
function BlogText()
{
    this.mRect = new Rect(0,0,1,1);
    this.zIndex = 0;
    this.frame = null;
    this.id = "";
    this.firstInited = false;
    this.fatherName = "";
    this.setLevel = function (zIndex) {
        this.zIndex = zIndex;
    }
    this.setRect = function (x, y, w, h) {
        this.mRect = new Rect(x, y, w, h);
    }
    this.reFreshFramePosition = function () {
        this.frame.style.left = this.mRect.x;
        this.frame.style.top = this.mRect.y;
        this.frame.style.width = this.mRect.w;
        this.frame.style.height = this.mRect.h;
        this.frame.style.position = "absolute";
        this.frame.style.border = "0";
        this.frame.style.zIndex = this.zIndex;
    }
}

BlogText.prototype.createWithFatherName = function(fatherName)
{
    this.fatherName = fatherName;
}

BlogText.prototype.createWithFatherNameAndPosition = function(fatherName,x,y,w,h,zIndex)
{
    this.fatherName = fatherName;
    this.setLevel(zIndex);
    this.setRect(x,y,w,h);
}

BlogText.prototype.setNormalText = function ( text )
{
    var data = '<head><link rel="stylesheet" href="ui/src/BaseLib/highlight/styles/default.css">';
    data +='<script src="ui/src/BaseLib/highlight/highlight.pack.js"></script>';
    data +='<script>hljs.initHighlightingOnLoad();</script></head>';
    data += marked(text) ;
    var fatherNode = document.getElementById(this.fatherName);
    this.frame = document.createElement('iframe');
    fatherNode.appendChild(this.frame);
    this.reFreshFramePosition();
    var theDoc =  this.frame.contentWindow;
    theDoc.document.write(data);
    theDoc.document.close();
}

BlogText.prototype.setBlogText = function (text, title)
{
    var data = '<head><link rel="stylesheet" href="ui/src/BaseLib/highlight/styles/default.css">';
    data +='<script src="ui/src/BaseLib/highlight/highlight.pack.js"></script>';
    data +='<script>hljs.initHighlightingOnLoad();</script></head>';
    data += marked(text) ;
    <!--&lt;!&ndash; ��˵���ۿ� start &ndash;&gt;-->
    if (this.firstInited == false) {
        data += '<div id="dsDiv" class="ds-thread" data-thread-key="' + this.id + '" data-title="���滻�����µı���" data-url="http://121.42.175.182:10200/Blog.html" ></div>';
        data += '<script type="text/javascript">'
        data += 'var duoshuoQuery = {short_name:"jykblog"};'
        data += '(function() {'
        data += 'var ds = document.createElement("script");'
        data += 'ds.type = "text/javascript";ds.async = true;'
        data += 'ds.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//static.duoshuo.com/embed.js";'
        data += 'ds.charset = "UTF-8";'
        data += '(document.getElementsByTagName("head")[0]';
        data += '|| document.getElementsByTagName("body")[0]).appendChild(ds);'
        data += '})();'
        data += '</script>'
    }
    var fatherNode = document.getElementById(this.fatherName);
    this.frame = document.createElement('iframe');
    fatherNode.appendChild(this.frame);
    this.reFreshFramePosition();
    var theDoc =  this.frame.contentWindow;
    theDoc.document.write(data);
    theDoc.document.close();
}

BlogText.prototype.setVisible = function(visible)
{
    if (visible == true) {
        if (this.frame != null) {
            this.frame.style.display = "block";
        }
    }
    else {
        if (this.frame != null) {
            this.frame.style.display = "none";
        }
        //if (this.frame != null) {
        //    var fatherNode = document.getElementById(this.fatherName);
        //    var theDoc = this.frame.contentWindow;
        //    theDoc.document.write("");
        //    theDoc.document.close();
        //    fatherNode.removeChild(this.frame);
        //    this.frame = null;
        //    //��˵IE�ᵼ���ڴ�й¶
        //    if (navigator.userAgent.indexOf("MSIE") > 0) {
        //        CollectGarbage();
        //    }
        //}
    }
}