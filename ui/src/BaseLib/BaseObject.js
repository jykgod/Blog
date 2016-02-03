/*

*/
function BaseObject(){
    this.mChanged = true;
    this.mVisible = true;           //用以标记该节点可视状态（即使值为true当祖宗节点不可视时依然不可视）
    this.mFatherVisible = true;     //用以标记祖宗节点可视状态（一旦有祖宗节点处于不可视状态，该值应为false）
    this.mComponents = null;
    this.mFather = null;
    this.mLevel = 0;
    this.mCanvas = null;
    this.mRect = new Rect(0,0,0,0);
    Object.defineProperty(this,'x',{
        get: function(){
            return this.mRect.x;
        },
        set: function(newValue){
            this.mRect.x = newValue;
        }
    });
    Object.defineProperty(this,'y',{
        get: function(){
            return this.mRect.y;
        },
        set: function(newValue){
            this.mRect.y = newValue;
        }
    });
    Object.defineProperty(this,'w',{
        get: function(){
            return this.mRect.w;
        },
        set: function(newValue){
            this.mRect.w = newValue;
        }
    });
    Object.defineProperty(this,'h',{
        get: function(){
            return this.mRect.h;
        },
        set: function(newValue){
            this.mRect.h = newValue;
        }
    });
}
BaseObject.prototype = {
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
        this.mComponents.Ergodic( visible && this.mFatherVisible , function( visible , obj )
        {
            obj.setFatherVisible( visible );
        });
    }
},
setFatherVisible : function( visible ){
    this.mFatherVisible = visible;
    if (this.mComponents != null)
    {
        this.mComponents.Ergodic( visible && this.mVisible , function( visible , obj )
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
    var fatherPosition1 = this.getFatherPosition();
    var rect1 = new Rect ( fatherPosition1.x + this.x , fatherPosition1.y + this.y , this.w , this. h );
    var fatherPosition2 = this.getFatherPosition();
    var rect2 = new Rect ( fatherPosition2.x + this.x , fatherPosition2.y + this.y , this.w , this. h );
    return rect1.isCross( rect2 );
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
    if( this.mFather != null ) {
        function pos(obj) {
            this.x = obj.mFather.x + obj.mFather.getFatherPosition().x;
            this.y = obj.mFather.y + obj.mFather.getFatherPosition().y;
        }
        return new pos(this);
    }
    else
        return new function()
        {
            this.x = 0;
            this.y = 0;
        }
},
setLevel : function(level){
    if(level == this.mLevel) return;
    var temp = level - this.mLevel;
    this.mLevel = level;
    this.mComponents.Ergodic(temp,function(temp,now)
    {
        now.setLevel(now.mLevel + temp);
    });
},
pointIn : function(x,y){
    var fatherPosition = this.getFatherPosition();
    var rect = new Rect ( fatherPosition.x + this.x + this.mCanvas.x, fatherPosition.y + this.y + this.mCanvas.y, this.w , this. h );
    return rect.pointIn(x,y);
}
}