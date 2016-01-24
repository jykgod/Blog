/*

*/
function BaseObject(){
    this.mChanged = true;
    this.mVisible = true;           //���Ա�Ǹýڵ����״̬����ʹֵΪtrue�����ڽڵ㲻����ʱ��Ȼ�����ӣ�
    this.mFatherVisible = true;     //���Ա�����ڽڵ����״̬��һ�������ڽڵ㴦�ڲ�����״̬����ֵӦΪfalse��
    this.mComponents = null;
    this.mFather = null;
    this.mLevel = 0;
    this.mCanvas = null;
    this.rect = new Rect(0,0,0,0);
    Object.defineProperty(this,'x',{
        get: function(){
            return this.rect.x;
        },
        set: function(newValue){
            this.rect.x = newValue;
        }
    });
    Object.defineProperty(this,'y',{
        get: function(){
            return this.rect.y;
        },
        set: function(newValue){
            this.rect.y = newValue;
        }
    });
    Object.defineProperty(this,'w',{
        get: function(){
            return this.rect.w;
        },
        set: function(newValue){
            this.rect.w = newValue;
        }
    });
    Object.defineProperty(this,'h',{
        get: function(){
            return this.rect.h;
        },
        set: function(newValue){
            this.rect.h = newValue;
        }
    });
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
    if( this.mFather != 0 )
    return function(){
        this.x = this.mFather.x + this.mFather.getFatherPosition().x;
        this.y = this.mFather.y + this.mFather.getFatherPosition().y;
    }
    else return function(){
        this.x = 0;
        this.y = 0;
    }
},
pointIn : function(x,y){
    var fatherPosition = this.getFatherPosition();
    var rect = new Rect ( fatherPosition.x + this.x , fatherPosition.y + this.y , this.w , this. h );
    return rect.pointIn(x,y);
}
}