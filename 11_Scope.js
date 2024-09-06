// let 
// var
// const

let number_3 = "js"

if (true) {
  let number_1 = 12
  const number_2 = 13
  // var number_3 = 14
}
// console.log(` ${number_1} ${number_2}  ${number_3}`);


function one() {
  const userName = "javaScript"
  function two() {
    const website = "google"
    // console.log(userName);
  }
  // console.log(website);
  two()
}
one()

if (true) {
  const username = "js"
  if (username === "js") {
    const website = " google"
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(userName);


// console.log(addOne(5))
function addOne(num) {
  return num + 1
}

// console.log(addTwo(5))
const addTwo = function (num) {
  return num + 2
}

