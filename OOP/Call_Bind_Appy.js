function setUserName(username) {
  this.username = username
}
function createUser(username, email, password) {
  setUserName.call(this, username)
  this.email = email
  this.password = password
}

const javaScript = new createUser('js', 'js@gmail.com', 123)
console.log(javaScript)
