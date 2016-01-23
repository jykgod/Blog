/**
 * Created by jiangyuke on 2016/1/23.
 */
function Texture()
{
    DrawableObject.call( this );
    this.src = null;
}

for (var i in DrawableObject.prototype){
    Texture.prototype[i] = DrawableObject.prototype[i];
}

Texture.prototype.createWith2Factor = function( canvas , src )
{
    this.create(canvas);
    this.src = src;
}