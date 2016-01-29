//“¿¿µ”⁄ListNode
function List( cmp )
{
    this.pHead = null;
    this.cmp = cmp;
    this.count = 0;
    this.add = function( obj )
    {
        var now = this.pHead;
        var p = new ListNode( obj );
        if( this.cmp == null || this.cmp == undefined || this.pHead == null || cmp( obj , this.pHead.data))
        {
            p.next = this.pHead;
            this.pHead = p;
            this.count ++;
            return;
        }
        var pre;
        while( now != null )
        {
            pre = now;
            now = now.next;
            if( now == null || cmp( obj , now.data ) )
            {
                p.next = now;
                pre.next = p;
                this.count ++;
                break;
            }
        }
    }
    this.remove = function( obj )
    {
        if ( this.pHead == null ) return;
        if ( this.pHead.data === obj )
        {
            this.pHead = this.pHead.next;
            this.count --;
            return;
        }

        var pre = this.pHead;
        var now = pre.next;
        while(now != null)
        {
            if(now.data === obj)
            {
                pre.next = now.next;
                this.count --;
                return;
            }
            pre = now;
            now = now.next;
        }
    }
    this.clear = function()
    {
        this.pHead = null;
        this.count = 0;
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
            if( cmd ( passThroughParam , now.data) == false ) break;
            now = now.next;
        }
    }
}
