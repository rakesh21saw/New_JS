/*

1️⃣ What is a Map?

A Map is a built-in JavaScript object that stores key–value pairs.
A Map is a collection of key–value pairs where keys can be of any data type.”

👉 Similar to an object, but:
Keys can be any data type
Maintains insertion order
More powerful and flexible than objects

2️⃣ Why Do We Use Map?

We use Map when:
Keys are not just strings
We need better performance for frequent additions/removals
Order of insertion matters
We want reliable key-value handling

3️⃣ Syntax
const myMap = new Map();

🧠 Memory Trick
“Object = simple key-value - key always are string
Map = powerful key-value” - kets are any  datatype 

*/

const resturent = new Map();

// to fill the map use set method

resturent.set('name','mamaResturent')
resturent.set(1,'infocity') 
resturent.set(2,'patia')
//console.log(resturent.set(2,'patia'));

//set method return the updated map
resturent.set('menu',['indian','chinese','organic','nonveg']).set('open',11).set('close',23)
.set(true,'we are open')
.set(false,'we are closed')

// to raed data from map we use get method- get() key ke through value deta hai
 
console.log(resturent.get('name'));// mamaResturent
console.log(resturent.get(1));// infocity
console.log(resturent.get(true));// we are open
console.log(resturent.get('open'));// 11
console.log(resturent.get('menu'));// [ 'indian', 'chinese', 'organic', 'nonveg' ]

// 
const time = 21;

const timeDetail= resturent.get(time> resturent.get('open') && time< resturent.get('close'));
console.log(timeDetail);// we are open


/////////////////////////////////////////////////////////////////////////////

// Property of map.

// has(key)-->Checks if a key exists.-->Returns true or false.

console.log(resturent.has('menu'));// true

// Delete- Removes a key–value pair.

console.log(resturent.delete(2));// true
console.log(resturent);// it will delated


//size (Property)- Returns total number of entries.

console.log(resturent.size);// 7 item

// clear()- Removes all entries.

// resturent.clear();
// console.log(resturent);// Map(0) {}


// keys()-Returns an iterator of keys.



// 

resturent.set([1,2],'Test')
console.log(resturent);





















