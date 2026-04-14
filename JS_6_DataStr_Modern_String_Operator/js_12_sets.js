/*
 Set - A Set is a built-in JavaScript object that stores unique values only.

 2️⃣ Why Do We Use Sets?

We use Sets to:

Remove duplicate values
Store unique data
Perform fast checks (has)
Handle collections where order and index are not important

SET can hold mixed datatype

*/


// synrex - const mySet = new Set(iterable);


const orderSet =  new Set(['pasta','pizza','burger','pasta','pizza'])
console.log(orderSet);// Set(3) { 'pasta', 'pizza', 'burger' }
// 
console.log(new Set('jonnnnas'));// Set(5) { 'j', 'o', 'n', 'a', 's' }


//Important Properties & Method:

// size 
console.log(orderSet.size);// 3
console.log(new Set('jonnnnas').size)// 5

// add()- add new elments
console.log(orderSet.add('daalChwal'));// Set(4) { 'pasta', 'pizza', 'burger', 'daalChwal' }


// ** has()
console.log(orderSet.has('burger'));// true
console.log(orderSet.has('bread')); // false

// delete()
orderSet.delete('burger');
console.log(orderSet);// Set(3) { 'pasta', 'pizza', 'daalChwal' }

// clear()
// orderSet.clear();
// console.log(orderSet);// Set(0) {}

// sets are iterable so we can loop 

for (const order of orderSet) {
  console.log(order);
}

// 

const Staff= ['waiter','chef','waiter','manager','chef','waiter'];

const staffUnique = new Set(Staff);

console.log(staffUnique); // Set(3) { 'waiter', 'chef', 'manager' }

// conversion from a Set to Array is easy bz both are irretable.
const  staffUnique1 = [...new Set(Staff)];
console.log(staffUnique1);// 'waiter', 'chef', 'manager' ]- newly constructed array







