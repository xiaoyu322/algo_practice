//121
var maxProfit = function(prices) {
    let low = Number.MAX_SAFE_INTEGER
    let sum = 0
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < low) {
            low = prices[i]
        } else if (prices[i] - low > sum) {
            sum = prices[i] - low
        }
    }
    return sum
    
    
};

//415
var addStrings = function(num1, num2) {
    let carry = 0;

    let firstP = num1.length - 1;
    let secondP = num2.length - 1;
    let res = '';

    while (firstP >= 0 || secondP >= 0) {
        let sum = 0;
        let first = firstP >= 0 ? Number(num1[firstP--]) : 0
        let second = secondP >= 0 ? Number(num2[secondP--]) : 0

        sum += first + second + carry;
        carry = 0;

        if (sum > 9) {
            sum %= 10;
            carry++;
        }
        res = sum + res;
    };

    if (carry > 0) {
        res = carry + res;
    }

    return res;
    
    
};

//7
var reverse = function(x) {
    let num = x.toString()
    let result = ''
    
    if (x < 0) {
        num = num.slice(1)
        result = '-'
    }
    
    for (let i = num.length - 1; i >= 0; i--){ 
        result += num[i]
    }
    
    result = Number(result)
    if (result < Math.pow(-2,31) || result > Math.pow(2,31)-1){
        return 0 
    }
    return result
};

//88
var merge = function (nums1, m, nums2, n) {
    let result = []
    let i = 0
    let j = 0
    let h = 0
    nums1Copy = nums1.slice(0, m)

    while (i < m && j < n) {
        if (nums1Copy[i] < nums2[j]) {
            nums1[h] = nums1Copy[i]
            i += 1
            h += 1
        } else if (nums1Copy[i] > nums2[j]) {
            nums1[h] = nums2[j]
            j += 1
            h += 1
        } else if (nums1Copy[i] == nums2[j]) {
            nums1[h] = nums1Copy[i]
            nums1[h + 1] = nums2[j]
            i += 1
            j += 1
            h += 2
        }
    }

    while (h < (m + n)) {
        if (i < m) {
            nums1Copy = nums1Copy.slice(i)
            for (let i = 0; i < nums1Copy.length; i++) {
                nums1[h] = nums1Copy[i]
                h += 1
            }
        } else if (j < n) {
            nums2 = nums2.slice(j)
            for (let i = 0; i < nums2.length; i++) {
                nums1[h] = nums2[i]
                h += 1
            }
        }
    }
};