
// Function expression 

const calAge = function(birthYear){
    return 2037 - birthYear;
 }

 const age = calAge(1992)
 console.log(age);

 // Arrow function 

 const calAge1 = birthYear => 2047 - birthYear;//Yahan:{} nahi,return nahi-JS automatically return kar deta hai
 
  const age1 = calAge1(1998)
  console.log(age1);// 49


  // arrow function with multiple argument

  const yearUntilRetirment = (birthhYear,firstName) =>{

    const age2 = 2037 - birthhYear;
    const retirment = 70 - age2;

    return `${firstName} retires in ${retirment} years`; // isme return use hoga bz we have aegument here

  }
  
  console.log(yearUntilRetirment(1991, 'Einstein'));
  console.log(yearUntilRetirment(1995, 'PanduRanga'));
  
/* NOTE-  What type of function should i use? should i use arrow fumnction always?

   Ans-  Use function expression most
         No,bz arrow function is also complicated and do not get this keyword.

*/