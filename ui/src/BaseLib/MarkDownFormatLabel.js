/**
 * Created by Administrator on 2016/1/27.
 */
function MarkDownFormatLabel()
{
    HtmlFormatLabel.call(this);
    this.pText;
    Object.defineProperty(this,"mText",{
        set : function(value){
            value = marked(value);
            value = this.deleteInvalidTag(value,"hr");
            value = this.deleteInvalidTag(value,"img");
            this.pText = value;
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
