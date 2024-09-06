// event types
// timestamp
// defaultPrevented
// target
// toElement
// srcElement
// currentTarget
// clinetX, clientY , screenX, screenY
// altKey , ctrlKey ,shift  key ,keycode


// const owl = document.getElementById('owl')
// // owl.addEventListener('click', function (event) {
// //   console.log(event)
// // })

// document.getElementById('images').addEventListener('click', function (event) {
//   console.log('images clicked in the ul tag')
// })

// document.getElementById('owl').addEventListener('click', function (event) {
//   console.log('owl clicked')
//   event.stopPropagation()
// })

// document.getElementById('google').addEventListener('click', function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   console.log('google clicked')
// }, false)

document.querySelector('#images').addEventListener('click', function (event) {
  console.log(event.target.parentNode)
  if (event.target.tagName === 'IMG') {
    console.log(event.target.id)
    let removeIt = event.target.parentNode
    removeIt.remove()
  }
  // removeIt.parentNode.removeChild(removeIt)
})