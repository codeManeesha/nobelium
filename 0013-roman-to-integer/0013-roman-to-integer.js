/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const myValue ={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000

    }
    let result =0;
    s.split("").forEach((num ,i)=>{
        if(myValue[num]<myValue[s[i+1]]) result -= myValue[num];
        else result+=myValue[num];
    })
  return result;
};