//53 
var maxSubArray = function(nums) {
  let len = nums.length;
  let max = -Number.MAX_VALUE;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
};

//21
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1)
    
    let prev = dummy 

    while(l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
           prev.next = l1
           l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    if (l1 == null) {
        prev.next = l2
    } else {
        prev.next = l1
    }
    
    return dummy.next
};

// 203
var removeElements = function(head, val) {
    let dummy = new ListNode(-1)
    let pre = dummy 
    while(head !== null){
        if (head.val !== val){
            pre.next = new ListNode(head.val)
            pre = pre.next
        } 
        head = head.next
        
    }
    
    return dummy.next
};

var removeElements = function(head, val) {
    let curr = head 
    let dummy = new ListNode(-1) 
    dummy.next = head
    let prev = dummy
    while (curr !== null){
        if (curr.val == val){
            prev.next = curr.next
            curr = curr.next
            
        } else {
            curr = curr.next
            prev = prev.next
        }
    }
    return dummy.next
};