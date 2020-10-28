//54
var spiralOrder = function(matrix) {
    let result = []
    
    if (matrix.length == 0) {
        return []
    }
    let xLen = matrix.length 
    let yLen = matrix[0].length
    
    let startrow = 0
    let endrow = xLen - 1
    let startCol = 0
    let endCol = yLen - 1
    let size = xLen * yLen
    
    let count = 0
    while (count <= size){ 
        for (let i = startCol; i <= endCol; i++){
            result.push(matrix[startrow][i])
            count ++
        }
        if (count == size){
                break
            }
        startrow ++
        
        for (let i = startrow; i<=endrow; i++){
            result.push(matrix[i][endCol])
            count ++
        }
        endCol --
        
        for (let i = endCol; i >= startCol; i--){
            result.push(matrix[endrow][i])
            count ++
        }
         if (count == size){
                break
            }
        endrow --
       
        
        for (let i = endrow; i>= startrow; i--){
            result.push(matrix[i][startCol])
            count ++
        }
      
        startCol ++
    }
    
    return result 
};