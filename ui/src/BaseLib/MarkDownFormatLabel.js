/**
 * Created by Administrator on 2016/1/27.
 */
function MarkDownFormatLabel()
{
    HtmlFormatLabel.call(this);
    this.pText;
   // this.removeProperty("mText");
    Object.defineProperty(this,"mText",{
        set : function(value){
            this.pText = marked(value);
            this.updateImage();
        },
        get : function(){
            return this.pText;
        }
    });
}

for(var i in HtmlFormatLabel.prototype)
{
    MarkDownFormatLabel.prototype[i] = HtmlFormatLabel.prototype[i];
}
