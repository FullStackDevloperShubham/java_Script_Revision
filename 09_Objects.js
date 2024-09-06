// singleton
// Object.create

// Object literals

const symbol = Symbol("key1")
// console.log(symbol);


const jsUser = {
  name: "user",
  "full name": "user full name",
  [symbol]: "symbol key ",
  age: 20,
  email: "user@gmail.com",
}

// console.log(jsUser.name);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof jsUser[symbol]);

// Object.freeze(jsUser)
jsUser.name = "user two"
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("greeting")
}

// console.log();
// jsUser.greeting()

// const myApp = new Object()  //singleton object

const app = {}
app.id = "123abc"
app.name = "john"
app.isLoggedIn = false
// console.log(app);
const regularuser = {
  email: "john@example.com",
  fullName: {
    userFullname: {
      firstName: "John",
      lastName: "Smith",
    }
  }
}

// console.log(regularuser.fullName.userFullname.firstName);

const obj_1 = { 1: "a", 2: "b" }
const obj_2 = { 3: "c", 4: "d" }
// const obj_3 = Object.assign({}, obj_1, obj_2)
// console.log(obj_3);
const obj_3 = { ...obj_1, ...obj_2 }
// console.log(obj_3);

// DESTRUCTURING
const cityWithPopulation = {
  name: "pune",
  population: 1000,
  nation: "India"
}
const { name: n } = cityWithPopulation;
// console.log(n);


try {

  const fn = async function () {
    const data = await fetch('https://api.github.com/users', data)
    console.log(data);

  }

} catch (error) {
  console.log(error.message);
}













