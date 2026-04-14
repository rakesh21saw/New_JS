/*
Looping Arrays in JavaScript (Using for Loop)
1️⃣ Importance of Looping Arrays

Arrays store multiple values in a single variable.
We often need to perform the same operation on every element.
Writing code for each element manually is inefficient and not scalable.
Loops allow us to process arrays dynamically, no matter their size.

Key Point: One loop can handle 10 or 10,000 elements.

2️⃣ Why We Use Loops with Arrays

We use loops to:
Access every element in an array
Calculate totals (sum, average, etc.)
Create a new array from an existing one
Modify or filter array values
Handle data coming from APIs or databases

3️⃣ When to Use a Loop

Use a loop when:
You must work with each element of an array
The data is repetitive
The array size is unknown or dynamic
The same logic must be applied to all items

4️⃣ How a for Loop Works with Arrays
Basic Syntax
for (let i = 0; i < array.length; i++) {
  // use array[i]
}

Explanation

i = 0 → starting index

i < array.length → loop until the last element

i++ → move to the next index

array[i] → access current element

5️⃣ Example: Looping Through an Array
const friends = ['Aman', 'Rohit', 'Rahul'];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

6️⃣ Example: Calculating Sum of Array Elements
const numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

//
When to Prefer for Loop
Use a for loop when:
You need the index
You want to use break or continue
You need to loop backwards
You want full control over iteration

*/


// for...of Loop -It gives you elements directly, not the index.
const resturantPatia = {
  name: 'Mama Resturant',
  location: 'Patia, BBSR',
  catogries: ['indian', 'chinese', 'italian'],
  starterMenu: ['butterPartha', 'pohaJelbi', 'puriSabjiChola'],
  mainMenu: ['vegThali', 'alloPartha', 'satuPartha'],
};

const menu = [...resturantPatia.starterMenu, ...resturantPatia.mainMenu]
for ( const item of menu);
console.log(menu);// we all get all indivisual element here one by one 

// for index use entries()- .entries() returns pairs → [index, value]
// “Object.values() returns an array containing the values of an object.”
for(const item of menu.entries()){
console.log(item); // it will provide elments with index.
}

// 

