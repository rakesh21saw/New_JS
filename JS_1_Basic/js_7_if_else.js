const age = 19;
const isOldEnough = age>=18;

if (isOldEnough) {
    console.log('Anyone can vote'); 
}

const isOldEnough1 = age<=19;

if (isOldEnough1) {
    console.log('can not vote');  
}

const age1 = 15;

if (age1>=18) {
    console.log("rakesh can vote");
} else {
    const yearLeft = 18 - age1;
   console.log(`rakesh is too young. wait another ${yearLeft} years for vote`);
   
}

/*

if (condition) {
                           // this statment is called controlled structure bz this allow to have more control 
} else {              //  we can control what block should execute and what block should not execute
    
}

*/

const birthYear = 1998;

let century;

if (birthYear <= 2000) {
     century = 20;
    
} else{
     century = 21;
}
 console.log(century);
 