//

// Properties of Math
Math.PI;
console.log(Math.PI); // 3.141592653589793

Math.E;
console.log(Math.E); //  2.718281828459045


// Methods of Math.

// Math.abs() - it will give absolute value.

 let x = Math.abs(12);
console.log(x); //12

let y = Math.abs(-15);
console.log(y); // 15( it removes the neative and positive sign)

// Math.pow(a,b) 

let z = Math.pow(2,3)
console.log(z); // 8

let a = Math.pow(4,10)
console.log(a); // 1048576

// Math.floor(n) - ye number ko round off kar deta hai  nearest or smallest ki trah

let b = Math.floor(5)
console.log(b); // 5

let c = Math.floor(-5.5)
console.log(c); // -6
 

let d = Math.floor(8.999)
console.log(d); //8

// Math.ceil(n) - larger interger value pe roundof kar deta hai

let e = Math.ceil(10)
console.log(e);// 10

let f = Math.ceil(4.5)
console.log(f); // 5

let g = Math.ceil(-5.5)
console.log(g); // -5

// Math.random()- koi bhi random value dega 0 se 1 ke bitch me , one kabhi nhi dega.

// step 1
let h = Math.random()
console.log(h);

// step-2
let i = h*10;
console.log(i);

// step3 - decimal number ko hatana padega

let j = Math.floor(i)
console.log(j);
//or
console.log(Math.floor(Math.random()*10));

//* note 

let random = Math.floor(Math.random()*10)+1; // random number  btw 1 to 10




