//392
var isSubsequence = function(s, t) {
    let i = 0
    let j = 0
    while (i < s.length && j < t.length ){
        if (s[i] == t[j]){
            i+=1
        } 
        j+=1
    }
    if (i == s.length){
        return true
    } 
    return false 
};

//1200
var minimumAbsDifference = function (arr) {
    let sortArr = arr.sort(function (a, b) { return a - b })
    let dic = {}
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < sortArr.length; i++) {
        let sub = Math.abs(sortArr[i] - sortArr[i + 1])
        if (sub < min) {
            min = sub
            dic[min] = [[sortArr[i], sortArr[i + 1]]]
        } else if (sub in dic) {
            dic[sub].push([sortArr[i], sortArr[i + 1]])
        }

    }
    return dic[min]
};

//283
var moveZeroes = function (nums) {
    let count = 0
    let newNums = nums
    let i = 0
    while (i < newNums.length) {
        if (nums[i] == 0) {
            count += 1
            nums.splice(i, 1)
            i -= 1
        }
        i++
    }
    while (count > 0) {
        nums.push(0)
        count -= 1
    }
    return nums
};

//896
var isMonotonic = function (A) {
    let answer = isPositive(A[0], A[1])
    for (let i = 1; i < A.length - 1; i++) {
        if (answer == 'zero') {
            answer = isPositive(A[i], A[i + 1])
        } else if (isPositive(A[i], A[i + 1]) != answer && (A[i] - A[i + 1]) != 0) {
            return false
        }
    }
    return true
};

function isPositive(num1, num2) {
    if ((num1 - num2) > 0) {
        return 'positive'
    } else if ((num1 - num2) < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}



//845

var longestMountain = function(A) {
    if (A.length < 3) {
        return 0
    }
    
    let peak = []
    for (let i = 0; i < A.length; i++) {
        if (A[i-1] < A[i] && A[i+1] < A[i]){
            peak.push(i)
        }
    }
    
    let result = 0
    for(let i = 0; i < peak.length; i++) {
        let leftLength = findLeftLength(A, peak[i])
        let rightLength = findRightLength(A, peak[i])
        let currPeakLength = leftLength + rightLength + 1
        if (currPeakLength > result) {
            result = currPeakLength
        }
    }
    return result
    
};

var findLeftLength = function (A, peak) {
    let i = 1
    let result = 0
    while (A[peak - i] < A[peak - i + 1] ) {
        result +=1 
        i+=1
    }
    return result 
}

var findRightLength = function (A, peak) {
    let i = 1
    let result = 0
    while(A[peak+i] < A[peak+i-1]) {
        result +=1 
        i+=1
    }
    return result 
}