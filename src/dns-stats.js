const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
 let rezultObject = {};
 domains.forEach(str => {
  let temporary = [];
  let arr = str.split('.');
  for (let i=arr.length-1; i>=0; i--) {
    let part= `.${arr[i]}`;
    temporary.push(part);
    const key = temporary.join('');

    if (!rezultObject[key]) {rezultObject[key] = 0;}
    rezultObject[key] += 1; 

  }
 })
 return rezultObject;
}

module.exports = {
  getDNSStats
};
