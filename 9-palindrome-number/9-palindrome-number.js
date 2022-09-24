/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const numberToCheck = x.toString()
    let endPointer = numberToCheck.length - 1
    let startPointer = 0
    
    while(startPointer < endPointer) {
       if(numberToCheck[startPointer] !== numberToCheck[endPointer]) {
           return false
       }
        
        endPointer--
        startPointer++
    }
    
    return true
};