/*  SET TIMEOUT - it is window object

setTimeout (function, timeout) - ye sirf two arguments hi leta hai.

*/
 
console.log("Hi Ankit");

setTimeout( () => {
    console.log(" ek no ka chutiya inssan hai");  
}, 4000);

//

console.log("Helloooo");

setTimeout(() => {
    console.log(" mai hu don");  
}, 7000);

console.log("don ko police maarega");


/*  SET INTERVAL - YE timeout time tak rukega and baar baar us function ko yani multiple times execute karega.

setInterval (function, timeout) - ye bhi sirf two argument lega

*/

setInterval(() => {
   // console.log("india");  // It will repeat multiple times
}, 2000);

// how to stop setInterval- to stop this we will use id keyword.

let id = setInterval(() => {
    console.log("India will win");    
}, 2000);
console.log(id);

// to stop this we will use a function
clearInterval(id)







