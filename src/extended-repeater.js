const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  if (addition === null) addition = 'null';
  if (addition === false) addition = 'false';
  
  let addedItems = new Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator || '|');

  let resultArray = new Array(repeatTimes)
    .fill(str + addedItems)
    .join(separator || '+');

  return resultArray;
}

module.exports = {
  repeater
};
