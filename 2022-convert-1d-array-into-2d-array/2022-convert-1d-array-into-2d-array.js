/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let store = [];
    let miniArr = [];
    
    if(m * n === original.length) {
        
        for(let i = 0; i < original.length; i++) {
            
            miniArr.push(original[i])
            if(miniArr.length === n){
                store.push(miniArr);
                miniArr = []
            }
        }
        
        return store
    }
    
    return []   
};