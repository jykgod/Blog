function ListNode( object ){
    this.data = object;
    this.next = null;
    this.visited = false;
}
//function addObjectInList( listHead,object ){
//    var now = listHead;
//    while(now.next != null)
//    {
//        if(now.next.data.getLevel() <  object.getLevel() )
//            now = now.next;
//        else break;
//    }
//    var p = new ListNode(object);
//    p.next = now.next;
//    now.next = p;
//}
//function removeObjectFromList(listHead, object ){
//    var now = listHead;
//    while(now.next != null){
//        if(now.next.data === object ) {
//            now.next = now.next.next;
//            return true;
//        }
//    }
//    return false;
//}