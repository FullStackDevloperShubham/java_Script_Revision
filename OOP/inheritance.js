class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(this.username)
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username)
    this.password = password;
    this.email = email;
  }

  addCouser() {
    console.log(`${username}`)
  }
}

const obj = new Teacher('CoreJava', 'java@gmail.com', 1223)

obj.addCouser()
