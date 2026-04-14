/*
The forEach() method is used to loop through an array.

✅ Runs a function for each element
❌ Does NOT return a new array
❌ Cannot break or stop early

📌 Syntax
array.forEach((element, index, array) => {
    console.log(`idx=${index} value=${element}`);
});
// the callback receives three arguments:
// 1. the current element
// 2. its index
// 3. the array being traversed


*/

const  movments = [200,450,-470,900.-800,-130,-70]

movments.forEach((elment)=>{
    console.log(elment);   
})
//console.log(movments); //[ 200, 450, -470, 100, -130, -70 ] 

// Access Index
 movments.forEach((elment,index)=>{

    console.log(index,elment);
    
 })

 //Modify Elements

 movments.forEach((elment,index,array)=>{
    array[index] = elment*2;
    //console.log(elment);
    
   
})

console.log(movments);//[ 400, 900, -940, 200, -260, -140 ]

// you don’t have to destructure the args:

movments.forEach(function (el) {
    // only need the element? just take one parameter
    console.log(el * 2);
});


//                         NOTES                         //

// 1️⃣ forEach always visits elements in order (0 → length-1)- Order will no change.
const arr = [10, 20, 30];
arr.forEach(n => console.log(n));

// 2️⃣ Ignores empty slots (sparse arrays)
const arr1 = [1, , 3];
arr.forEach(n => console.log(n));

// 3.❌ Break nahi kar sakte
//🔁 Stop karna ho → for...of ya for

//1️⃣ “forEach is not asynchronous; callbacks are invoked synchronously”

const arr3 = [1, 2, 3];

arr.forEach(n => {
  console.log(n);
});
console.log("Done");

//2️⃣ “we can pass an optional second argument to forEach which becomes this inside the callback”
//Normal function → thisArg kaam karega

//Arrow function → thisArg ignore
/*
numbers.forEach(function (n) {
    this.sum += n;//// `this` inside callback refers to that object
}, 
{sum: 0});
*/