function ColliderManager()
{
    this.mCanvas;
    this.mPointerOnCollider;
    this.collderList = new List(function( a , b ){ return a.mLevel > b.mLevel;});
    this.create = function( canvas )
    {
        addEventFunc( this );
        this.mCanvas = canvas;
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
    this.onClick( x , y )
    {
        this.collderList.Ergodic( null , function( nothing , collider )
        {
            if( collider.getIfVisible() && collider.pointIn( x , y ) )
            {
                collider.onClick();
                return true;
            }
            return false;
        });
    }
    this.onMouseDown( x , y )
    {
        this.collderList.Ergodic( null , function( nothing , collider )
        {
            if( collider.getIfVisible() && collider.pointIn( x , y ) )
            {
                collider.onMouseDown();
                return true;
            }
            return false;
        });
    }
    this.onMouseMove( x , y )
    {
        this.collderList.Ergodic( this , function( colliderManager , collider )
        {
            if( collider.getIfVisible() && collider.pointIn( x , y ) )
            {
                colliderManager.mPointerOnCollider = collider;
                collider.onMouseMove();
                return true;
            }
            return false;
        });
    }
    this.onMouseUp( x , y )
    {
        this.collderList.Ergodic( null , function( nothing , collider )
        {
            if( collider.getIfVisible() && collider.pointIn( x , y ) )
            {
                collider.onMouseUp();
                return true;
            }
            return false;
        });
    }
}
