/*

*/
function BaseObject(){
    this.mChanged = true;
    this.mVisible = true;           //���Ա�Ǹýڵ����״̬����ʹֵΪtrue�����ڽڵ㲻����ʱ��Ȼ�����ӣ�
    this.mFatherVisible = true;     //���Ա�����ڽڵ����״̬��һ�������ڽڵ㴦�ڲ�����״̬����ֵӦΪfalse��
    this.mComponents = null;
    this.mFather = null;
    this.mLevel = 0;
    this.mCanvas;
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
pointIn : function(x,y){
    return this.rect.pointIn(x,y);
}
}