var twoSum = function(nums, target){
    let diction={}
    for (let i = 0; i< nums.length; i++){
        let value = target - nums[i]
        if (value in diction) {
            return [diction[value], i]
        } else {
            diction[nums[i]] = i
        }
        
    }
}

var threeSum = function (nums) {
    let sortNums = nums.sort(function (a, b) { return a - b })
    let result = []
    for (let i = 0; i < sortNums.length; i++) {
        let value = 0 - sortNums[i]
        if (i == 0 || nums[i] !== nums[i - 1]) {
            let rest = sortNums.slice(i + 1, sortNums.length)
            let left = 0
            let right = rest.length - 1
            while (left < right) {
                let leftVal = rest[left]
                let rightVal = rest[right]
                if (value > (leftVal + rightVal)) {
                    left += 1
                } else if (value < (leftVal + rightVal)) {
                    right -= 1
                } else {
                    result.push([sortNums[i], leftVal, rightVal])
                    left += 1
                    right -= 1
                    while (left < right && rest[left] == rest[left - 1]) {
                        left += 1
                    }
                }
            }
        }

    }
    return result
};

var fourSum = function (nums, target) {
    let sortNums = nums.sort(function (a, b) { return a - b })
    let result = []
    for (let i = 0; i < sortNums.length; i++) {
        if (i == 0 || nums[i] !== nums[i - 1]) {
            let value = target - sortNums[i]
            let threeSumResult = threeSum(sortNums.slice(i + 1), value)
            for (let j = 0; j < threeSumResult.length; j++) {
                let yes = threeSumResult[j]
                yes.push(sortNums[i])
                result.push(yes)
            }
        }
    }
    return result
};



var threeSum = function (sortNums, target) {
    // let sortNums = nums.sort(function (a, b) { return a - b })
    let result = []
    for (let i = 0; i < sortNums.length; i++) {
        let value = target - sortNums[i]
        if (i == 0 || sortNums[i] !== sortNums[i - 1]) {
            let rest = sortNums.slice(i + 1, sortNums.length)
            let left = 0
            let right = rest.length - 1
            while (left < right) {
                let leftVal = rest[left]
                let rightVal = rest[right]
                if (value > (leftVal + rightVal)) {
                    left += 1
                } else if (value < (leftVal + rightVal)) {
                    right -= 1
                } else {
                    result.push([sortNums[i], leftVal, rightVal])
                    left += 1
                    right -= 1
                    while (left < right && rest[left] == rest[left - 1]) {
                        left += 1
                    }
                }
            }
        }

    }
    return result
};