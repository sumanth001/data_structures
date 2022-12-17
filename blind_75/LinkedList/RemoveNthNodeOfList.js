0/5
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var tempHead = head;
    if(tempHead==null){
        return tempHead;
    }
    var l = 0;
    while(tempHead){
        tempHead = tempHead.next;
        l++;
    }
    var r1 = l-n;
    tempHead = head;
    if(r1==0){
        if(tempHead.next){
            var tt = tempHead.next;
            tempHead = null;
            return tt;
        }
        else{
            return null;
        }
    }
    while(r1>0){
        
        r1--;
        if(r1==0){
        //    console.log(r1)
                  tempHead.next = tempHead.next.next;
            
               
        }
        else{
            tempHead= tempHead.next;
        }
    }
    return head;
};
