// Type casting

// Implicit changes
let myNumber = 10
let myString = "10"

console.log(myNumber == myString)
// true because compare only the values of the vars
console.log(myNumber === myString);
// false because compare the values and the type of the vars

// Explicitly changes

myNumber = 10
myString = Number("10")

console.log(myNumber === myString)

myString = "10"

console.log(myNumber.toString() === myString)
