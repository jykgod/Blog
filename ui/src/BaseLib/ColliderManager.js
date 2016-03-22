var AllColliderManager = new List(null);
function ColliderManager()
{
    this.mCanvas;
    this.mPointerOnColliders = new List(null);
    this.collderList = new List(function( a , b ){
        return a.mLevel > b.mLevel;
    });
    this.create = function( canvas )
    {
        this.mCanvas = canvas;
        addEventFunc( this );
        AllColliderManager.add(this);
    }
    this.addCollider = function ( collider )
    {
        if ( collider.w < 0 || collider.h < 0 )
        {
            return;
        }
        this.collderList.add( collider );
    }
    this.removeCollider = function ( collider )
    {
        this.collderList.remove( collider );
    }
    this.onClick = function( x , y )
    {
        var level = -90000
        this.collderList.Ergodic( null , function( _null , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( x , y ) &&
                (level == -90000 || level == collider.mLevel))
            {
                level = collider.mLevel;
                collider.onRelease( x , y );
            }
            else if(level != -90000 && level != collider.mLevel)
            {
                return false;
            }
        });
    }
    this.onMouseDown = function( x , y )
    {
        var level = -90000;
        this.collderList.Ergodic( null , function( _null , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( x , y ) &&
                (level == -90000 || level == collider.mLevel))
            {
                level = collider.mLevel;
                collider.onMouseDown( x , y );
            }
            else if(level != -90000 && level != collider.mLevel)
            {
                return false;
            }
        });
    }
    this.onMouseMove = function( x , y )
    {
        var level = -90000;
        this.mPointerOnColliders.clear();
        this.collderList.Ergodic( this , function( temp , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( x , y ) &&
                (level == -90000 || level == collider.mLevel))
            {
                level = collider.mLevel;
                temp.mPointerOnColliders.add(collider);
                collider.onMouseMove( x , y );
            }
            else
            {
                collider.onMouseMoveOut( x , y );
            }
        });
        AllColliderManager.Ergodic( this , function( temp , colliderManager ){
            if(temp != colliderManager) {
                colliderManager.otherCanvasOnMouseMove(x, y);
            }
        } );
    }
    this.onMouseUp = function( x , y )
    {
        var level = -90000;
        this.collderList.Ergodic( null , function( _null , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( x , y ) &&
                (level == -90000 || level == collider.mLevel))
            {
                level = collider.mLevel;
                collider.onMouseUp( x , y );
            }
            collider.onRelease( x , y );
        });
        AllColliderManager.Ergodic( null , function( _null , colliderManager ){
            if(temp != colliderManager) {
                colliderManager.otherCanvasOnMouseUp(x, y);
            }
        } );
    }
    this.otherCanvasOnMouseUp = function( x , y )
    {
        this.collderList.Ergodic( null , function( _null , collider )
        {
            collider.onRelease( x , y );
        });
    }
    this.otherCanvasOnMouseMove = function( x , y )
    {
        this.collderList.Ergodic( null , function( _null , collider )
        {
            collider.onMouseMoveOut( x , y );
        });
    }
}
