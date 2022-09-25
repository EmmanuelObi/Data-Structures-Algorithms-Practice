/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    const frequencyStore = new Map();
    let result = []
    
    for(let i = 0; i < s.length; i++) {
        if(frequencyStore.has(s[i])){
            frequencyStore.set(s[i], frequencyStore.get(s[i]) + 1)
        }else {
            frequencyStore.set(s[i], 1)
        }
    }
    
    const sortedStore = [...frequencyStore].sort((a, b) => b[1] - a[1])
    
    for(const [key, value] of sortedStore) {
        for(let i = 0; i < value; i++) {
            result.push(key)
        }
    }
    
    return result.join("")
    
};