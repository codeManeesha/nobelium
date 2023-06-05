/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
       if (s.length !== t.length) return false;
    
    let chars = {};
    
    for (let i = 0; i < s.length; i++) {
         chars[s[i]] = chars[s[i]] ? chars[s[i]] + 1 : 1;
         chars[t[i]] = chars[t[i]] ? chars[t[i]] - 1 : -1;
    }
    
    for (let letter in chars) {
        
        if (chars[letter] !== 0) {
            return false;
        }
    }
    return true;
    
};