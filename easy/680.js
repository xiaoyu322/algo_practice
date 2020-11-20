//680
var validPalindrome = function(s) {
    let i = 0
    let j = s.length - 1 
    
    while (j > i) {
            if (s[i] != s[j]){
                if (!isPalindrom(s.slice(i+1,j+1)) && !isPalindrom(s.slice(i,j))){
                    return false
                } else {
                    return true
                }
            } 
            i++
            j--
        }
    return true
}

var isPalindrom = function(s) {
    let len = s.length 
    for (let i = 0; i < len/2; i++) {
        if (s[i] !== s[len-1-i]){
            return false 
        }
    }
    return true
}

//13
var romanToInt = function(s) {
    let num = 0
    for(let i = 0; i<s.length;i++){
        if (s[i] == 'I' && (s[i+1] == "V" || s[i+1] == "X")){
            num += -1
        } else if(s[i] =='I' && (s[i+1] != "V" || s[i+1] != "X")){
            num += 1
        } 
        
        if (s[i] == 'X' && (s[i+1] == 'L' || s[i+1] == 'C')){
            num += -10
        } else if (s[i] == 'X' && (s[i+1] != 'L' || s[i+1] != 'C')){
            num += 10
        }
        
        if (s[i] == 'C' && (s[i+1] == 'D' || s[i+1] == 'M')){
            num += -100
        } else if (s[i] == 'C' && (s[i+1] != 'D' || s[i+1] != 'M')){
            num += 100 
        }
        
        if (s[i] == 'V'){
            num += 5
        }
        if (s[i] == 'L') {
            num += 50
        } 
        if (s[i] == 'D'){
            num += 500
        } 
        if (s[i] == 'M'){
            num += 1000
        }
    }
    return num
};

//412
var fizzBuzz = function(n) {
    let result = []
    let i = 1
    while (i <= n) {
        if (i % 3 === 0 && i % 5 === 0){
            result.push('FizzBuzz')
        }else if (i % 3 === 0) {
            result.push('Fizz')
        } else if (i % 5 == 0) {
            result.push('Buzz')
        } else {
            result.push(i.toString())
        }
        
        i++
    }
    return result
};


//9
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0) && (x != 0)) {
        return false
    }
    let num = 0
    while (x > num) {
        num = num * 10 + x % 10
        x = Math.floor(x / 10)
    }
    if (x == num || x == Math.floor(num / 10)) {
        return true
    }
    return false
};