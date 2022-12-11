/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let cur = new ListNode();
    let dev = cur;
    if(list1==null){
        return list2;
    }
    if(list2==null){
        return list1;
    }
    if(list1.val > list2.val){
        cur.val = list2.val;
        list2 = list2.next;
    }
    else{
        cur.val = list1.val;
        list1 = list1.next;
    }
    
    while(list1 && list2){
        if(list1.val> list2.val){
            cur.next = list2;
            list2 = list2.next;
        }
        else{
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }
    console.log(cur);
    cur.next = list1 ? list1 : list2;
    return dev
};