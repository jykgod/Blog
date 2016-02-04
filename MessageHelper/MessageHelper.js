/**
 * Created by Administrator on 2016/2/4.
 */
function MessagaHelper()
{
    if ( this.Instance == null )
    {
        this.Instance = this;
    }
    return this.Instance;

    this.sendMessageToServer = function( data )
    {

    }
}
MessageHelper.prototype.Instance = null;
