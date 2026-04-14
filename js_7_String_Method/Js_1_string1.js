const airline = "Air India"
const plane = 'pn31'

console.log(plane[0]);//p
console.log(plane[1]);//n
console.log(plane[2]);// 3
//

console.log('Boeing'[0]);// B
console.log('Boeing'.length);//6

console.log(airline.length);//9
//

console.log(airline.indexOf('i'));//1

console.log(airline.indexOf('India'));

console.log(airline.lastIndexOf('e'));

/* 1. slice method - Return a part of the orignal string as a new string

slice(start, end): Extracts a part of the string and returns it as a new string.
note:   A. ending value is non inclusive.
        B. We can add negative value in that.
*/

console.log(airline.slice(0)); // Output: Air India
console.log(airline.slice(2,4));//r -Here end value is not included
console.log(airline.slice(2,5))// r I

// till first word
console.log(airline.slice(0,airline.indexOf(' ')));// Air- 

// for last word 
console.log(airline.slice(airline.lastIndexOf(' ')));// India

// to remove extra space 
console.log(airline.slice(airline.lastIndexOf(' ')+1));//India

// start extracting from last
console.log(airline.slice(-2));// ia

// 
console.log(airline.slice(1, -1));

// Q- write a function that recive a airplane seat and verify weather it is middle sit or not

//  note- B and E are midle sit in plane
const checkMiddleSeat = function(seat){

    const s = seat.slice(-1);
    if (s=== 'B'|| s=== 'E') {
        console.log('I got the middle sit');   //I got the middle sit
    } else{

        console.log('better luck next time');
        
    }

}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E')


console.log(airline.slice(-1))// a











