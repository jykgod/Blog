//“¿¿µ”⁄ListNode
function List( cmd )
{
    this.pHead = null;
    this.cmd = cmd;
    this.add = function( obj )
    {
        var now = this.pHead;
        var p = new ListNode( obj );
        if( this.cmd == null || this.cmd == undefined || this.pHead == null)
        {
            p.next = this.pHead;
            this.pHead = p;
            return;
        }
        var pre;
        while( now.next != null )
        {
            pre = now;
            now = now.next;
            if( cmd( obj , now ) || now.next == null )
            {
                p.next = now;
                pre.next = p;
                break;
            }
        }
    }
}