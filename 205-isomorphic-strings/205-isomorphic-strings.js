/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    const length = s.length
    const dict = {}
    
    for(let i = 0; i < length; i++) {
        if(!dict[s[i]] && !Object.values(dict).includes(t[i])){
            dict[s[i]] = t[i]
        }else if(dict[s[i]] !== t[i]){
            return false
        }
    }
    return true
};