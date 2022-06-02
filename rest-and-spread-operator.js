//Rest operator
//it is used to merge a list of function arguments into an array

//Example
const fun = (...input) => {
  let sum = 0;
  for (let i of input) {
    sum = sum + i;
  }
  return sum;
};

console.log(fun(3, 3, 3));
//---------------------------------
//Spread operator
// It is used to contatinate array elementa or objet properties.

//Example
const obj_1 = { a: "one", b: "two" };
const obj_2 = { c: "three", d: "four" };

const obj_3 = { ...obj_1, ...obj_2 };

console.log(obj_3);
