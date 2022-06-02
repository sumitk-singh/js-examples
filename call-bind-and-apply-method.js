// Call, bind and apply method

//Call method
//The call method calls a function with a given this value and arguments provided individually.
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
//Bind method
//the bind method Returns a new function whose this value is bound to the provided value.
const person = {
  name: "Erons",
  greet: function () {
    return `Hello ${this.name}`;
  }
};

function greetPerson() {
  console.log(this.greet());
}

const bindPerson = greetPerson.bind(person);

bindPerson();

//--------------------------------------------------
//Apply method
//Calls a function with a provided this value. Further arguments are provided as a single array.
const erons = {
  name: "Erons",
  speech: function () {
    return `Hi, I'm ${this.name}`;
  }
};

function moreSpeech(age, hobby) {
  console.log(`${this.speech()}, I'm ${age} years old and I love ${hobby}`);
}

moreSpeech.apply(erons, [17, "cooking"]);
