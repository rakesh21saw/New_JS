/*
OPERATOR- Operator basically  allows us to transform values or combine multiple values and really to do all kind of work
with values.


*/

// Arithmetic operator:(+, - *, %)

// -
const ageGuddu = 2065- 1991;
console.log(ageGuddu);// 74


const agePusu = 1995 - 1999;
console.log(agePusu);//  -4

console.log(ageGuddu,agePusu); // 74 -4

console.log(ageGuddu * 2,agePusu/2, 2**3 );// 148 -2,8

// + = to joint string or concate string

const firstName = "Rakesh";
const lastName = " Saw";

console.log(firstName + lastName);// Rakesh Saw

//  for space bt them

console.log(firstName + ' ' + lastName);// Rakesh  Saw
console.log(firstName + '   ' + lastName);// Rakesh    Saw


// Assigment operator =  It  is used for equal sign

let x = 10 + 5;
console.log(x);// 15
 
//
x += 20;// x= x+20
console.log(x);// 35

//
 x *=5; // x= x*5=> 35*5= 175
 console.log(x);//175

//
  x++; // x = x+1=> 175+1= 176

  console.log(x);// 176

  x--;
  console.log(x);// 175


  // Comparision operators - it is used to produce boolean value.
  
  const ageGuddu1 = 2065- 1995;
   const pusu1 = 2065- 1999;

   console.log(ageGuddu1 > pusu1);// true
   console.log(ageGuddu1 < pusu1);// false

   console.log(pusu1>=100);//false
   console.log(pusu1>=66);// true

   //*****/ All operation done in js is from left to right
   
   


   
  



