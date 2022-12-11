function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}
let reverseList = function(head){
    if(head || head.next==null){
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}