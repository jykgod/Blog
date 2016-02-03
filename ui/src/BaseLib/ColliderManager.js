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
        var tmp =new function(){
            this.level = -90000;
            this.x = x;
            this.y = y;
        };
        this.collderList.Ergodic( tmp , function( tmp , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( tmp.x , tmp.y ) &&
                (tmp.level == -90000 || tmp.level == collider.mLevel))
            {
                tmp.level = collider.mLevel;
                collider.onClick( tmp.x , tmp.y );
            }
            else if(tmp.level != -90000 && tmp.level != collider.mLevel)
            {
                return false;
            }
        });
    }
    this.onMouseDown = function( x , y )
    {
        var tmp =new function(){
            this.level = -90000;
            this.x = x;
            this.y = y;
        };
        this.collderList.Ergodic( tmp , function( tmp , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( tmp.x , tmp.y ) &&
                (tmp.level == -90000 || tmp.level == collider.mLevel))
            {
                tmp.level = collider.mLevel;
                collider.onMouseDown( tmp.x , tmp.y );
            }
            else if(tmp.level != -90000 && tmp.level != collider.mLevel)
            {
                return false;
            }
        });
    }
    this.onMouseMove = function( x , y )
    {
        var tmp =new function(){
            this.x = x;
            this.y = y;
            this.level = -90000;
            this.colliderManager = null;
        };
        tmp.colliderManager = this;
        this.mPointerOnColliders.clear();
        this.collderList.Ergodic( tmp , function( tmp , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( tmp.x , tmp.y ) &&
                (tmp.level == -90000 || tmp.level == collider.mLevel))
            {
                tmp.level = collider.mLevel;
                tmp.colliderManager.mPointerOnColliders.add(collider);
                collider.onMouseMove( tmp.x , tmp.y );
            }
            else if(tmp.level != -90000 && tmp.level != collider.mLevel)
            {
                return false;
            }
        });
    }
    this.onMouseUp = function( x , y )
    {
        var tmp =new function(){
            this.x = x;
            this.y = y;
            this.level = -90000;
        };
        this.collderList.Ergodic( tmp , function( tmp , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( tmp.x , tmp.y ) &&
                (tmp.level == -90000 || tmp.level == collider.mLevel))
            {
                tmp.level = collider.mLevel;
                collider.onMouseUp( tmp.x , tmp.y );
            }
            if( collider.getIfVisible() )
            {
                collider.onRelease( tmp.x , tmp.y );
            }
        });
    }
}
