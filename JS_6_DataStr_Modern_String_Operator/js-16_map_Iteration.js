// another way to write map - Direct Initialization with Data
// Jab data already available ho
// Map ko data ke saath hi banao
// Jab static structure banana ho


const question =new Map([
    
['question','what is best programming langauge in the world'],
[1,'java'],
[2,'c'],
[3,'python'],
[4,'js'],
['correct', 4],
[true,'sab hai'],
[false,'try again'],
]);
console.log(question);

///    CONVERT OBJECT TO MAP -> Use --> new Map(Object.entries(obj)).
const restaurant = {
  name: 'Mama Restaurant',
  location: 'Patia',
  open: 9,
  close: 22
};

// Convert to Map

const convertObjToMap = new Map (Object.entries(restaurant));
console.log(convertObjToMap);// Ye ek array of arrays deta hai jo format jo Map ko chahiye
console.log(convertObjToMap.get('name')); // Mama Restaurant
console.log(convertObjToMap.has('open'));// true


/////////////////////////////////////////////////////////////////////////////////

// Iteration on Map - map are iterable

const studentMarks = new Map([
  ['Rahul', 85],
  ['Aman', 92],
  ['Neha', 78],
  ['Priya', 88]
]);

// Direct Iteration

for( const [name, marks] of studentMarks){
    //console.log(key, value);
    if( typeof name === 'string' && typeof marks === 'number'){
    console.log(`${name} scored ${marks}`)
    }
    
    
}

// Only Names (keys) - keys only

for (const name of studentMarks.keys()) {
  console.log(name);
}

// only values- 

for (const marks of studentMarks.values()) {
  console.log(marks);
}

// Using forEach()
studentMarks.forEach((marks, name) => {
  console.log(`${name} → ${marks}`);
  
});

///////////////////////////////////////////////////////////////////

// Map iterable hota hai, isliye hum spread operator (...) use kar sakte hain.

const arr = [...studentMarks];
console.log(arr);// in aary

// Convert Only Keys to Array

const keysArray = [...studentMarks.keys()];
console.log(keysArray);// [ 'Rahul', 'Aman', 'Neha', 'Priya' ]

//onvert Only Values to Array

const valuesArray = [...studentMarks.values()];
console.log(valuesArray);//[ 85, 92, 78, 88 ]