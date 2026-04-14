
/* we can use in any datatype ,return any data type, short circuting.

// Short-circuiting means JavaScript stops evaluating an expression as soon as the result is known.

It mainly happens with logical operators:

|| → first truthy value

&& → first falsy value

?? → checks only null & undefined

Short-circuiting = skip unnecessary evaluation

 short- circuting means if first value is truthy it will immediatly return that first value and other value will not be operate.
*/

/*1️⃣ OR Operator (||) → returns first truthy value
A || B
If A is truthy → return A
Otherwise → return B
*/
console.log( 3 || 'aman');// 3 bz  its truthy value
console.log('rana'|| 8);// rana
console.log("" || 'baba');// baba, bz empty string is falsy value
console.log(true || 0); // true bz its truthy
console.log(undefined || null); // null bz undefined is a falsy value
console.log(undefined || 0 || "" || 'hello' || 23 || null);// hello is only truthy value
//
const resturant = {};
 resturant.numGuests =23;
const  guest1 = resturant.numGuests || 10;
console.log(guest1);// 23, bz 23 is first truthy value
//
const resturant1 = 0;
 resturant1.numGuests =23;
const  guest2 = resturant1.numGuests || 10;
console.log(guest2);// 10,  bz 0 is falsy value and second is truthy value.

// ///////  short- circuting for AND operator. ////////////////////////////////////////////////////////
/*
2️⃣ AND Operator (&&) → returns first falsy value
Rule
A && B
If A is falsy → return A
Otherwise → return B

*/
 console.log(0 && 'tom');// 0, bz  0 is first falsy value
 console.log(7 && 'bob'); // bob
 console.log('hello'&& 23 && null && 'ram'); // null
//
const isLoggedIn = true;
const user = isLoggedIn && "John";
console.log(user); // "John"
/////////////////////////////////////////////////////////////////////////////////////////////////////

// 3️⃣ Nullish Coalescing Operator (??) → checks only null or undefined
// The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is: null, undefined

/*
Rule
A ?? B
If A is null or undefined → return B
Otherwise → return A

*/

 let marks; // marks = undefined
const result = marks ?? 50;
console.log(result); // 50

//0 valid value hai
const guests = 0; // 0 is nut null and undefined
const result1 = guests ?? 10;
console.log(result1); // 0

//  null ho to default
 const age = null;
const finalAge = age ?? 18;
console.log(finalAge); // 18 

//  empty string '' valid hai
const username = '';
const name = username ?? 'Guest';
console.log(name); // ''

// Example 5: boolean false valid hai

const isLoggedIn1 = false;
const status = isLoggedIn1 ?? true;

console.log(status); // false


/*
const value = false || true;
console.log(value); // true

const value2 = false ?? true;
console.log(value2); // false

Default sirf tab chahiye jab value missing ho, galat na ho.”
*/