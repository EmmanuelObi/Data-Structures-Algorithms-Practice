/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    const lengthOfNums = nums.length;
    let tracker = 0
    
    for(let i = 0; i < lengthOfNums; i++) {
        
        if(nums[i] !== nums[i + 1]) {
            
            nums[tracker++] = nums[i];
        }
    }
    
    return tracker
    
};