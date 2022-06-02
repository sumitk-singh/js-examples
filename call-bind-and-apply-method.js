// Call, bind and apply method

//Call method
//The call() method calls a function with a given this value and arguments provided individually.
const personName = {
  name: "Erons",
  func: function () {
    return `Hi, I'm ${this.name}`;
  }
};

function moreDetails(age, hobby) {
  console.log(`${this.func()}, I'm ${age} years old and I love ${hobby}`);
}

moreDetails.call(personName, 17, "cooking");

//--------------------------------------------------
