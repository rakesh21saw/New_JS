/*

Type conversion is manually convert from one type to another.

Type Corecion = JavaScript automatically changes the type for you.

*/

//  Type Conversion;

const inputYear = '1991'
console.log(inputYear + 18);// 199118

const inputYear1 = '2000'
console.log(Number(inputYear1),inputYear1);// 2000,"2000"
console.log(Number(inputYear1) + 20);// 2020

//
console.log(Number('Rahu'));// NaN

console.log(typeof NaN);// number

// 

console.log(String(123));// 123
console.log(typeof(String(123)));// string



//  type Coercion
 // String Coercion (+ operator) = + sabko string bna deta hai

 console.log('you are '+ 25 + 'year old boy');// you are 25year old boy

 console.log(typeof('you are '+ 25 + 'year old boy'));// string
 //
 console.log('23' - '10' + 5 );// 18
 console.log(typeof('23' - '10' + '5'));// string 
 //
 console.log('23' - '10' - 10); //3

 console.log(typeof('23' - '10' -10));//number

 //

 console.log('23' * '2');// 46
 
 console.log(typeof('23' * '2'));// number
 
 
 
 /*
Number Coercion (- * /)

-, *, / numbers की तरह behave करते हैं।

"5" - 2   // 3
"5" * 2   // 10
"10" / 2  // 5
 */

// 


let n = '1' + 1; // note yaha + operator islo string bna diya isliye 11 ho gya
 n = n-1; // - opertor number bna diya

 console.log(n);//10

 console.log('10' -'4' -'3' -2 +'5');// 15
 
 


