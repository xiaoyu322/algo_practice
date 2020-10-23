//509
var fib = function(N) {
    if (N <= 1) {
        return N
    }
    
    return fib(N - 1)+fib( N - 2)
};

//238
var productExceptSelf = function(nums) {
    let left = [1, nums[0]]
    let p = nums[0]
    for (let i = 1; i < nums.length - 1; i++){
        p = p * nums[i]
        left.push(p)
    }
    let right = [nums[nums.length - 1], 1]
    let product = nums[nums.length - 1]
    for (let i = nums.length - 2; i > 0; i--){
        product = product * (nums[i])
        right.unshift(product)
    }
    let result = []
    for (let i = 0; i < left.length; i++) {
        result.push(left[i] * right[i])
    }
    
    return result 
};

//1281.
var subtractProductAndSum = function(n) {
    let digit = []
    while (n >= 10) {
        digit.push(n % 10)
        n = Math.floor(n / 10)
    }
    digit.push(n)
    let p = 1
    let sum = 0
    for (let i = 0; i < digit.length; i++){
        p = p * digit[i]
        sum += digit [i]
    }
    
    return p - sum
};

//78
var subsets = function(nums) {
    let result = []
    result.push([])

    for (let i = 0; i< nums.length; i++){
        let now = nums[i]
        let l = result.length 
        
        for (let j = 0; j < l; j++){
            let temp = result[j].slice()
            temp.push(now)
            result.push(temp)
        }
    }
    return result 
};

//414
var thirdMax = function(nums) {
    let sorted = nums.sort(function(a, b){return a - b})
    let dic = {}
    
    let j = 1
    
    for (let i = sorted.length - 1; i >= 0; i--){
        if (Object.values(dic).includes(sorted[i])) {
            continue
        } else {
            dic[j] = sorted[i]
            j++
        }
    }
    
    if (Number.isInteger(dic[3])) {
        return dic[3]
    } else {
        return dic[1]
    }
};

//46
var permute = function(nums) {
    let result = []
    helper(nums, 0, result)
    return result 
    
};

var helper = function(nums, i, result){
    if (i == nums.length - 1){
        return result.push(nums.slice(0))
    }
    
    for (let j = i; j < nums.length; j++){
        let p = nums[i]
        nums[i] = nums[j]
        nums[j] = p
        helper(nums, i+1, result)
        p = nums[i]
        nums[i] = nums[j]
        nums[j] = p
    }
}