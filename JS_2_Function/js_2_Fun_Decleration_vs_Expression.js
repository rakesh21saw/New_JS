/*
In js there are difrrent way to write function, and each type of fonction work in diffrent way
*/


// Function Decleration(function bnanaa)
function calAge1(birthYear) { // this line called Function Declaration
    const age = 2037-birthYear;
    return age;
    // or
    //return 2037-bithYear;   
}

 const age = calAge1(1995);
 console.log(age);
 

 // FUNCTION EXPRESSION= Jab function ko ek variable ke andar store kar dete hain 

 const calAge2 = function(birthYear){
    return 2037 - birthYear;
 }

 const age2 = calAge2(1992)
 console.log(age2);
 

 //
 
 function calAge3(birthYear){ // decleration
    return 2045-birthYear;
 }
    
 const age4 = calAge3(2005)

 const calAge4 = function(birthYear){ // expressiom
    return 2035-birthYear;
 }

 const age5 = calAge4(2009)
 console.log(age4,age5);
 