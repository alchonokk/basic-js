const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum=0;
  let k=0;
  while (n>0){
    k = n % 10;
    n = (n-k)/10;
    sum = sum + k;
  };
  
  if (sum > 9){
    let n1=sum;
    let k1=0;
    let sum1 = 0;
    while (n1>0){
      k1 = n1 % 10;
      n1 = (n1-k1)/10;
      sum1 = sum1 + k1; 
  } 
  return sum1;
  }
  return sum;
  
}

module.exports = {
  getSumOfDigits
};
