//Nullish Coalescing Operator
// Nullish Coalescing Operator is a new feature in ECMAScript2020 to the latest javascript language feature, and its symbol is ?? i.e double question mark.
// It is a logical operator that applies two operands, and returns its value of

// right-hand operand value when the left-hand operand is null or undefined
// left-hand operand value when the left-hand operand is not null or undefined
// This will be useful for default to fallback value when object properties are null or undefined.

const obj = {
  score: 0
};

const msg = `your score is ${obj.score ?? 20}`;

console.log(msg);
