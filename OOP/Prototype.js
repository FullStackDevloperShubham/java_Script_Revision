

function multiple(num) {
  return num * 5
}

multiple.power = 2
console.log(multiple(5))
console.log(multiple.power)
console.log(multiple.prototype)

function createUser(username, score) {
  this.username = username
  this.score = score
}

createUser.prototype.increment = function () {
  score++
}

createUser.prototype.print = function () {
  console.log(this.score)
}

const js = new createUser("javascript", 23)
const c = createUser("cjs", 34)


js.print()























