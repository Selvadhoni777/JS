//-------------------------7 SEVEN-----------------------------------
// var array = [4, 2, 5, 89, 5, -1, 4, 13, 46, 7, 23, 1, -5];

// function swap(arr, a, b) {
//   var temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// }

// function bubble(para) {
//   var len = para.length;

//   for (i = 0; i < len; i++) {
//     for (j = 0; j < len - i; j++) {
//       if (para[j] > para[j + 1]) {
//         swap(para, j, j + 1);
//       }
//     }
//   }

//   return para;
// }
// var bubble = bubble(array);
// console.log(bubble);

// //----------------------------6 SIX-------------------------------------
// function passcalFunction(x) {
//   var result = [];
//   result[0] = [1];
//   result[1] = [1, 1];
//   for (var row = 2; row < x; row++) {
//     result[row] = [1];
//     for (var col = 1; col <= row - 1; col++) {
//       result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
//       result[row].push(1);
//     }
//   }
//   return result;
// }

// for (var i = 0; i < passcalFunction(10).length; i++) {
//   document.write(passcalFunction(10)[i] + "<br>");
// }
// -------------------------------------------------------

// function pascals(n) {
//   if (n === 0) return [];
//   if (n === 1) return [[1]];
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     let a = [];
//     for (let j = 0; j < i; j++) {
//       if (j === 0 || j === i - 1) {
//         a.push(1);
//       } else {
//         a.push(result[i - 2][j - 1] + result[i - 2][j]);
//       }
//     }
//     result.push(a);
//   }
//   return result;
// }
// console.log(pascals(5));

// ===============================================

// function pascal(a) {
//   if (a === 0) return [];
//   if (a === 1) return [[1]];
//   let result = [];
//   for (i = 1; i <= a; i++) {
//     let a = [];
//     for (j = 0; j < i; j++) {
//       if (j === 0 || j === i - 1) {
//         a.push(1);
//       } else {
//         a.push(result[i - 2][j - 1] + result[i - 2][j]);
//       }
//     }
//     result.push(a);
//   }
//   return result;
// }
// console.log(pascal(5));

// // ---------------------------5 FIVE--------------------------------------------------
// var numberTerms = Number(prompt("Enter number"));
// var firstValue = 0;
// var secondValue = 1;
// var addValue;
// if (numberTerms >= 2) {
//   console.log(firstValue);
//   console.log(secondValue);
//   addValue = firstValue + secondValue;
//   while (addValue <= numberTerms) {
//     console.log(addValue);
//     firstValue = secondValue;
//     secondValue = addValue;
//     addValue = firstValue + secondValue;
//   }
// } else {
//   alert("Enter only positive value and above 2");
// }
// ------------------------------------4FOUR-------------------------------------
// let num1 = 100;
// let num2 = 50;
// for (i = 0; i <= num1 && i <= num2; i++) {
//   if (num1 % i == 0 && num2 % i == 0) {
//     var t = i;
//   }
// }
// console.log(t);
// // =============RECRUSION================
// function gcdfun(valueOne, valueTwo) {
//   while (valueOne != valueTwo) {
//     if (valueOne > valueTwo) {
//       valueOne = valueOne - valueTwo;
//     } else {
//       valueTwo -= valueOne;
//     }
//   }
//   return valueTwo;
// }
// let result = gcdfun(12, 30);
// console.log(result);
//--------------------------------3THREE-------------------------------------------------

// function factorial(n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// var inputNum = Number(prompt("Enter a number"));

// var call = factorial(inputNum);
// console.log(call);

// ------------------------------2TWO------------------------------------------
// // var numArr = [1, 2, 3, 45, 6, 3, 2, 4, 1, 1, 1, 12, 2, 2, 2, 9, 7, 5];
// var numArr = ["a", "b", "b", "c", "k", "j", "k"];
// var dup = [];
// for (i of numArr) {
//   if (dup.indexOf(i) === -1) {
//     dup.push(i);
//   }
// }
// var ans = dup.sort();
// // var ans = dup.sort(function fun(a, b) {
// //   return a - b;
// // });
// console.log(ans);

// -------------------------------------1ONE------------------------------------------------
