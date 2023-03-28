/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 const value={ '(':')','{':'}','[':']'}
 const stack =[]
 for(let ch of s){
     if(value[ch]){
         stack.push(value[ch])
     }else if(stack.length>0 && stack[stack.length-1]===ch){
         stack.pop()
     }else{
         return false
     }
 }
    return stack.length ===0
};