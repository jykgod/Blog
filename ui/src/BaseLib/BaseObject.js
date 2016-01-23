/*

*/
function BaseObject(){
    this.mChanged = true;
    this.mVisible = true;           //用以标记该节点可视状态（即使值为true当祖宗节点不可视时依然不可视）
    this.mFatherVisible = true;     //用以标记祖宗节点可视状态（一旦有祖宗节点处于不可视状态，该值应为false）
    this.mComponents = null;
    this.mFather = null;
    this.mLevel = 0;
    this.mCanvas;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
}
BaseObject.prototype = {
draw : function(){},
getLevel : function(){
    return this.mLevel;
},
setLevel : function( level ){
    this.mLevel = level;
},
getIfChange : function(){
    return this.mChanged;
},
getIfVisible : function(){
    return this.mVisible && this.mFatherVisible;
},
setChange : function( change ){
    this.mChanged = change;
},
setVisible : function( visible ){
    this.mVisible = visible;
    if (this.mComponents != null)
    {
        this.mComponents.Ergodic( visible , function( visible , obj )
        {
            obj.setFatherVisible( visible );
        });
    }
},
setFatherVisible : function( visible ){
    this.mFatherVisible = visible;
    if (this.mComponents != null)
    {
        this.mComponents.Ergodic( visible , function( visible , obj )
        {
            obj.setFatherVisible( visible );
        });
    }
},
setCanvas : function(canvas){
    this.mCanvas = canvas;
},
getCanvas : function(){
    return this.mCanvas;
},
getIfCross : function(object){
    if(this.mCanvas.canvas === object.getCanvas().canvas) ;else return false;
    var tx = object.x;
    var ty = object.y;
    var tw = object.w;
    var th = object.h;
    return tx<=this.x + this.w && this.x <= tx +tw && ty<=this.y + this.h && this.y <= ty +th;
},
 create : function(canvas){
    this.mCanvas = canvas;
    this.mComponents = new List( null );
 },
 addComponent : function(obj){
    this.mComponents.add(obj);
     obj.mFather = this;
 },
 removeComponent : function(obj){
    this.mComponents.remove(obj);
 },
setPosition : function(x,y){
    this.x = x;
    this.y = y;
},
setSize : function(w,h){
    this.w = w;
    this.h = h;
},
getFatherPosition : function(){
    if( this.mFather != 0 )
    return function(){
        this.x = this.mFather.x + this.mFather.getFatherPosition().x;
        this.y = this.mFather.y + this.mFather.getFatherPosition().y;
        this.mLevel = this.mFather.mLevel + this.mFather.getFatherPosition().mLevel;
    }
},
pointInRect : function(x,y){
    return ( x >= this.x && y >= this.y && x <= this.x + this.w && y <= this.y + this.h );
}
}