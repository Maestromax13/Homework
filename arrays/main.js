//Arrays

//Task 10

/*
let arr = [];
let str = 'x';
let arrLength = +prompt('Enter array length','')
for (let i = 0; i < arrLength; i++) {
    arr.push(str);
  str += 'x';
}
console.log(arr);
*/

//Task 11
/*
let arr = [];
let arrLength = +prompt('Enter array length', '')
for (let i = 1; i < arrLength; i++) {
  let str = '';
  for (let j = 0; j < i; j++) {
    str += i;
  }
  arr.push(str);
}
console.log(arr);
*/

//Task 12
/*
const arrSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
      return i + 1; 
    }
  }
}

console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));  

*/
//Task 13
/*
let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];

for (let i =arr.length - 1; i >= 0 ; i--){
    newArr.push(arr[i]);
}

console.log(newArr);

*/

//Task 14
/*
let arr = [45, 4, 23465, 8, 14, 25, 500, 234, 11, 55, 48];
let newArr = arr.filter(ar => ar > 0 && ar <= 10)

console.log(newArr);
*/

//Task 15 
/*
let arr = [];
for(let i = 0; i <= 100; i++){
  
  arr.push(i);
}

let newArr = arr.filter ( ar => ar % 2 == 0);

console.log(newArr);
*/


// Task 16

// const arr = [1, 2, 3, 4, 5, 6];

// arr.splice(0, 3, 2, 1, 4);
// arr.splice(3, 3, 3, 6, 5);
// console.log(arr);



//Task 17

//  const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     let b = arr[i - 1];
//     arr[i - 1] = arr[i];
//     arr[i] = b;
//   }
// }
//  console.log(arr);




  
