//“¿¿µ”⁄ListNode
function List( cmp )
{
    this.pHead = null;
    this.cmp = cmp;
    this.add = function( obj )
    {
        var now = this.pHead;
        var p = new ListNode( obj );
        if( this.cmp == null || this.cmp == undefined || this.pHead == null)
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
            if( cmp( obj.data , now.data ) || now.next == null )
            {
                p.next = now;
                pre.next = p;
                break;
            }
        }
    }
    this.remove = function( obj )
    {
        if ( this.pHead == null ) return;
        if ( this.pHead === obj )
        {
            this.pHead = this.pHead.next;
            return;
        }

        var pre = this.pHead;
        var now = pre.next;
        while(now != null)
        {
            if(now === obj)
            {
                pre.next = now.next;
                return;
            }
            pre = now;
            now = now.next;
        }
    }
    /**
     * ergodic function
     * @passThroughParam as the name,this param will pass through the cmd return to the out;
     * @param cmd the command need to do
     * @constructor
     */
    this.Ergodic = function( passThroughParam , cmd )
    {
        var now = this.pHead;
        while(now != null)
        {
            cmd ( passThroughParam , now);
            now = now.next;
        }
    }
}