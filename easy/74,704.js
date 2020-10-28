// 74

var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++){
        if (target >= matrix[i][0]) {
            for (let j = 0; j<matrix[i].length; j++){
                if (target == matrix[i][j]){
                    return true
                }
            }
        }
    }
    return false 
};

// 704

var search = function(nums, target) {
    if (nums.length === 0) {
        return -1
    }
    let mid = Math.floor(nums.length / 2)
    if (nums[mid] > target) {
        return search(nums.slice(0, mid), target)
    } else if (nums[mid] < target) {
        let result = search(nums.slice(mid+1), target)
        if (result >= 0) {
            return result + mid + 1
        } else {
            return -1
        }
    } else {
        return mid 
    }
    
};