const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr= str.split('');
  // let unicArr = Array.from(new Set(arr));

  let unicArr= arr.concat();
  for (let i=0; i<unicArr.length; i++){
    if (unicArr[i] === unicArr[i+1]){
      unicArr.splice(i+1, 1);
      i -= 1;
  }}
 
  let sum = 0;
  let rez = [];

  for (let i=0; i<unicArr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (unicArr[i] === arr[j]){
        sum += 1;
        if (unicArr[i] !== arr[j+1]){j = arr.length}
      }
    }

    if (sum === 0 || sum === 1){
      rez.push(unicArr[i])
    } else {
      rez.push(`${sum}${unicArr[i]}`);
    }
    sum = 0;
  }
return rez.join('');
}

module.exports = {
  encodeLine
};
