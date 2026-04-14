/*
 loop over array is iterable but loop over object is not iterable in direct way.

 What Does “Looping an Object” Mean?
Looping an object means:
Going through its properties (keys)
Accessing their values
Doing some operation on each key–value pair
Unlike arrays, objects are not index-based.

2️⃣ Why Do We Loop Objects?
We loop objects when:

Data is stored as key–value pairs
We want to read or process all properties
Data represents a real entity (user, restaurant, config, etc.)
Example use cases:
Show restaurant opening hours
Print user details
Validate object data
Convert object to array

3️⃣ When to Loop an Object?
Use object looping when:
Order does not matter
Data is named, not indexed
You want keys, values, or both

// Plain JavaScript objects are not iterable, but their keys, values, or entries can be iterated using 
   Object methods.”

=> “An iterable is a data structure that can be looped over using for...of.”

>=What is iterable then?
An iterable is something you can loop over using for...of.
Examples of iterable values:
Arrays ✅
Strings ✅
Maps ✅
Sets ✅

for (const char of 'hello') {
  console.log(char);
}


//////////////////////////////////////////////////////////////////////////////////////

“Arrays are iterable, objects are not — but object data can be converted into arrays.”

= Why objects are NOT iterable?
Objects store key–value pairs
They don’t have a built-in order like arrays
So JS does not allow direct for...of on objects

 
// ✅ How do we loop objects then?===> We convert the object into an iterable using:
// Main Ways to Loop an Object=====>There are 3 standard methods 👇

// 1.Object.keys() → array of keys
// Syntax-----  Object.keys(object)

// 2. Object.values() → Loop over VALUES
//     Syntax-----  Object.values(object)

// 3.Object.entries() → Loop over KEY + VALUE ⭐
// syntex--->   Object.entries(object)

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.Object.keys() →Object.keys() is a built-in JavaScript method that returns an array of an object’s property names (keys). 
   
// object → the object whose keys you want
//Return value → an array of keys (strings)

// Why Do We Use Object.keys()?
//We use Object.keys() when:
//We want to loop through object properties
//We need only keys, not values
//We want to convert object data into an array

const restaurant = {
  name: 'Mama Restaurant',
  location: 'Patia',
  rating: 4.5
};

// One-time use → direct loop
for( const key of Object.keys(restaurant)){
    console.log(key);   
}

// Reuse / logic / count → store in variable
const restInfo1 = Object.keys(restaurant);
console.log(restInfo1); // [ 'name', 'location', 'rating' ]

// “Both are valid; storing keys in a variable is preferred when reuse or additional operations are needed.”

//2. Object.values() is a built-in JavaScript method that returns an array of an object’s values.
// “Object.values() returns an array containing the values of an object.”


const restInfo2 = Object.values(restaurant)
 console.log(restInfo2);// [ 'Mama Restaurant', 'Patia', 4.5 ]


 // 3.Object.entries() is a built-in JavaScript method that returns an array of key–value pairs from an object.
 //Each key–value pair is returned as a two-element array.

 const allDetail = Object.entries(restaurant);
 console.log(allDetail);

 // 
 const openingHours = {
  mon: { open: 9, close: 22 },
  tue: { open: 10, close: 23 }
};

for (const [day, hours] of Object.entries(openingHours)) {
  console.log(`${day} opens at ${hours.open} am`);
  console.log(`resturant close ${day} at ${hours.close} pm`);
  
}
 
 