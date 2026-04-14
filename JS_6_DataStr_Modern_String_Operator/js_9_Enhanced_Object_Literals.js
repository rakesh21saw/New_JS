/*What Are Enhanced Object Literals?

Enhanced Object Literals are ES6 features that make writing object literals:

Shorter

Cleaner

More readable

They allow new shorthand ways to define properties and methods in objects.

2️⃣ Why Were They Introduced?

Before ES6:

Object syntax was long and repetitive

Writing methods and properties required extra code

Enhanced object literals:

Reduce boilerplate code

Improve readability

Make objects easier to maintain

3️⃣ Features of Enhanced Object Literals

There are 3 main features 👇

🔹 1. Property Shorthand
Before ES6 ❌
const name = 'Cafe';
const location = 'Delhi';

const restaurant = {
  name: name,
  location: location
};

ES6 (Enhanced) ✅
const name = 'Cafe';
const location = 'Delhi';

const restaurant = {
  name,
  location
};


👉 When variable name = property name, you can write it once.

🔹 2. Method Shorthand
Before ES6 ❌
const restaurant = {
  order: function (food) {
    console.log(food);
  }
};

ES6 (Enhanced) ✅
const restaurant = {
  order(food) {
    console.log(food);
  }
};


👉 Cleaner and more readable.

🔹 3. Computed Property Names

You can use expressions as property names.

Example
const day = 'mon';

const openingHours = {
  [day]: {
    open: 9,
    close: 22
  }
};
👉 Property name becomes "mon" dynamically.

*/
