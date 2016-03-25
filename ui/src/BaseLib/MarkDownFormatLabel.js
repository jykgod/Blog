/**
 * Created by Administrator on 2016/1/27.
 */
function MarkDownFormatLabel()
{
    HtmlFormatLabel.call(this);
    this.pText;
   // this.removeProperty("mText");
    this.deleteInvalidTag = function( data , tag )
    {
        var re = "";
        var i = -1;
        while( ( i = data.indexOf(tag) ) >= 0 )
        {
            re += data.substring( 0 , i - 1 );
            data = data.substring( i );
            data = data.substring( data.indexOf(">") + 1 );
        }
        re += data;
        return re;
    }
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
