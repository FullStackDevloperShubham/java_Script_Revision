// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get email() {
//     return this._email.toUpperCase();
//   }
//   set email(value) {
//     this._email = value;
//   }
// }

// const js = new User("js@gmail.com", "abc")
// console.log(js.email)


function User(email, password) {
  this.email = email;
  this.password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  })
}

const js = new User("js@gmail.com", "abc")
console.log(js.email,)