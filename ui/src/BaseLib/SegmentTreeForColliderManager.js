/**
 * Created by Administrator on 2016/1/23.
 * node has one important factor , the 'data'.
 * 'data' can be a unique data which has a factor 'level' to fix the tree.
 */
function SegmentTreeNodeForColliderManager( data )
{
    this.leftChild = null;
    this.rightChild = null;
    this.l;
    this.r;
    this.data = data;
}
function SegmentTreeForColliderManager()
{
    this.head = null;
    this.create = function( minNumber , maxNumber )
    {
        if ( minNumber > maxNumber ) return;
        this.head = this.build( null , minNumber , maxNumber , false );
    }
    this.add = function( data )
    {
        this.update(  );
    }
    /**
     * build the SegmentTree
     * @param data used to create the node;
     * @param l left number
     * @param r right number
     * @param force if force build all nodes under this node;
     * @returns {SegmentTreeNodeForColliderManager}
     */
    this.build = function(data, l , r , force )
    {
        var now = new SegmentTreeNodeForColliderManager( data );
        now.l = l;
        now.r = r;
        if( l == r || force == false )
        {
            return now;
        }
        var mid = ( r - l ) / 2 + l;
        now.leftChild = build( data , l , mid , true);
        now.rightChild = build( data , mid + 1 , r , true);
    }
    /**
     * so, is esay to add;but how to delete?
     * foolish design!
     * @param now
     * @param l
     * @param r
     * @param data
     * @param addOrDelete
     */
    this.update = function( now , l , r , data , addOrDelete )
    {

    }
    this.find = function( now , l , r )
    {
        if( l <= now.l && r >= now.r )
        {
            return now.data;
        }

        var mid = ( now.r - now.l ) / 2 + now.l;
        var leftData = null;
        var rightData = null;
        if ( mid >= l )
        {
            if( now.leftChild != null )
                leftData = find( now.leftChild , l , r );
            else
                leftData = now.data;
        }
        if ( mid < r)
        {
            if( now.rightChild != null )
                rightData = find( now.rightChild , l , r );
            else
                rightData = now.data;
        }
        //return
        if ( leftData != null && rightData == null ) return leftData;
        if ( leftData == null && rightData != null ) return rightData;
        if ( leftData != null && rightData != null )
        {
            if ( leftData.mLevel > rightData.mLevel )
                return leftData;
            else
                return rightData;
        }
        return null;
    }
}