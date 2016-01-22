function ColliderManager( )
{
    this.mCanvas;
    this.create = function( canvas )
    {
        this.mCanvas = canvas;
    }
    this.addCollider = function ( collider )
    {
        if ( collider.w < 0 || collider.h < 0 )
        {
            return;
        }
    }
    this.removeCollider = function ( collider )
    {

    }
}
