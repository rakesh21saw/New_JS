/*
The find() method is used to return the first element in an array that matches a condition.

The find() method returns the first element in an array that satisfies a testing function. 
If no element matches, it returns undefined.

usecases- Use case	Finding a single object in an array

*/

// Find first number greater than 10

const numbers = [5, 8, 12, 20];
const result = numbers.find(num => num > 10);
console.log(result);

// note- Returns the first matching element only, while filter return all whichbsatisfied the condition

// Find vs Filter vs Map

const nums = [10, 20, 30, 40, 50];

// find() — returns FIRST matching element
nums.find(n => n > 25);           // 30 (single value)

// filter() — returns ALL matching elements
nums.filter(n => n > 25);         // [30, 40, 50] (array)

// map() — returns transformed array
nums.map(n => n * 2);             // [20, 40, 60, 80, 100] (array)
/*
Related Methods
Method	Returns	Use Case

find()	First matching element	Find one object
findIndex()	Index of first match	Get position of element
filter()	Array of all matches	Find multiple objects
some()	true/false	Check if any match exists
includes()	true/false	Check if value exists
Golden Rule: Use find() when you need one specific object, use filter() when you need multiple objects.

*/

// findIndex() returns the index (position) of the first element that satisfies a condition.
//If no element matches → it returns -1.
// Runs once per element---Stops when first match is found--Returns index (number)

// q = Find index of first number greater than 10

const numbers1 = [5, 8, 12, 20];

const index = numbers1.findIndex(num => num > 10);
console.log(index);//12 is at index 2.

//
// Find user by id
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const index1 = users.findIndex(user => user.id === 2);
console.log(index1);

// If No Match

const nums1 = [1, 2, 3];

const result1 = nums1.findIndex(n => n > 10);
console.log(result1);// -1

//find()	f                                             indIndex()
//Returns element	                                     Returns index
// Returns undefined if not found	                     Returns -1 if not found