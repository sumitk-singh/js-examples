// Nullish-coalescing-operator '??'
// The nullish coalescing operator is written as two question marks ??.

// As it treats null and undefined similarly, we’ll use a special term here, in this article. We’ll say that an expression is “defined” when it’s neither null nor undefined.

var value_1 = null; //null or undefined
var x = (value_1 ? ? 10);
console.log(x);