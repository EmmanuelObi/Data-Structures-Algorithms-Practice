/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let trackValue = -1
    
    for(let i = 0; i < s.length; i++) {
        if(t.includes(s[i])){
            if(t.indexOf(s[i], trackValue+1) < trackValue){
                return false
            }else {
                trackValue = t.indexOf(s[i], trackValue+1)
            }
            
        }else {
            return false
        }
    }
    
    return true
};