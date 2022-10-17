/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
//     let store = [];
//     let miniArr = [];
    
//     if(m * n === original.length) {
        
//         for(let i = 0; i < original.length; i++) {
            
//             miniArr.push(original[i])
//             if(miniArr.length === n){
//                 store.push(miniArr);
//                 miniArr = []
//             }
//         }
        
//         return store
//     }
    
//     return []
     if(original.length != m*n) return []
    let result = Array.from(Array(m), () => new Array(n));
    
    for(let i = 0; i < m*n; i++) {
        result[Math.floor(i/n)][i%n] = original[i];
    }
    return result
};