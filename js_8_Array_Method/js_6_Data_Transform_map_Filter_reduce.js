// These are array methods used in functional programming.


// 1️⃣ map() – Transform Each Element
// map()-Used when we want to change every item in an array.
//Runs function on each element,Returns a new array,Same length as original.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);//doubled


// 2️⃣ filter() – Select Some Elements- Used when you want to keep only certain items.
// filter returns a new array containg the array elment that passed  a specific test condition.

// Get even numbers
const numb = [1, 2, 3, 4, 5, 6];

const evens = numb.filter(num => num % 2 === 0);
console.log(evens);


// 3️⃣ reduce() – Combine Into Single Value

//Sum of numbers
const no = [1, 2, 3, 4];

const sum = no.reduce((total, num) => total + num, 0);
console.log(sum);//10

/*
Method	               Purpose	                                      Returns
map()	           Transform each item	                         New array (same length)
filter()	        Select some items	                         New array (smaller or equal)
reduce()	         Combine into one value	                       Single value

*/