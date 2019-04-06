//Fumctions - Arrays
//Task 1

// function arrayFill( value, arrLenght){
//   let array = [];
//   for (let i = 0; i < arrLenght; i++){
//     array.push(value);
//   }
//   return array;
// }
// console.log(arrayFill('fill', 10));

//Task 2 

// let arr = [
//   [1, 2, 3],
//   [4, 5],
//   [6]
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

//Task 3

// const arr = [
//   [
//     [1, 2],
//     [3, 4]
//   ],
//   [
//     [5, 6],
//     [7, 8]
//   ]
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k];
//     }
//   }
// }
// console.log(sum);

//Task 4


// function isNumberRange(num) {
//   num = parseFloat(num);
// return num > 0 && num < 10 
//  };

// console.log(isNumberRange());

//Task 5

function isEven(num) {
    
  return num % 2 === 0;
  
};



 //Task 6

// const arr = [];
// for (i = 0 ; i < 100 ; i++){
//   arr.push(i)
// };
// console.log(arr);



// const newArray = [];
// for ( let i = 0; i < arr.length; i++){
//   if(isEven(arr[i])){
//     newArray.push(arr[i]);
//   }
// }




// console.log(newArray);

//Task 7

// function getDivisors(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }

//   return arr;
// }

// console.log(getDivisors());

//Task 8



//Task 9 (??)


// function powFunction (x, n){
//   let result = Math.pow(x, n );
//   return result;
// };

// alert(powFunction(2, 3));

//Task 10 

// function enterYourAge (age){
// return age > 16 ? 'Welcome' : 'You are too young';
// }

// console.log(enterYourAge(15));

//Task 11


// function enterYourAge (age){
// if( age > 16 ){
// return 'Welcome'

// }else if (age === undefined){
//   return 'Please enter your age '
// }else {
//   return 'You are too young '
// }

// }

// console.log(enterYourAge());

//Task 12

// function getArrayLength (arr) {
//   let array = [];
//   for (i = 0; i <= arr; i++){
//     array.push(i);
//       }
//   if (arr === undefined){
//     return 'Enter an array'
//   }
//   else{ 
//   return `Array length is ${array.length}`
//   } 
// }

// console.log(getArrayLength(14));



// Task 13

// function getNumber (num) {
//   if(num > 10){
//     return num * num;
//   }else if(num < 7) {
//     return 'Number less than seven';
//   }else if (num === 8){
//     return 8
//   }else if (num === 9){
//     return 9;
//   }else {
//     return 'Please enter a number'
//   }
// };
// console.log(getNumber());

// Task 14 

// let = 'kiev kharkov odessa';
// let newArr = [];

// let arr = str.split(' ');
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//   newArr.push(ucFirst(arr[i]));
// }

// let newStr = newArr.join (' ');
// console.log(newStr);


// function ucFirst(str) {
//   return str[0].toUpperCase() + str.substr(1);
// }


//Task 15 use function ucFirst()


// let str = 'var_text_hello';

// let newStr = str.split('_');

// for (let i = 1; i < newStr.length; i++) {
//   newStr[i] = ucFirst(newStr[i])
  
// };

// str = newStr.join('');

// console.log(str);


//Task 16 

// function inArray(str, arr) {
//   return arr.indexOf(str) >= 0 ;
// }

//Task 17

// str = '123456';
// arr = str.split('');
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 !== 0) {
//     let b = arr[i - 1];
//     arr[i - 1] = arr[i];
//     arr[i] = b;
//   }
// }
// str = arr.join('');
// console.log(str);


