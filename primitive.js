// ---------------primitive datatype----------

//primitive data type la value change pana change panra yedathula matum change aagum

var a = 10;
b = a;
console.log(b);
b = 20;
console.log(b, a);

// ------reference datatype--------------

//reference data typela array and object rendulayum value pinnadi change panna already irukarathulayum change aagirum

arr = [1, 2, 3, 4, 5];
arr2 = arr;
console.log(arr2);
arr2.push(6);
console.log(arr2);
console.log(arr2, arr);

obj = { name: "a", age: 20 };
obj1 = obj;
console.log(obj1);
obj1.name = "b";
console.log(obj1);
console.log(obj);

Object.assign((obj1.name = "d"));
console.log(obj1);
console.log(obj1);
