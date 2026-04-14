 /*   There are five falsy value  0, "", null, undefined, NaN.
    These five values will be converted to false when we attempt to convert in to a boolean.


 // Truthy = 
1
-1
"0"
"false"
"hello"
" "       // space wali string
[]
{} // empty object
function(){}
/////////////////////////////////////////////////////////

  When excatly  use this in logical operatot and on conition.


 */


console.log(Boolean(0));// false

console.log(Boolean(undefined));// false

console.log(Boolean("rocky"));// true

console.log(Boolean({}));// true

console.log(Boolean('')); // false


const money = 0;

if (money) { // here money is zero we know zero is false value
    console.log("dont spend it all");// will not run 
    
} else {
   console.log("get a job");// get a job
   
}
//
const money1 = 100;

if (money1) {
    console.log("dont spend it all");// dont spend it all
    
} else {
   console.log("get a job");
   
}

//

 let height;


 if (height) {
   console.log('ya! Height is defined');  
 } else{
    console.log('ya! Height is not defined');// ya! Height is not defined
    
 }
//
let height1 = 10;

 if (height1) {
   console.log('ya! Height is defined');  // ya! Height is defined
 } else{
    console.log('ya! Height is not defined');
    
 }
