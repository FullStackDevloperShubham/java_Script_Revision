const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('task impleted')
    resolve()
  }, 1000)
})


promiseOne.then(function () {
  console.log("hello .then")
})


new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('async task')
    resolve()
  }, 1000)
})
  .then(function () {
    console.log('task 2 resolved')
  })

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {

    resolve({ userName: "test", email: "test@gmail.com" })
  }, 1000)
})
  .then(function (user) {
    console.log(user)
  })


const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false
    if (!error) {
      resolve({ username: "test", password: "test" })
    } else {
      reject('ERROR : Something went wrong')
    }
  }, 1000)
})
promiseFour.then((user) => {
  console.log(user)
  return user.username
})
  .then((username) => {
    console.log(username)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    console.log("finally called")
  })

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true
    if (!error) {
      resolve({ username: "javaScript", password: "js" })
    } else {
      reject('ERROR')
    }
  }, 1000)
})

async function consumePromiseFive() {
  try {
    const data = await promiseFive
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
consumePromiseFive()


// async function apiData() {
//   try {
//     const responceData = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await responceData.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// apiData()

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((responce) => {
    return responce.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })












