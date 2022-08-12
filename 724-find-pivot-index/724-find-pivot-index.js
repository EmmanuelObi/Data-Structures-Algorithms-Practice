/**
 * @param {number[]} nums
 * @return {number}
 */
const sum = (initialSum, value) => initialSum + value;

var pivotIndex = function(nums) {
    let leftSum = 0
    let rightSum = 0
    
    if (nums.length === 1) {
        return 0
    }
    for(let i = 0; i < nums.length; i++) {
        leftSum = nums.slice(0, i).reduce(sum, 0)
        rightSum = nums.slice(i+1).reduce(sum, 0)
        if(leftSum === rightSum){
            return i
        }
    }
    
    return -1
};