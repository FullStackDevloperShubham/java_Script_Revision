const city = "pune"
const anotherCity = "mumbai"

console.log(`${city} ${anotherCity}`);

const gameName = new String("PU-BG")

console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf('B'));

const newGame = gameName.slice(0, 3)
console.log(newGame);

// const anotherGame = gameName.slice(-4, 4)
// console.log(anotherGame);

const anotherGame = "     javascript  "
// console.log(anotherGame.trim(' '));
const url = "http://google.com/history%20daily"
// console.log(url.replace('%20', '-'));
console.log(url.includes('java'));












