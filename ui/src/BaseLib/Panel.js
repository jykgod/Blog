
//objectManager = {
//    objectListHead : new ListNode(null),
//    reDrawObjectListHead : new ListNode(null),
//    nReDrawObjectListHead : new ListNode(null),
//    draw :  function () {                 //redraw the visible objects when they are changed;
//        var now = this.objectListHead;
//       // if(now == null) return;
//        this.reDrawObjectListHead = new ListNode(null);
//        this.nReDrawObjectListHead = new ListNode(null);
//        while(now.next != null){
//            now = now.next;
//            if(now.data.getIfVisible()){
//                if(now.data.getIfChange()) {
//                    addObjectInList(this.reDrawObjectListHead,now.data);
//                }
//                else{
//                    addObjectInList(this.nReDrawObjectListHead,now.data);
//                }
//            }
//        }
//        while(true){
//            var a = this.reDrawObjectListHead;
//            while(a.next != null){
//                a = a.next;
//                if( !a.visited ) break;
//            }
//            if(a == null || a.visited == true) break;
//            a.visited = true;
//            var b = this.nReDrawObjectListHead;
//            var pre = this.nReDrawObjectListHead;
//            while(b.next != null) {
//                pre = b;
//                b = b.next;
//                if (a.data.getIfTranparent()) {
//                    if (a.data.getIfCross(b.data)) {
//                        addObjectInList(this.reDrawObjectListHead, b.data);
//                        pre.next = b.next;
//                    }
//                } else if (a.data.getLevel() < b.data.getLevel()) {
//                    if (a.data.getIfCross(b.data)) {
//                        addObjectInList(this.reDrawObjectListHead, b.data);
//                        pre.next = b.next;
//                    }
//                }
//            }
//        }
//        now = this.reDrawObjectListHead;
//        while(now.next != null){
//            now = now.next;
//            now.data.draw();
//        }
//    },
//    addObject : function( object ){
//        addEventFunc( object );
//        addObjectInList( this.objectListHead, object);
//    },
//    removeObject : function( object ){
//        removeObjectFromList(this.objectListHead,object);
//    }
//}
function Panel(canvas){
    this.objectListHead = new ListNode(null);
    this.mCanvas = new Canvas(canvas);
}
Panel.prototype = {
    draw :  function () {                 //redraw the visible objects when they are changed;
        var now = this.objectListHead;
        var reDrawObjectListHead = new ListNode(null);
        var nReDrawObjectListHead = new ListNode(null);
        while(now.next != null){
            now = now.next;
            if(now.data.getIfVisible()){
                if(now.data.getIfChange()) {
                    addObjectInList(reDrawObjectListHead,now.data);
                }
                else{
                    addObjectInList(nReDrawObjectListHead,now.data);
                }
            }
        }
        while(true){
            var a = reDrawObjectListHead;
            while(a.next != null){
                a = a.next;//alert("shit");
                if( !a.visited ) break;
            }
            if(a.visited == true || a.data == null) break;
            a.visited = true;
            var b = nReDrawObjectListHead;
            var pre = nReDrawObjectListHead;
            while(b.next != null) {
                pre = b;
                b = b.next;
                if (a.data.getIfCross(b.data)) {
                        addObjectInList(reDrawObjectListHead, b.data);
                        pre.next = b.next;
                    }
                }
            }
        now = reDrawObjectListHead;
        while(now.next != null){
            //alert("pause");
            now = now.next;
            now.data.draw();
        }
    },
    addObject : function( object ){
        object.setCanvas(this.mCanvas.canvas);
        addEventFunc( object );
        addObjectInList( this.objectListHead, object);
    },
    removeObject : function( object ){
        removeObjectFromList(this.objectListHead,object);
    }
}
