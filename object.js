var product = {
    "item": "Wire",
    "size": "2.5 sqmm",
    "length": "90 mtr",
    "price": "INR 1845"
}

//var x = product.size;
//or
var x = product["size"];
console.log(x);

// Summary
// Objects are associative arrays with several special features.

// They store properties (key-value pairs), where:

// Property keys must be strings or symbols (usually strings).
// Values can be of any type.
// To access a property, we can use:

// The dot notation: obj.property.
// Square brackets notation obj["property"]. Square brackets allow to take the key from a variable, like obj[varWithKey].