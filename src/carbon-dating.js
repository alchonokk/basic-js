const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {
  if ((n/1)===0 || Array.isArray(n) || typeof(n)==="number") {return false};

  const k=0.693/HALF_LIFE_PERIOD;
  let t= (Math.log(15/n))/k;
  let number= Math.ceil(t);
  
  if (number>0){
    return number
  } else {return false}
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
