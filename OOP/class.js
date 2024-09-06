// ES6
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  ecrpytPassword() {
    return `${this.password}abc`
  }

  capatilizeUsername() {
    return `${this.userName}`.toUpperCase()
  }
}

const js = new User('javaScipt', 'javaScript@gmail.com', "123")
// console.log(js.ecrpytPassword())
// console.log(js.capatilizeUsername())


