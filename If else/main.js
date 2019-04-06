// Lesson 2
// Task 1
/*
const getEquation = (a, b) => {
  let x ;
  if (a > b ) {
    return console.log(x = a + b / 2 * 4 );
 
  }else if(a < b ) {
    
    return console.log( x = a - b + 2 / b * 4);
  
  }else {
    return console.log(x = 400);
    ;
  }

}
getEquation()
*/
//Task 2 ????

/*
//Task 3 

const dayOfWeek = +prompt('Please enter day of week','');

switch(dayOfWeek) {
  case 1:
       alert('Sunday');
    break;
  case 2:
       alert('Monday');
    break;
  case 3:
        alert('Tuesday');
    break;
  case 4:
      alert('Wednesday');
    break;
  case 5:
       alert('Thursday');
    break;
  case 6:
       alert('Friday');
    break;
  case 7:
       alert('Saturday');
    break;    
  default:
        alert('Wrong day of week')
    break;
}
*/
//Task 4

/*
const getValueOfNumbers = (a, b) => {
  
  a > b ? console.log(a) : console.log(b);
  
  

};

getValueOfNumbers(3, 2);

*/

//Task 5

/*
const getMaxOfNumbers = (a, b) => {
  if (a > b){
     return console.log(a);
  
    } else if(a < b){
     return console.log(b);
    
 }else {
   return console.log('Both of Numbers are equal');
   
 }

};

getMaxOfNumbers(6, 6);
*/

//Task 6 
/*
const getEntrance = (flat) => {
  if(flat >= 1 && flat <= 20){
   
    return console.log('First Entrance');
     
  }else if(flat >= 21 && flat <= 48){
    return console.log(('Second Entrance'));
    
  }else if (flat >= 49 && flat <= 90){
    return console.log('Third Enrance');
    
  }else {
    console.log('There is not flat with this number');
    
  }

}
*/

/* Second variant

let flat = +prompt('Please input flat number', '');

switch (true) {

  case flat >= 1 && flat <= 20:
    alert('First Entrance');
    break;
  case (flat >= 21 && flat <= 48):
    alert('Second Entrance');
    break;
  case (flat >= 49 && flat <= 90):
    alert('Third Entrance');
    break;
  default:
    alert('You input a wrong flat number')
    break;
}
*/


//Task 7

/*
let userName = prompt('Enter your name','');

  if(userName === 'ivan' || userName === 'alex' || userName === 'petr' ){

    let pass = prompt('Enter your password', '');

      if (pass === '334455'){
        alert('Welcome, Ivan')
      
      }else if(pass === '777'){
        alert('Welcome, Alex')
      
      }else if (pass === 'b5678'){
        alert('Welcome, Petr')
      }else {
        alert('Wrong Password');
      }


  }else if(userName == null){
    alert('Entrance fail');
  }else {
    alert('I don\'t now you');
    
  };
*/


  //Task 8
  /*
  const age = +prompt('Please enter a year when you was born','');

  const currentYear = 2019;

  currentYear - age >= 16 ? alert(`You are ${currentYear - age}, Please welcome`) :
   
    alert('No entry')
  
  */

 //Task 9
/*
const experience = +prompt('Please enter your experience', '');

switch (true) {
  case experience >= 0 && experience < 3:
    alert('You have 0% premium');    
    break;
  case experience >= 3 && experience < 10:
    alert('You have 10% premium');
    break; 
  case experience >=10 && experience < 20:
    alert('You have 20% premium');
    break;
  case experience >=20 && experience <= 100:
    alert('You have 25% premium');
    break;        
  default:
        alert('You enter a wrong experience')  
    break;
}
*/



//Task 10 
/*
const goods = +prompt('Введите количество товара', '');
const count = goods % 100;
if (count >= 5 && count <= 20) {
   alert(`В корзине ${goods} товаров`)
}else {
    let countIn = count % 10;
    if (count == 1) {
      alert(`В корзине ${goods} товар`);

    }else if (countIn >= 2 && countIn <= 4 ) {
      alert(`в корзине ${goods} товара`);
    }else {
      alert(`В корзине ${goods} товаров`)
    }

}


*/



















































