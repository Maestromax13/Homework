
//Tasks 1, 2, 3 
    // class Worker {
    //   constructor(name, surname, rate, days){
    //     this._name = name;
    //     this._surname = surname;
    //     this._rate = rate;
    //     this._days = days;
    //   };
    //   get name(){
    //     return this._name
    //   };
    //   get surname() {
    //     return this._surname;
    //   };
    //   get rate() {
    //      return this._rate;
    //    };
    //   get days() {
    //       return this._days;
    //     };
    //   set rate (value){
    //     this._rate = value;
    //   };
    //   set days(value) {
    //     this._days = value;
    //   }
    //   getSalary () {
    //     console.log(`${this._name} получил за месяц ${this._days * this._rate}$`);
    //   }
    // }
    // let worker = new Worker( 'Ivan', 'Ivanov', 10 , 31);
    // worker.days = 40;
    // console.log(worker);
    // console.log(worker.getSalary());
    
    //Task 4
//     class MyString {
//       constructor() {
//         this.reverse = function (string) {
//           return string.split('').reverse().join('');
        
//         };
//         this.ucFirst = function (string) {
//           return string.substr(0, 1).toUpperCase() + string.substr(1)
//         }
//         this.ucWords = function(string) {
//           let arr = string.split(' ');
//           for(let key in arr){
//             arr[key] = arr[key].substr(0, 1).toUpperCase() + arr[key].substr(1);
//           }
//           return string = arr.join(' ')
          
//         }

//       }
//     }
// let str = new MyString;
// console.log(str.reverse('Polimorf'));
// console.log(str.ucFirst('london is the capital'));
// console.log(str.ucWords('first letter to upper case'));


// class User {
//   constructor(name, surname,){
//     this.name = name;
//     this.surname = surname;
    
//   }
// getFullName (){
//   return `${this.name} ${this.surname}`;
  
// }

// };

// class Student extends User {
//   constructor(name, surname, year){
//     super(name,surname)
//     this.year = year;
//   }
//   getCourse(){
//     let now = new Date();
//     let nowYear = now.getFullYear();
//     return nowYear - this.year;
    
//   }

// }

// let student = new Student('Ivan', 'Ivanov', 2018);

// console.log(student.getFullName());
// console.log(student.getCourse());

/*
  class Ingredient {
    constructor(id, category, name, price, kkal) {
      this.id = id; // Идентификатор
      this.category = category; // 0- размер, 1 - начинка, 2 - внешняя добавка
      this.name = name; // Название
      this.price = price; // Цена
      this.kkal = kkal; // Калорийность
    }
  }

  // Признаки богатой доменной модели:
  // Храним не фактические данные, а ссылки на объекты.
  class Gamburger {
    constructor(gamburgerSize = null, insideIngredient = null) {
      this.gamburgerSize = gamburgerSize;
      this.insideIngredient = insideIngredient;
      this.outerIngredients = new Set();
    }

    get isReady() {
      return this.gamburgerSize != null && this.insideIngredient != null;
    }

    get moneySum() {
      if (!this.isReady)
        throw new Error("Is not ready.");

      let sum = this.gamburgerSize.price;
      sum += this.insideIngredient.price;
      for (let item of this.outerIngredients) {
        sum += item.price;
      }
      return sum;
    }

    get kkalSum() {
      if (!this.isReady)
        throw new Error("Is not ready.");

      let sum = this.gamburgerSize.kkal;
      sum += this.insideIngredient.kkal;
      for (let item of this.outerIngredients) {
        sum += item.kkal;
      }
      return sum;

    }

    get name() {
      if (!this.isReady)
        throw new Error("Is not ready.");

      let name = this.gamburgerSize.name + " (";
      name += this.insideIngredient.name;
      for (let item of this.outerIngredients) {
        name += ", " + item.name;
      }
      return name + ")";
    }

    // Вызов строителя можно не включать в общий интерфейс объекта
    static get builder() {
      return new GamburgerBuilder();
    }
  }

  class GamburgerBuilder {
    get isReady() {
      return this.gamburger.isReady;
    };

    constructor() {
      this.gamburger = new Gamburger();
    }

    withInside(ingredient) {
      if (!ingredient || ingredient.category != 1) // Guard на несовместимость ингредиента.
        throw new Error("WithInside");

      this.gamburger.insideIngredient = ingredient;
      return this;
    }

    withSize(ingredient) {
      if (!ingredient || ingredient.category != 0) // Guard на несовместимость ингредиента.
        throw new Error("WithSize");

      this.gamburger.gamburgerSize = ingredient;
      return this;
    }

    build() {
      if (!this.isReady)
        throw new Error("Is not ready.");

      return this.gamburger;
    }
  }

  // Базовый класс Декоратор для гамбургера
  class GamburgerDecorator {
    constructor(gamburger) {
      this.gamburger = gamburger;
    }

    get gamburgerSize() {
      return this.gamburger.gamburgerSize;
    }
    set gamburgerSize(value) {
      gamburger.gamburgerSize = value;
    }

    get insideIngredient() {
      return this.gamburger.insideIngredient;
    }
    set insideIngredient(value) {
      this.gamburger.insideIngredient = value;
    }

    get outerIngredients() {
      return this.gamburger.outerIngredients;
    }

    get moneySum() {
      return this.gamburger.moneySum;
    }

    get kkalSum() {
      return this.gamburger.kkalSum;
    }

    get name() {
      return this.gamburger.name;
    }
  }

  class SpeciesGamburger extends GamburgerDecorator {
    constructor(gamburger) {
      super(gamburger);
      this.gamburger.outerIngredients.add(ingredients[5]);
    }
  }

  class MaionezGamburger extends GamburgerDecorator {
    constructor(gamburger) {
      super(gamburger);
      this.gamburger.outerIngredients.add(ingredients[6]);
    }
  }

  let ingredients = [
    new Ingredient(1, 0, "Маленький гамбургер", 50, 20),
    new Ingredient(2, 0, "Большой гамбургер", 100, 40),
    new Ingredient(3, 1, "сыр", 10, 20),
    new Ingredient(4, 1, "салат", 20, 5),
    new Ingredient(5, 1, "картофель", 15, 10),
    new Ingredient(6, 2, "приправа", 15, 0),
    new Ingredient(7, 2, "майонез", 20, 5),
  ];

  // Для приправы и майонеза применим паттерн Decorator (многократное обертывание не увеличивает сумму),
  // а для основы и начинки гамбургера - паттерн Fluent Builder.
  let burger = new MaionezGamburger(new MaionezGamburger(new SpeciesGamburger(
    Gamburger.builder
    .withInside(ingredients[3]) // с салатом
    .withSize(ingredients[0]) // Маленький гамбургер
    .build()
  )));

  console.log(burger);


*/
