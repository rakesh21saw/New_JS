/*
The equality operator is used to check whether two values are equal. 
If they are, it returns true; if not, false.

JavaScript has two equality operators:

== → loose equality (does type coercion)

=== → strict equality (not preferred type coercion, )

18 == "18"    // true 
18 === "18"   // false 



*/

const age = 18;
 if (age === 18) {
    console.log("You are now adult"); // You are now adult 
 } else{
    console.log("you are not adult");
    
 }
//

const age1 = "18";
 if (age1 === 18) {
    console.log("You are now adult"); 
 } else{
    console.log("you are not adult");//you are not adult
    
 }
 // 

 console.log(18===18);// true 

 console.log("18"===18);// false

//


 //

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
/*Boolean Logic.= These operators work with true / false values and are everywhere in JavaScript.


1> AND (&&)= True only if BOTH sides are true

true && true    // true
true && false   // false
false && true   // false
false && false  // false

2> OR (||)= True if AT LEAST ONE side is true

true || false   // true
false || false  // false


3>.NOT (!) = reverse condition

Flips the boolean value

!true   // false
!false  // true

*/

// && 
const username = "admin";
const password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful"); // Login successful
} else {
  console.log("Invalid credentials");
}

const Age = 18;
const Lisencse = true;

if (Age == 18 && !Lisencse) {

   console.log('you can drive');  
   console.log('can not drive');// // can  not drive
} else {
   
}

// || (or)

 const Age1 = 18;
 const  hasPass = true;

 if (Age1 ==18 || hasPass) {
   console.log("Entry allowed in pub");// Entry allowed in pub
 } else{
   console.log("not allowed in pub");
   
 }
 // 

 // ! (Not)

 const age2 = 16;

if (!(age2 >= 18)) {  // age >= 18 → false
  console.log("Minor hai");
} 

//

const hsLisensce = true;
const hadGoodVision = true;
const isTired = true;

 if (hsLisensce && hadGoodVision  && !isTired ) {
   console.log('Sarah can drive');
  
 } else{
   console.log("Sarah not able to drive");// Sarah not able to drive
   
 }

