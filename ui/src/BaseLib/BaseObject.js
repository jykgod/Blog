/*

*/
function BaseObject(){
    this.mChanged = true;
    this.mVisible = true;
    this.mPointerOn = false;
    this.mTransparent = false;
    this.mComponents = null;
    this.mLevel = 0;
    this.color = "#FFFFFF";
    this.mCanvas;
    this.isImageBackGround = false;
    this.image = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
}
BaseObject.prototype = {
onClick : function(x,y){},
onMouseDown : function(x,y){},
onMouseUp : function(x,y){},
onMouseMove : function(x,y){},
draw : function(){},
getLevel : function(){
    return this.mLevel;
},
setLevel : function( level ){
    this.mLevel = level;
},
getIfPointerOn : function(){
    return this.mPointerOn;
},
getIfTransparent : function(){
    return this.mTransparent;
},
setTransparent: function( transparent ){
    this.mTransparent = transparent;
},
getIfChange : function(){
    return this.mChanged;
},
getIfVisible : function(){
    return this.mVisible;
},
setChange : function( change ){
    this.mChanged = change;
},
setVisible : function( visible ){
    this.mVisible = visible;
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
pointerOnIt : function(x,y){
    if(x>(this.x+this.mCanvas.x)&&x<(this.x+this.mCanvas.x+this.w))
        if(y>(this.y+this.mCanvas.y)&&y<(this.y+this.mCanvas.y+this.h)){
            return this.mPointerOn = true;
        }
    return this.mPointerOn = false;
},
 create : function(canvas){
    this.mCanvas = canvas;
    this.mComponents = new ListNode( null );
 },
 addComponent : function(obj){
    addObjectInList( this.mComponents , obj );
 },
 removeComponent : function(obj){
    removeObjectFromList( this.mComponents , obj );
 },
setPosition : function(x,y){
    this.x = x;
    this.y = y;
},
setSize : function(w,h){
    this.w = w;
    this.h = h;
},
setImage : function(img) {
    this.image = img;
    this.isImageBackGround = true;
},
drawImage : function(){
    if(this.image == null) console.log("ImageButton can't find the image!");
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
}
}