/**
 * Created by jiangyuke on 2016/1/23.
 */
function Texture()
{
    BaseObject.call( this );
    this.src = null;
}

for (var i in BaseObject.prototype){
    Texture.prototype[i] = BaseObject.prototype[i];
}

Texture.prototype.createWith2Factor = function( canvas , src )
{
    this.mCanvas = canvas;
    this.src = src;
}