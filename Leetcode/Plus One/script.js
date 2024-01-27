/* @param {number[]} digits
* @return {number[]}
[4,3,2,1]
*/

function plusOne (digits) {
   let string = digits.join("");
   let addOne = parseInt(string) + 1;
   let toString = addOne.toString();
   let newArray =  toString.split("");
   let arr = [];
   for(let i = 0; i < newArray.length; i++){
    arr.push(parseInt(newArray[i]));
   }
   return arr;
};

console.log(plusOne([19]));