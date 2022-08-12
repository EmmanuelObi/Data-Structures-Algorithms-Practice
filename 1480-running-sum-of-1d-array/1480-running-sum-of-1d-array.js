/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const sumStore = []
    for(let i = 0; i < nums.length; i++) {
        sumStore.push(nums[i])
        nums[i] = sumStore.reduce((initialSum, value) => initialSum + value, 0)
    }
    
   return nums
    
};