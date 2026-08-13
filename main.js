// function sayHello() {
//   return "sain uu!";
// }
// console.log(sayHello());

// function double(n) {
//   let result = n * 2;
//   return result;
// }
// console.log(double(5));

// function square(n) {
//   let result = n * n;
//   return result;
// }
// console.log(square(7));

// function area(w, h) {
//   let result = w * h;
//   return result;
// }
// console.log(area(4, 5));

// function perimeter(w, h) {
//   let result = (w + h) * 2;
//   return result;
// }
// console.log(perimeter(4, 5));

//  function greet(name, mark = "!") {
//   return "sain uu ," + name + mark;}
//  greet("ujingvnj", "?");

// function finalprice(price, percent) {
//   return price -(price * precent / 100)
// }
// const discount = (price, percent) => (price = price - (price / 100) * percent);
// console.log(discount(100, 15));

// function minOfThree(a, b, c) {
//   let min = a;
//   if (b < min) min = b;
//   if (c < min) min = c;
//   return min;
// }
// console.log(minOfThree(8, 3, 5));

// function middleOfThree(a, b, c) {
//   if ((a >= b && a <= c) || (a <= b && a >= c));
//   if ((b >= a && b <= c) || (b <= a && b >= c));
//   return c;
// }
// console.log(middleOfThree(0, 2, 5));

// const fruits = ["алим", "гадил", "үзэм"];
// console.log(fruits[0]);
// console.log(fruits.length);

// const scores = [90, 75, 88];
// const mixed = ["Bold", 25, true];

// const fruits = ["pear", "peach", "berry"];
// console.log(fruits[0]);
// console.log(fruits[2]);

// console.log(fruits.length - 1);

// fruits[1] = "cherry";
// console.log(fruits);

// const scores = (90 , 80, 7-);
// for ()

// const numbers = [42, 7, 88, 15, 63, 29, 91, 4, 56, 73];
// let max = numbers[0];
// for (const item of numbers) {
//   if (item > max) {
//     max = item;
//   }
// }
// console.log(max);

// const nums = [1, 2, 3];
// const doubled = nums.map((n) => n * 2);
// console.log(doubled);

// const nums = [1, 2, 3, 4];

// nums.forEach((n) => console.log(n * 10));

// const doubled = nums.map((n) => n * 2);
// console.log(doubled);

// const names = ["togtokh", "ujingvnj"];
// const upper = names.map((name) => name.toUpperCase());
// console.log(upper);

// const numbers1 = [4, 12, 7, 25, 10, 18];
// const result1 = numbers1.filter((num) => num > 10);
// console.log(result1);

// const numbers2 = [3, 8, 11, 14, 20, 25, 32];
// const result2 = numbers2.filter((num) => num % 2 === 0);
// console.log(result2);

// const words1 = ["apple", "banana", "cat", "javascript", "book"];
// const result3 = words1.filter((word) => word.length > 5);
// console.log(result3);

// const numbers4 = [5, 12, 8, 20, 3];
// const result6 = numbers4.every((num) => num > 0);
// console.log(result6);

// const names1 = ["bat", "saraa", "munkh", "maral", "anu"];
// const results5 = names1.find((names) => names[0] == "m");
// console.log(results5);

// let user = {
//   firstname: "TogtokhErdene",
//   lastname: "MunkhZul",
//   age: "15",
//   IsStudent: true,
//   hobby: "basketball,running,movie",
// };
// console.log(user.name);

// const user1 = {
//     name:"Bat"
//     age: 20
// };
// console.log(user1.name);

// const user2 = {
//   name: "saraa",
//   age : 19
// };
// console.log(user2.name)

// const user3 = {
//     name:"anu" ,
//     age: 22

// };
// user3.city="УБ"
// const user4 = {
//     name :"bold",
//     age :30,
//     city : "darkhan"
// }
// delete user4.age;
// console.log(user4 )

/////////////////

// const user1 = {
//   name: "Bat",
//   age: 25,
//   address: {
//     city: "Ulaanbaatar",
//     district: "baynzureh",
//   },
// };
// console.log(user1.address.city);

// const student1 = {
//   name: "Saraa",
//   scores: {
//     math: 80,
//     english: 90,
//   },
// };
// student1.scores.math = 95;
// console.log(student1.scores.math);

// const car1 = {
//   brand: "toyota",
//   engine: {
//     size: 2.5,
//     power: 180,
//   },
// };
// car1.engine.type = "hybrid";
// console.log(car1.engine);

// const users1 = [
//   { name: "Bat", age: 22 },
//   { name: "Saraa ", age: 22 },
//   { name: "Anu", age: 19}
// ];
// console.log(users1[0].name);

// const users2 = [
//   { name: "Bold", age: 24 },
//   { name: "Nomin", age: 21 },
//   { name: "Temuulen", age: 23 }
// ];
// users2[1].age=25
// console.log(users[1])

// const products = [
//   { name: "Mouse", price: 50000 },
//   { name: "Keyboard", price: 120000 },
//   { name: "Monitor", price: 500000 },
// ];
// products.forEach(function (product) {
//   console.log(product.name);
// });

// const students2 = [
//   { name: "Bat", age: 17 },
//   { name: "Saraa", age: 20 },
//   { name: "Anu", age: 16 },
//   { name: "Bold", age: 22 },
// ];
// istundents = students2.filter(function (student) {
//   return student.age > 18;
// });

// const person1 = {
//   name: "Bat",
//   age: 25,

// introduce: 

// }

let students = [

  { name: "Alice", age: 20, grades: [70, 80, 90] },

  { name: "Bob", age: 22, grades: [60, 65, 70] },

  { name: "Charlie", age: 23, grades: [80, 85, 90] },

  { name: "Dave", age: 21, grades: [50, 60, 55] }
]
students.ForEach(function(student)) {
    const sum = students.grade.reduce(function(total, grade)
{return total + grade;
}, 0);
const average = sum / students.grades.length
if (average > 75){
    console.log(student.name)
    }
}
