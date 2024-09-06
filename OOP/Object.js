// object litral
let user = {
  username: "js",
  loginCout: 2,
  signIn: true,

  getUserDetails: function () {
    // console.log(this.username)
  }
}
// console.log(user.getUserDetails())

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)


// console.log(Math.PI)
