// eg to clear the concept of promisses

const p = new Promise((resolve, reject) => {
    const a = 1 + 2;
    if (a == 2) {
        resolve("success");
    } else {
        reject("failed")
    }
})


p.then((message) => {
    console.log("this is in then " + message);
}).catch((message) => {
    console.log("this in catch " + message);
})