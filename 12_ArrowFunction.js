const user = {
  username: "js",
  wellcome: function () {
    console.log(`${this.username} , wellcome`);
    console.log(this);
  }
}

// user.wellcome()
// user.username = "c++"
// user.wellcome()

// console.log(this);

function one() {
  const username = "js"
  // console.log(this.username);
}
one()

const name = () => {
  const _name = "js"
  console.log(this);
}
// name()

const addTwo = (num1, nume2) => {
  return num1 + nume2
}
// console.log(addTwo(2, 3));

// const mulitple = (num) => (num)
const mulitple = (num) => ({ username: "js" })
// console.log(mulitple(1));
// console.log(mulitple(12))

const myArray = [2, 3, 4, 5, 6]
// myArray.forEach()




