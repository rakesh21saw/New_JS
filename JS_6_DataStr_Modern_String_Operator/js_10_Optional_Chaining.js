/*
What is it?

Optional chaining (?.) is a JavaScript operator that safely accesses properties, methods, or array elements.

🔹 Why use it?
Prevents runtime errors
Handles missing data safely
Cleaner than multiple if checks

🔹 How it works
Stops execution if value is null or undefined
Returns undefined instead of throwing an error

🔹 Syntax
obj?.prop
obj?.method?.()
arr?.[0]

🔹 Example
user.address?.city

🔹 When to use
API responses
Nested objects
Optional properties

🔹 When NOT to use
When property must exist
For debugging critical errors

🔹 Important rule
Works only with null and undefined
(Not with 0, false, or '')

🔑 One-line (Interview)
“Optional chaining allows safe access to nested properties without errors.”

*/


const resturantPatia = {
  name: 'Mama Resturant',
  location: 'Patia, BBSR',
  catogries: ['indian', 'chinese', 'italian'],
  starterMenu: ['butterPartha', 'pohaJelbi', 'puriSabjiChola'],
  mainMenu: ['vegThali', 'alloPartha', 'satuPartha'],

  openingHours: {
    mon: { open: 9, close: 22 },
    tue: { open: 10, close: 23 },
    fri: { open: 8, close: 24 }
    // wed, thu, sat, sun missing
  }
};

// Normal Access (jab day exist karta hai)- dont use optinal chainng

console.log(resturantPatia.openingHours.mon.open);//9

// when day not exists.
//console.log(resturantPatia.openingHours.sun.open);// Cannot read properties of undefined,bz sunday is not defined.

// to overcome this type of situation we use optinal chaining.

console.log(resturantPatia.openingHours.sun?.open);// undefined

// in variable 
const sundayOpen = resturantPatia.openingHours.sun?.open;
console.log(sundayOpen);// undefined

// with loop 

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = resturantPatia.openingHours[day]?.open;
  console.log(`${day} : ${open}`);

//  with The nullish coalescing operator (??)
  const open1 = resturantPatia.openingHours[day]?.open1 ?? 'Closed';
    console.log(`${day} : ${open1}`);
}

// Best Practice: Optional Chaining + Default Value

const day = 'sun';
const status =resturantPatia.openingHours[day]?.open ?? 'Closed';
console.log(status);// closed


// Optinal chaining for method 

console.log(resturantPatia.order?.(0,1) ?? 'method does not exist');// method does not exist


// array 


const user =[{name:'jonas', age: 28}]; // It has one object at index 0

console.log(user[0]?.name ?? "user arry empty");// jonas
console.log(user[0]?.age ?? "user arry empty");// 28

// if (user.length>0) {
//     console.log(user[0].name); 
// } else{

//     console.log('user array emplty');
    
// }

console.log(user[1]?.name ?? "user arry empty");// user arry empty bz object at index 1 
console.log(user[1]?.age ?? "user arry empty");// user arry empty






