/*

This keyword - special variable that is created for every execution context (every function).
               Take the value of (points to) the "owner" of the function which  the this keyword is used.

this is not ststic . it depands on how the function is called , and its value is only assigned when the 
function  is actually called.

n0te- 

method ---- this =<object that is calling the method>

simple function  call ---- this = undefind

Arrow function --- this = < this of sorrounding function (lexical this)

arrow function do not get there own this keyword.






*/

// const jonas ={

//     name:"john",
//     year: 1999,

//     calAge:function(){

//         return 2037- this.year;
//     }

// };

// jonas.calAge()


console.log(this);//{} - this in global function is simply a window object

// In normal function

const CalAge = function(birthyear){
    console.log(2037-birthyear);
    console.log(this); 
}

CalAge(1991)

// in arrow function

const CalAgeArrow = birthyear1 =>{
    console.log(2037-birthyear1);
    console.log(this); 
}

CalAge(1995)

// this in  calling method 

const jonas ={

    name:"john",
   year: 1999,

    calAge:function(){

        return 2037- this.year;
   }

};
 jonas.calAge();