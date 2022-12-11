/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let newHead = null;
    let current = head;
    while(current){
      tempNode =   current.next;
      current.next = newHead; 
      newHead = current;
      current = tempNode  
    }
    return newHead
   /* while(head.next!=null){
        
        head.next.next = head.next;
        head.next = null;
        newHead = head.next;
    }*/
    return newHead
};

function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
}

