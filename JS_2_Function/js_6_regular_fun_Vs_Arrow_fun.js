const jonas ={

    firstName:"john",
   year: 1999,

    calAge:function() {
        console.log(this);// Yahan this = jonas
        console.log(2037-this.year);   
   },

   greet: () =>{ 
    
    console.log(`Hey ${this.firstName}`) 

}
   

};
 
jonas.greet();//Hey undefined, bz arrow function does  not get it own this keyword.

// note - never ever used a arrow function as a method.


// without arrow function 


const jonas1 = {
  firstName: "john",
  year: 1999,

  calAge() {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet() {    // using normal function
    console.log(`Hey ${this.firstName}`);
  }
};

jonas1.greet();   // Hey john
jonas1.calAge(); // correct output