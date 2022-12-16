/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    var b = false;
    if(head==null){
        return b;
    }
    var p1 = head;
    var p2 = head.next;
    
    while(p2!==null){
        
        
        if(p1==p2){
            b=true;
            break;
        }
        if(!(p2.next && p2.next.next)){
            b=false;
            break;
        }
        p1= p1.next;
        
        p2 = p2.next.next;
    }
    return b;
    
};