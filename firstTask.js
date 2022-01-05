// // // // // // // // // // // let person = {
// // // // // // // // // // //   name: "selvakannan",
// // // // // // // // // // //   age: 23,
// // // // // // // // // // //   gender: "male",
// // // // // // // // // // //   degree: {
// // // // // // // // // // //     ug: "BA",
// // // // // // // // // // //     pg: "MA",
// // // // // // // // // // //   },
// // // // // // // // // // // };
// // // // // // // // // // // console.log(person.name, person.age, person.degree.pg);

// // // // // // // // // // function addition(a, b) {
// // // // // // // // // //   let c = a + b;
// // // // // // // // // //   return c;
// // // // // // // // // // }
// // // // // // // // // // console.log(addition(7, 3));

// // // // // // // // // function minutes(a) {
// // // // // // // // //   seconds = a * 60;
// // // // // // // // //   return seconds;
// // // // // // // // // }
// // // // // // // // // console.log(minutes(2));

// // // // // // // // let add = (a) => {
// // // // // // // //   return a + 1;
// // // // // // // // };
// // // // // // // // console.log(add(9));

// // // // // // // let area = (a, b) => {
// // // // // // //   return (a * b) / 2;
// // // // // // // };
// // // // // // // console.log(area(3, 2));

// // // // // // // ----------------------------------------Home work--------------------------
// // // // // // // ----------------------------------------Home work--------------------------
// // // // // // // ----------------------------------------Home work--------------------------
// // // ---------------one---------------------------
// let firstNumber = prompt("enter first number");
// let secondNumber = prompt("enter second number");
// let change;

// change = firstNumber;
// firstNumber = secondNumber;
// secondNumber = change;

// console.log("second number " + secondNumber);
// console.log("first number " + firstNumber);

// // // // // // ----------------two-----------------------------------------------------------------

// // let firstNumber = 100;
// // let secondNumber = 11;
// // let thirdNumber = 12;

// let firstNumber = prompt("Enter a number");
// let secondNumber = prompt("Enter a number");
// let thirdNumber = prompt("Enter a number");

// console.log(firstNumber, secondNumber, thirdNumber);

// if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//   console.log(`The largest number is ${firstNumber}`);
// } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//   console.log(`The largest number is ${secondNumber}`);
// } else {
//   console.log(`The largest number is ${thirdNumber}`);
// }

// // // // // ------------------three---------------------------------------------------
// var list = [];

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     // list.push(i);
//     console.log(`The even numbers between 1 to 100 ${i}`);
//   }
// }
// console.log(`The even numbers between 1 to 100 ${list}`);
// --------------------four--------------------------------------------------
// const name = prompt("Enter a string: ");
// const answer = palindrome(name);
// function palindrome(str) {
//   const len = name.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (name[i] !== name[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }

// console.log(answer);
// // // // -------------------------five----------------------------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, "selva", "kanna"];
// // let emptyarr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
//   // emptyarr.push(arr[i]);
// }
// // console.log(emptyarr);

// // // // --------------------------six---------------------------------------------------

// let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
// // let emptyarr = [];

// for (i = 1; i < arr.length; i = i + 2) {
//   console.log(arr[i]);
//   // emptyarr.push(arr[i]);
// }
// // console.log(emptyarr);

// // // --------------------seven-----------------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = 0;
// let odd = 0;
// let evennum = [];
// let oddnum = [];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     even = even + arr[i];
//     evennum.push(arr[i]);
//     // console.log(`Even number ${arr[i]}`);
//   } else {
//     odd = odd + arr[i];
//     oddnum.push(arr[i]);
//     // console.log(`Odd number ${arr[i]}`);
//   }
// }
// console.log(`Even number is ${evennum}`);
// console.log("Even number total is :" + even);
// console.log(`Odd number is ${oddnum}`);
// console.log("Odd number total is :" + odd);

// // -----------------eight--------------------
// var sumPrime = 0;

// for (let i = 2; i <= 100; i++) {
//   let num = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       num = 1;
//       break;
//     }
//   }

//   if (i > 1 && num == 0) {
//     sumPrime = sumPrime + i;
//     console.log(i);
//   }
// }

