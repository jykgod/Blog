/*

*/
function BaseObject(){
    this.mChanged = true;
    this.mVisible = true;           //用以标记该节点可视状态（即使值为true当祖宗节点不可视时依然不可视）
    this.mFatherVisible = true;     //用以标记祖宗节点可视状态（一旦有祖宗节点处于不可视状态，该值应为false）
    //this.mPointerOn = false;
    //this.mTransparent = false;
    this.mComponents = null;
    this.mFather = null;
    this.mLevel = 0;
    //this.color = "#FFFFFF";
    this.mCanvas;
    //this.isImageBackGround = false;
    //this.image = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
}
BaseObject.prototype = {
//onClick : function(x,y){},
//onMouseDown : function(x,y){},
//onMouseUp : function(x,y){},
//onMouseMove : function(x,y){},
draw : function(){},
getLevel : function(){
    return this.mLevel;
},
setLevel : function( level ){
    this.mLevel = level;
},
//getIfPointerOn : function(){
//    return this.mPointerOn;
//},
//getIfTransparent : function(){
//    return this.mTransparent;
//},
//setTransparent: function( transparent ){
//    this.mTransparent = transparent;
//},
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
pointInRect : function(x,y){
    return ( x >= this.x && y >= this.y && x <= this.x + this.w && y <= this.y + this.h );
}
//setImage : function(img) {
//    this.image = img;
//    this.isImageBackGround = true;
//},
//drawImage : function(){
//    if(this.image == null) console.log("ImageButton can't find the image!");
//    ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
//}
}