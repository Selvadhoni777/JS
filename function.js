// -------funtion hoisting-----

function fn() {
  console.log("Function inside declaration");
}
fn();

let fn1 = function (a, b) {
  var c = a % b;
  console.log("Function expression declaration");
  return c;
};
console.log(fn1());

let b = ["a", "b", "c", "d", "e"];

b.forEach(function (i) {
  console.log(i.length);
});

let sum = (a, b) => {
  return a + b;
};

console.log(sum(65, 75));
