//A Promise is a JavaScript object that links producing code and consuming code

//A promise can be:
//fulfilled - The action relating to the promise succeeded
//rejected - The action relating to the promise failed
//pending - Hasn't fulfilled or rejected yet
//settled - Has fulfilled or rejected

// Example

const p = new Promise((resolve, reject) => {
  const a = 1 + 2;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("this is in then " + message);
}).catch((message) => {
  console.log("this in catch " + message);
});
