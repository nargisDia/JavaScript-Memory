// JavaScript Memory

/*
? Call Stack
! Primitive Data Type
* string, Number, Boolean, Undefined, Null, Symb, BigInt
*/
// let fullName = 'Nargis diya';

// let webDeveloper = fullName;
// webDeveloper = 'Nargis';

// console.log(fullName);
// console.log(webDeveloper);

/*
? Heap
! Non-Primitive Data type
* object, Array[]
*/

let student = {
  name: "diya",
  age: 30,
};

let people = student;
// people = {
//   name: "riya",
//   age: 20,
// };

people.name = "diya";
people.age = 35;

let car = ["BMW, Audi"];
let newCar = car;
newCar[0] = 'Toyota';

console.log(car);
console.log(newCar);
