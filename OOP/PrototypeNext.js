const user = "c++"

// const teacher = {
//   subject: "javascript"
// }
// const teachingSupport = {
//   isAvaliable: true
// }
// const TASupport = {
//   makeAssignment: 'jsAs',
//   fullTime: true,
//   __proto__: teachingSupport
// }

// teacher.__proto__ = user
// // modern syntax

// Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "c++    "
String.prototype.trueLength = function () {
  // console.log(`${this.name}`)
  console.log(`${this}`)
  console.log(`${this.trim().length}`)
}
anotherUserName.trueLength()
"java".trueLength()
