

const  student =[
   'john',
   'tester',
   1995-2005,
   'delhi',
    ['alice','bob','charlie'],
    true
]

for(let  i = 0; i<student.length; i++){ // it will run from position 0 to last position
    console.log(student[i]);   
    console.log(student[i]);
}

for(let  x = 0; x<=3; x++){ // it will run positin 0 to 3 only
    console.log(student[x]);    
}

/* with empty array - it will run from position 0 to last position bz length is used and  length is
  dynamic it will change according to the element added or removed from the array

  ** when to use this approach?
  1. when we dont know the number of elements in the array
  2. when the number of elements in the array is dynamic and can change over time.
  3. when we want to perform operations on all elements of the array without hardcoding the length.

 in real  world  array are not created with fixed number of elements and types of variables

  e.g.- list of users in a web application, list of products in an e-commerce site etc.

*/

const types =[]; // empty array bz we dont know the number of elements and types of variables

for(let i=0;i<student.length;i++){
    //reading from student array
    console.log(student[i], typeof student[i]);

    types[i]= typeof student[i]; // storing types of variables in types array

}
 console.log(types); // [ 'string', 'string', 'number', 'string', 'object', 'boolean' ]

// another way to do the same thing is by using push() method

const types1 =[]; // empty array bz we dont know the number of elements and types of variables

for(let i=0;i<student.length;i++){
    //reading from student array
    console.log(student[i], typeof student[i]);
 
    types1.push(typeof student[i]); // storing types of variables in types1 array using push method
}
console.log(types1);


//

 const years = [1990, 1967, 2002, 2010, 2018];
    const ages =[];
    for(let i=0;i<years.length;i++){
        ages.push(2024 - years[i]); // calculating age and storing in ages array
    }
    console.log(ages); // [ 34, 57, 22, 14, 6 ]


    // continue and break statement

    // continue statement - it is used to skip the current iteration of the loop and continue with the next iteration
     
    console.log('--- only strings ---');// just to separate the output for strings 
    
    for(let i=0;i<student.length;i++){
        if(typeof student[i] !== 'string'){ // just checking if the element is not a string
            continue; // skip the current iteration if the element is not a string
        }
        console.log(student[i], typeof student[i]);// only string will be printed
    }

    // break statement - it is used to terminate the loop completely

    console.log('--- break with number ---');// just to separate the output for number 
    
    for(let i=0;i<student.length;i++){
        if(typeof student[i] === 'number'){ // just checking if the element is a number
            break; // terminate the loop if the element is a number
        }
        console.log(student[i],typeof student[i]);
    }