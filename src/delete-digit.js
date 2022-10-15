const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let arr=String(n);

  let rez=[];
  
  let arr1=arr.split('');

  for (let i=0; i<arr1.length; i++){
    let prom=arr1.slice();
    prom.splice(i,1);
    let k = prom.join('');
    rez[i]=k
  }

  
  let rez1=rez.map(Number);

  let max= Math.max.apply( Math, rez1 );

  return max;
  
}

module.exports = {
  deleteDigit
};
