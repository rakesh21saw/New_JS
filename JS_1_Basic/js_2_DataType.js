/*
In js every Value is object or a primitive value

A value is only  primitive when it is not object

// object:

let me = {
   name:'rakesh'
}

// primitive: Have 7 types

let firstName ="rakesh";
let age = 39; 



// JS has dynamic typing : we do not have to manually define the data type of the value stored in a 
   varible  instead, data type are detirmined automatically

   value has type, not variable

*/

// boolean datatype

true,
console.log(true);
console.log(typeof true);// boolean


let jsFun=  true;
console.log(jsFun);

console.log(typeof jsFun);//boolean


// number

console.log(23);
console.log(typeof 23);// number

// string

console.log("Rakesh");
console.log(typeof Rakesh);// data type undefined bz we not puuting the value in double qoute
console.log(typeof "Rakesh");// string

// use of Dynamics typing- 

let firstName= "rakesh";
console.log(firstName);// rakesh
console.log(typeof firstName);//string

// if we  want to change the value of  same variable, to do this we simply assign a new value to alrady existing variable.

firstName = "Guddu";

console.log(firstName);// Guddu
console.log(typeof firstName);// string


jsFun=  "YES";
console.log(jsFun);
console.log(typeof jsFun);// string

// Undefined

let year;
console.log(typeof year);// undefined

// dynamic typing
year = 1992;
console.log(year);
console.log(typeof year);//number

// null

console.log(typeof null);//object













