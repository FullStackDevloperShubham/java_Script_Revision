class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(this.username)
  }

  static createId() {
    return `123`
  }
}

const js = new User('javascript')
console.log(js.createId())
