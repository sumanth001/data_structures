/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //make two list from given head. One would be head to mid and other would mid-end.
    //find the mid of linkedlist;
    //take list from mid to end and reverse it.
    // now merge the two list.

    var p1= head;
    var front = p1; 
    var p2 = head;
    while(p2 && p2.next && p2.next.next){
        p1 = p1.next;
        p2 = p2.next.next;
    }
    var rev = null;
    var curr = p1.next;
    while(curr){
        let temp = curr.next;
        curr.next = rev;
        rev = curr;
        curr = temp;
    }
    p1.next= null;


//    console.log(rev)
    var merge =front;
    front = front.next;
    var result = merge;
    var count =0;
    while(front || rev ){
        if(count%2==0 && rev){
            merge.next = rev;
            rev = rev.next;
            merge = merge.next;
        }
        if(count%2==1 && front){
            merge.next = front;
            front = front.next;
            merge = merge.next;
        }
        count++;
    }
    return result;
};
