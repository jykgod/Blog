//function DragPanel(canvas){
//    BaseObject.call(this);
//    Panel.call(this,canvas);
//    this.x = 0;
//    this.y = 0;
//    this.w = this.mCanvas.w;
//    this.h = this.mCanvas.h;
//    this.initialPosition = new Object();
//    this.offset = new Object();
//    this.offset.x = 0;
//    this.offset.y = 0;
//    this.mVertical = true;
//    this.mHorizontal = false;
//    this.mLayoutType = this.mHorizontal;
//    addEventFunc(this);
//}
//
//for (var i in BaseObject.prototype){
//    DragPanel.prototype[i] = BaseObject.prototype[i];
//}
//
//for (var i in Panel.prototype){
//    DragPanel.prototype[i] = Panel.prototype[i];
//}
//
//DragPanel.prototype.draw = function(){
//    if ( this.getIfChange() == false) return;
//    var ctx=this.getCanvas().canvas.getContext("2d");
//    if(this.mTransparent) ctx.alpha= this.alpha;
//    /*-----------------------clear the mRect---------------------------*/
//    if(this.mTransparent) {
//            ctx.clearRect(this.x, this.y, this.x + this.w, this.y + this.h);
//    }
//    /*----------------------draw the background--------------------------*/
//    if(this.isImageBackGround == false){
//        ctx.fillStyle = this.color;
//        ctx.fillRect(this.x,this.y,this.x+this.w,this.y+this.h);
//    }else{
//        this.drawImage();
//    }
//    /*---------------------draw the object in it-------------------------*/
//    var now = this.objectListHead;
//    while(now.next != null){
//        now = now.next;
//        if ( this.mLayoutType == this.mHorizontal ) now.data.x = now.data.x + this.offset.x;
//        else now.data.y = now.data.y + this.offset.y;
//        now.data.draw();
//    }
//    this.offset.x = 0;
//    this.offset.y = 0;
//    this.setChange(false);
//}
//
//DragPanel.prototype.reSort =function(delta){
//    var now = this.objectListHead;
//    var nowtemp = 0;
//    while(now.next != null){
//        now = now.next;
//        if ( this.mLayoutType == this.mHorizontal ) {
//            now.data.x = nowtemp;
//            nowtemp += now.data.w;
//        }
//        else {
//            now.data.y = nowtemp;
//            nowtemp += now.data.h;
//        }
//        nowtemp += delta;
//    }
//}
//
//DragPanel.prototype.setType = function(ttype){
//    this.mLayoutType = ttype;
//    this.setChange(true);
//}
//
//DragPanel.prototype.onMouseMove = function(x,y){
//    var now = this.objectListHead;
//    while (now.next != null) {
//            now = now.next;
//            if(now.data.pointerOnIt(x, y))
//                now.data.onMouseMove(x,y);
//    }
//    if(this.isPressDown){
//        this.offset.x = x - this.initialPosition.x;
//        this.offset.y = y - this.initialPosition.y;
//        this.initialPosition.x = x;
//        this.initialPosition.y = y;
//        this.setChange(true);
//    }
//}
//
//DragPanel.prototype.onClick = function(x,y){
//    var now = this.objectListHead;
//    while(now.next != null){
//        now = now.next;
//        now.data.onClick(x,y);
//        if(now.data.getIfChange()) this.setChange(true);
//    }
//}
//
//DragPanel.prototype.onMouseDown = function(x,y){
//    if(this.mPointerOn) {
//        this.isPressDown = true;
//        this.initialPosition.x = x;
//        this.initialPosition.y = y;
//        var now = this.objectListHead;
//        while(now.next != null){
//            now = now.next;
//            now.data.onMouseDown(x,y);
//            if(now.data.getIfChange()) this.setChange(true);
//        }
//    }
//}
//
//DragPanel.prototype.onMouseUp = function(x,y){
//    var now = this.objectListHead;
//    while(now.next != null){
//        now = now.next;
//        now.data.onMouseUp(x,y);
//        if(now.data.getIfChange()) this.setChange(true);
//    }
//    this.isPressDown = false;
//}
//
///*-------------all objects on the DragPanel will response the event flow the DragPanel response event func------------*/
//DragPanel.prototype.addObject = function(object){
//        object.setCanvas(this.mCanvas.canvas);
//        addObjectInList( this.objectListHead, object);
//}