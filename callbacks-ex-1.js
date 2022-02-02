// write your own function which takes a callback

// Your name
// A function which it will call with the length of your name
// Now, call this function with the two parameters.

// Your name. This is simple.
// A function. This function will get the length of the string. 
// Use that length to print a message: OMG! my name is X char long!

const checkLength = (name, cb) => {
    const nameLength = name.length;
    cb(nameLength);
}

const printLength = (x) => {
    console.log("name length is " + x);
}

checkLength("sumit", printLength);