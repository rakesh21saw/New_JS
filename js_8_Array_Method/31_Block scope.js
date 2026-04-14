//BLOCK SCOPE- Variable decleared inside a {} block can not be accessed from outside the block.


{
 // block scope sirf iss block ke andar hi accesable hai, bahar use nhi kar sakte.
}

// Block scope sirf let and const keyword pe use karte hai not for var.
//
{
  let a =25;
  const b ='RQN'
  var c= 50;
}
// console.log(a); // it will not print bz ye block ke bhar print kara rae hai
// console.log(b); // t will not print bz ye block ke bhar print kra rae hai.
console.log(c); // 50 - it will print bz var keyword pe block scopr apply nhi karta.but its not a gd idea

// Block scope for loop.

for (let x = 1; x <=3; x++) { // block scope inside the loop

    console.log(x);   // it will print 
}

// block scope outsid the loop
for (let y = 1; y <=3; y++) { 
}

// lets print outside the block

// console.log(y);// it will not print bz ye outside the block scope  hai.

// Block scope for if else.

let age = 35;
if (age>25) {
 let str="Adult"   
}
//console.log(age); // it will not print bz scope ke bahar print nhi kra sakte

//

let age1 = 35;
if (age1>25) {
 let str="Adult"   
 console.log(str); // adult, printed bz it is inside the block
}







