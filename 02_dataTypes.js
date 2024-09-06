// let name = "shubham" //string
// let age = 23 // int
// let isLogIn = false //boolean

// null standalone value
// undefined , variable declared but not initialized
// symbol = fot uniqueness

// object
// console.log(typeof (null));

// console.log(typeof undefined);

// Data types

// Premitive and non-premitive
// All premitive data types are CALL BY VALUES
// other are REFERENCE TYPES (non premitive)
//  non premitive array , objects , Function

// const id = Symbol('123')
// let Obj = {
//   name: "shubham",
//   age: 22
// }

// const myFunction = function () {
//   console.log("hello world!");
// }

// console.log(typeof myFunction);


//MEMORY
// Stack (premitive)    , heap  (non-premitive)

let name = "abc"
let anotherName = name
anotherName = "javascript"
console.log(anotherName);
console.log(name);



let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"
console.log(userOne);
console.log(userTwo);


