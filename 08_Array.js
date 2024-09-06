//Array
// const array = [0, 1, 2, 3]
// console.log(array);

// console.log(array[3]);

//Methods
// array.push(4)
// console.log(array);

// array.pop()
// console.log(array);

// array.unshift(1)
// console.log(array);

// array.shift(9)
// console.log(array);


// slice , splice
// console.log("A", array);

//////////////////////
// SPREAD OPERATOR

const city = ['pune', 'mumbai', 'delhi']
const anotherCity = ['kolkata', 'nagpur', 'nashik']
const allCity = [...city, ...anotherCity]
// console.log(allCity);

const array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const realArray = array.flat(Infinity)
// console.log(realArray);

// console.log(Array.isArray("javaScript"))
// console.log(Array.from("javaScript"))

const score_1 = 100
const score_2 = 200
const score_3 = 300
console.log(Array.of(score_1, score_2, score_3)); // new array created with variables









