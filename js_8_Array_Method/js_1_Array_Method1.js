/*
1.The slice() method extracts a portion of an array and returns a new array — without changing the
 original array.

 Syntax
array.slice(start, end)

Parameters:
start → Index to begin extraction (inclusive)
end → Index to stop extraction (exclusive)
Both are optional.

// 
Returns a new array.
❌ Does NOT modify the original array.
Works with strings too.

*/let arr = ['a','b','c','d','e','f']


//If end is not provided, it slices till the end.
console.log(arr.slice(2));// [ 'c', 'd', 'e', 'f' ]
//
const result = arr.slice(1, 4);
console.log(result);// [ 'b', 'c', 'd' ]

// Negative Index- -1 → last element, -2 → second last element...........

console.log(arr.slice(-2)); 

//
//Remove First and Last Element
// Actual index = array.length + negativeValue= 5+(-1)=4
// slice(1, -1) → slice(1, 4)
console.log(arr.slice(1, -1)); // [ 'b', 'c', 'd', 'e' ]

// Copy Entire Array
console.log(arr.slice())// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// **note= spread operator - prints elements separately while slice prints the whole array

//The spread operator expands (spreads out) the array into individual elements.
console.log(...arr);// a b c d e f


///////////////////////////////////////////////////////////////////////////////////////////

/*
2. The splice() method is used to add, remove, or replace elements in an array.
⚠️ Important: It modifies the original array.

syntax
array.splice(start, deleteCount, item1, item2, ...)

Parameters:

start → Index to begin changes
deleteCount → Number of elements to remove
items (optional) → Elements to add
*/


const numArr = [10, 20, 30, 40, 50];
console.log(numArr.splice(2)); //[ 30, 40, 50 ]
console.log(numArr);// [ 10, 20 ]

//Remove Elements
console.log(numArr.splice(1,2)); 

// Negative Index

let arr1 = [1,2,3,4,5,6]

arr1.splice(-1)
console.log(arr1);

///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
3. The reverse() method reverses the order of elements in an array.

⚠️ Important: It modifies the original array.

📌 Syntax
array.reverse()

No parameters needed.

Method	       Modifies Original   ?	 Returns New Array?
reverse()	        ✅ Yes	                 ❌ No
*/

const car = ['tata','mahinndra','toyta','maruti'];

// The original array is changed.
//console.log(car.reverse());//[ 'maruti', 'toyta', 'mahinndra', 'tata' ]
const carName = car.reverse();
console.log(carName); //[ 'maruti', 'toyta', 'mahinndra', 'tata' ]  

//
// note- If you don’t want to modify the original array, use slice() first:
 const arr2 = [2,4,6,8]
  const reversed = arr2.slice().reverse()
  //console.log(arr2);
  console.log(reversed);//[ 8, 6, 4, 2 ]
  
//
 // Works with Strings? (Not Directly)

 const str = "hello";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // "olleh"
 
  ///////////////////////////////////////////////////////////////////////////////////////

  /*
 4. The concat() method is used to merge arrays (or values) together.

✅ Returns a new array
❌ Does NOT modify the original arrays

📌 Syntax
array1.concat(array2, array3, ..., value)

You can pass:
Another array
Multiple arrays
Individual values
  */

// 1️⃣ Merge Two Arrays

const a = [1, 2];
const b = [3, 4];

const merge = a.concat(b)
console.log(merge);//[ 1, 2, 3, 4 ]

// by spread operator 
console.log(...a,...b);//1 2 3 4
console.log([...a,...b])// [ 1, 2, 3, 4 ]

// 2️⃣ Merge Multiple Arrays

const a1 = [1];
const b1 = [2];
const c1 = [3];

const result1 = a1.concat(b1, c1);
console.log(result1); // [1, 2, 3]

// 3️⃣ Add Values Directly

const num1 = ['a', 'b'];

const result2 = num1.concat(3, 4);
console.log(result2); //[ 'a', 'b', 3, 4 ]

///////////////////////////////////////////////////

/*
5.The join() method converts an array into a string.
✅ Returns a string
❌ Does NOT modify the original array

// Syntax
array.join(separator)
separator → Optional (default is ",")

Method	         Returns	               Modifies Original?
join()	          String	                  ❌ No

*/

const fruit = ["apple", "banana", "mango"];

//console.log(fruit.join());//apple,banana,mango
const fruitNmae  = fruit.join()
console.log(fruitNmae);//apple,banana,mango


// 2️⃣ Custom Separator

let word = ['a','b','c','d','e','f']

console.log(word.join("-"));//a-b-c-d-e-f
console.log(word.join(" - "));//a - b - c - d - e - f


// 3️⃣ No Separator (Empty String)

//This is commonly used when reversing a string:
console.log(word.join(''));//abcdef// 

//4️⃣ Using Space as Separator

const words = ["I", "love", "JavaScript"];
console.log(words.join(' '));//I love JavaScript
