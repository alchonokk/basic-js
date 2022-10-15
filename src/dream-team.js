const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length === 0) return false;

  let type='string';
  let arr=[]
  for (let i=0; i<members.length; i++){
    if (typeof members[i] === type ){
    arr.push(members[i])
    };
  }

  if (arr.length === 0) return false;

  let arr1=[];

  for (let i=0; i<arr.length; i++){
    arr1[i]=arr[i].trim();
    arr1[i]=arr1[i].toUpperCase();
  }

  let rez=arr1.sort();

  let k=[];
  for (let i=0; i<rez.length; i++){
    k[i]=rez[i].charAt(0);
  }

  return (k.join(''));
}

module.exports = {
  createDreamTeam
};
