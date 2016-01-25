function ColliderManager()
{
    this.mCanvas;
    this.mPointerOnCollider;
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
        var tmp = function(){
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
                collider.onClick();
            }
            else if(tmp.level != -90000)
            {
                return false;
            }
        });
    }
    this.onMouseDown = function( x , y )
    {
        var tmp = function(){
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
                collider.onMouseDown();
            }
            else if(tmp.level != -90000)
            {
                return false;
            }
        });
    }
    this.onMouseMove = function( x , y )
    {
        var tmp = function(){
            this.x = x;
            this.y = y;
            this.level = -90000;
            this.colliderManager = null;
        };
        tmp.colliderManager = this;
        this.collderList.Ergodic( tmp , function( tmp , collider )
        {
            if( collider.getIfVisible() &&
                collider.pointIn( tmp.x , tmp.y ) &&
                (tmp.level == -90000 || tmp.level == collider.mLevel))
            {
                tmp.level = collider.mLevel;
                tmp.colliderManager.mPointerOnCollider = collider;
                collider.onMouseMove();
            }
            else if(tmp.level != -90000)
            {
                return false;
            }
        });
    }
    this.onMouseUp = function( x , y )
    {
        var tmp = function(){
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
                collider.onMouseUp();
            }
            else if(tmp.level != -90000)
            {
                return false;
            }
        });
    }
}
