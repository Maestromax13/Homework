// Task 1

// function recurtion(n) {
//     parseInt(n);
//   return (n != 1) ? recurtion(n - 1) + ' ' + n  : n;   
  
// }
// console.log(recurtion(123));

// // Task 2

// function recurtion(a, b) {
//   if (a > b ){
//     return a + ' ' +  recurtion( a - 1 , b);
  
//   }else if ( a < b ){
//     return a + ' ' + recurtion(a + 1 , b );

//   }else {
//     return a ;
//   }
// }

// console.log(recurtion(50, 30));


//Task 3 


// function recurtion (n) {
//   n = parseInt(n);
//   return (n < 10) ? n : n % 10 + recurtion(n / 10);
// }

// console.log(recurtion(2019));


//Task 4

// function recurtion (n) {
//   n = parseInt(n);
//   return (n < 10) ? n : n % 10 + ' ' + recurtion ( n / 10);
// }

// console.log(recurtion(123456));


// Task 5


// function recurtion(n) {
//   n = parseInt(n);
//   return (n < 10) ? n : recurtion(n / 10) + ' ' + n % 10  ;
// }

// console.log(recurtion(123456));


//Task 6 

// const array1 = ['a', 'b', 'c'];
// const array2 = [1, 2 ,3];

// const newArray = array1.concat(array2);

// console.log(newArray);


// Task 7 
// const array = ['a', 'b', 'c'];
// array.push(1, 2, 3);
// console.log(array);

//Task 8 
// const array = [1, 2, 3];
// array.unshift(4, 5, 6);
// console.log(array);



//Task 9 

// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(0, 3);
//   console.log(newArray);

//Task 10
// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(3);
// console.log(newArray);
  
// Task 11

// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);


// Task 12 

// const array = [1, 2, 3, 4, 5];
// const newArray = array.splice(1, 3);
// console.log(newArray);


//Task 13

// const array = [1, 2, 3, 4, 5];

// array.splice(3, 0, 'a', 'b', 'c');

// console.log(array);

// Task 14

// const array = [1, 2, 3, 4, 5];

// array.splice (1, 0, 'a', 'b');
// array.splice(6, 0 , 'c');
// array.splice(8, 0, 'e');
// console.log(array);













