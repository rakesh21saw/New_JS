/*
A Function is simply piece of code that we can reuse over and aver again.
A variable only hold one value but a function can hold one or more complete line of code

function name(params) {} ----- function body
    
*/

function name() {                     
    console.log('i am super hero');//
   
}
// calling/ running/ invoking the function.
  name();
   name();
    name();
    

// Function can also recieve data and return data back.

function fruitJuicer(apple, orange){
    //console.log(apple, orange);//  it not return anything , it only print the message to develpoer console//////

    const juice = ` juice with ${apple} apples and ${orange} oranges.`

    return juice;
    
}

//fruitJuicer(5,0); // 5,0

console.log(fruitJuicer(5,0));// juice with 5 apples and 0 oranges.
// or
const applejuice= fruitJuicer(5,0)
console.log(applejuice);// juice with 5 apples and 0 oranges.

//

const orangeJuice = fruitJuicer(0,6);
console.log(orangeJuice);// juice with 0 apples and 6 oranges.