// console.log(`Sum of prime numbers between  1 to 100 is : ${sumPrime}`);
// // -------------------------------------------------------------------------------
// var sum = 0;
// for (let i = 2; i <= 100; i++) {
//   var x = false;
//   for (j = 2; j < i; j++) {
//     if (i % j == 0 && j !== i) {
//       x = true;
//     }

//   if ((x = false)) {
//     sum.push(i);
//     console.log(i);
//   }
// }
// console.log("Total", sum)
// // --------------------------nine----------------------------------------------

// let arr = [2, 3, 1, 5, 6, 79, 4, 3, 55, 6, 64, 4, 3, 3];
// let reverse = arr.sort(function (a,b) {
//   return a - b;
// });
// console.log(reverse);

// ------------------------------------------------------------------------------
// let arrr = [2, 3, 1, 5, 6, 79, 4, 3, 55, 6, 64, 4, 3, 3];
// var accend = arrr.sort(function arrr(a, b) {
//   return a - b;
// });
// --------------------------------------------------------------------
// let arrr = [2, 3, 1, 5, 6, 79, 4, 3, 55, 6, 64, 4, 3, 3];
// var data = arrr.sort((a, b) => a - b);
// console.log(data);
// ---------------------------------ten---------------------------
// callback function

// function myfun(a, b, c) {
//   var d = a + b;
//   c(d);
// }
// function sec(e) {
//   console.log(e);
// }
// myfun(10, 20, sec);

// -------------------------------------------------over---------------------------------------

// ------------------------------------------------------
// --------------------------------------------------------------
// -----------------------------------------------------------

// let arr = [
//   2, 3, 45, 23, 5, 65, 7, 6, 78, 7, 5, 3, 2334, 54, 3, 4, 5, 3, 3, 466, 54,
//   44.9, 43,
// ];
// let addtion = arr.reduce((numberOne, numberTwo) => {
//   let total = Math.ce(numberOne + numberTwo);
//   return total;
// });
// console.log(addtion);

// let fruits = ["apple", "banana", "mango", "orange"];
// let ans = fruits.entries();
// for (i of ans) {
//   let xx = ans + i;
//   console.log(xx);
// }

// setInterval(currentDateTime, 1000);

// function currentDateTime() {
//   let a = new Date();
//   let date = a.toDateString();
//   let time = a.toLocaleTimeString();
//   console.log("Today");
//   return date, time;
// }
// currentDateTime();

// const a = [34, 4, 65, 12, 78];
// let answer = a.sort((a, b) => a - b);
// console.log(answer);

////////////Set Intervel and Set Tilmeout//////////////////

// let txt = document.getElementById("text");
// let strat = document.getElementById("start");

// i = 0;

// // strat.addEventListener("click", function () {
// var start = setInterval(function () {
//   // i += 1;
//   txt.innerText = i;
//   i++;
// }, 1000);
// // });
// function stop() {
//   setTimeout(() => {
//     clearInterval(start);
//   }, 1000);
// }
// // function start() {
// //   txt.innerText = i;
//   i++;
// }
// setInterval(start(), 1000);

// function start() {
//   let start = setInterval(() => {
//     txt.innerText = stoped;
//     stoped++;
//   }, 1000);
// }

// let start = setInterval(() => {
//   txt.innerText = i;
//   i+=;
// });
// let timeout = setTimeout(function () {
//   clearInterval(interval);
//   txt.innerText = "Hello";
// })
// "3", "10", "9", "8", "2", "7", "5", "1", "3", "0";

// // -----------filter----------------------------------------

// let sampleInput = [3, 10, 9, 8, 2, 7, 5, 1, 3, 0];

// let answer = sampleInput.filter((value) => value == 3);
// console.log(answer);

// ----------------------map-------------------------

// let map = [
//   { name: "selva", age: 25, height: 6.1 },
//   { name: "kannan", age: 26, height: 5.2 },
//   { name: "karthi", age: 27, height: 8.9 },
//   { name: "ganesh", age: 28, height: 5.1 },
// ];

// let answer = map.map();
// console.log(answer);
