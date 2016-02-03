/**
 * Created by Administrator on 2016/1/28.
 */
function BlogText()
{
    this.mRect = new Rect(0,0,1,1);
    this.zIndex = 0;
    this.frame = null;
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
    var fatherNode = document.getElementById( fatherName );
    this.frame = document.createElement('iframe');
    fatherNode.appendChild(this.frame);
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
    var data = '<head><link rel="stylesheet" href="BaseLib/highlight/styles/default.css">';
    data +='<script src="BaseLib/highlight/highlight.pack.js"></script>';
    data +='<script>hljs.initHighlightingOnLoad();</script></head>';
    data += marked(text) ;
    var theDoc =  this.frame.contentWindow;
    theDoc.document.write(data);
    theDoc.document.close();
}

BlogText.prototype.setVisible = function(visible)
{
    if(visible == false)
        this.frame.style.display = "none";
    else
        this.frame.style.display = "block";
}