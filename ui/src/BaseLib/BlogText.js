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
}

BlogText.prototype.setLevel = function(zIndex)
{
    this.zIndex = zIndex;
    this.frame.style.zIndex = zIndex;
}


BlogText.prototype.setRect = function(x,y,w,h)
{
    this.mRect = new Rect(x,y,w,h);
    this.frame.style.left = x;
    this.frame.style.top = y;
    this.frame.style.width = w;
    this.frame.style.height = h;
    this.frame.style.position = "absolute";
    this.frame.style.border = "0";
    this.frame.style.display = "none";
}

BlogText.prototype.createWithFatherName = function(fatherName)
{
    this.fatherName = fatherName;
    this.setLevel(0);
    this.setRect(0,0,1,1);
}

BlogText.prototype.createWithFatherNameAndPosition = function(fatherName,x,y,w,h,zIndex)
{
    var fatherNode = document.getElementById( fatherName );
    this.frame = document.createElement('iframe');
    fatherNode.appendChild(this.frame);
    this.setLevel(zIndex);
    this.setRect(x,y,w,h);
}

BlogText.prototype.setText = function(text)
{
    var data = '<head><link rel="stylesheet" href="ui/src/BaseLib/highlight/styles/default.css">';
    data +='<script src="ui/src/BaseLib/highlight/highlight.pack.js"></script>';
    data +='<script>hljs.initHighlightingOnLoad();</script></head>';
    data += marked(text) ;
    <!--&lt;!&ndash; ��˵���ۿ� start &ndash;&gt;-->
    if (this.firstInited == false) {
        data += '<div id="dsDiv" class="ds-thread" data-thread-key="�뽫�˴��滻�����������վ���е�ID" data-title="���滻�����µı���" data-url="���滻�����µ���ַ" ></div>';
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
    //if (this.frame != null) {
    //    fatherNode.removeChild(this.frame);
    //    if(navigator.userAgent.indexOf("MSIE") > 0)
    //    {
    //        CollectGarbage();
    //    }
    //}
    this.frame = document.createElement('iframe');
    fatherNode.appendChild(this.frame);
    this.setLevel(this.zIndex);
    this.setRect(this.mRect.x, this.mRect.y, this.mRect.w, this.mRect.h);
    var theDoc =  this.frame.contentWindow;
    theDoc.document.write(data);
    theDoc.document.close();
}

BlogText.prototype.setVisible = function(visible)
{
    if (visible == true) {
        //this.frame.style.display = "block";
    }
    else {
        //this.frame.style.display = "none";
        var fatherNode = document.getElementById(this.fatherName);
        if (this.frame != null) {
            var theDoc = this.frame.contentWindow;
            theDoc.document.write("");
            theDoc.document.close();
            fatherNode.removeChild(this.frame);
            //��˵IE�ᵼ���ڴ�й¶
            if (navigator.userAgent.indexOf("MSIE") > 0) {
                CollectGarbage();
            }
        }
    }
}