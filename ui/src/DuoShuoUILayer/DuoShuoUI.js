/**
 * Created by Administrator on 2016/2/17.
 */
function DuoShuoUI()
{
    this.div = document.getElementById("dsDiv");
    this.div.dataThreadKey = "0";
    this.div.dataTitle = "";
    this.div.dataUrl = "http://121.42.175.182/home/blog_clone/test.html";
    this.div.style.display = "none";
    this.div.style.position = "absolute";
    this.addTo = function( fatherNode )
    {
        fatherNode.appendChild(this.div);
    }
    this.setVisible = function (visible)
    {
        if(visible == false)
            this.div.style.display = "none";
        else
            this.div.style.display = "block";
    }
    this.setSize = function(w,h)
    {
        this.div.style.width = w;
        this.div.style.height = h;
    }
    this.setPosition = function(x,y)
    {
        this.div.style.top = y;
        this.div.style.left = x;
    }
}

DuoShuoUI.prototype.Instance = null;

DuoShuoUI.prototype.getInstance = function()
{
    if ( DuoShuoUI.prototype.Instance == null )
        DuoShuoUI.prototype.Instance = new DuoShuoUI();
    return DuoShuoUI.prototype.Instance;
}

