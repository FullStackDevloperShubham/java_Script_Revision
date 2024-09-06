// function language() {
//   console.log("javaScript");
// }
// console.log(language())

function add(number_1, number_2) {
  // console.log(number_1 + number_2);
}
const data = add(12, 12)
// console.log(data);

function loginUser(userName) {

  return `${userName} loggedIn `
}
// const name = loginUser()
// console.log(loginUser());

function calculatePrice(val1, val2, ...num1) {
  return num1
}

// console.log(calculatePrice(12, 13, 14, "js"));
const user = {
  name: "js",
  price: 12
}

function handleObj(anyObj) {
  console.log(`user name is ${anyObj.name}`);
}
handleObj(user)
