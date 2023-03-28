/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastWordCount =0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!==" "){
            for(let j=i;j>=0;j--){
                if(s[j]!==" "){
                    lastWordCount++
                }else {
                    return lastWordCount
                }
            }
            return lastWordCount;
        }
    }
    
};