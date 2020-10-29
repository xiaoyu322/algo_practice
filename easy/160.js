
//206
var reverseList = function(head) {
    let prev = null 
    let curr = head 
    while (curr !== null) {
        let n = curr.next 
        curr.next = prev 
        
        prev = curr 
        curr = n 
    }
    return prev
};

//234
var isPalindrome = function(head) {
    let result = []
    let curr = head 
    while (curr !== null) {
        result.push(curr.val)
        curr = curr.next
    }
    let i = 0
    let j = result.length - 1
    while (i < j){
        if (result[i] != result[j]){
            return false 
        }
        i++
        j--
    }
    return true 
};

//141
var hasCycle = function(head) {
    let curr = head 
    let hash = new Set()
    let i = 0
    while (curr != null) {
        if (hash.has(curr)) {
            return true 
        } else {
        hash.add(curr)}
        curr = curr.next 
        i++
    }
    return false 
};

//160
var getIntersectionNode = function(headA, headB) {
    let currA = headA 
    let hash = new Set()
    let currB = headB 
    
    while (currA !== null){
        hash.add(currA)
        currA = currA.next
    }
    while (currB !== null) {
        if (hash.has(currB)){
            return currB
        }
        currB = currB.next
    }
};