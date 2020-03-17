module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  for (let k = 0; k < bracketsConfig.length;k++) {
       brackets.push(bracketsConfig[k].join(''));    
  }
 for (let i = 0; i < brackets.length;) {
   if (str.includes(brackets[i])) {
     str = str.replace(brackets[i], '');
     i=0;
   } else i++
 }

 let result;
 str.length > 0 ? result = false: result = true;
 return result;
}



