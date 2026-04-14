//** split method= split() is used to convert a string into an array based on a separator.
//split("") converts the string into an array of characters.
//"" means split every character.

const fullName = "Jonas Schmedtmann";
const parts = fullName.split(" ");
console.log(parts);// [ 'Jonas', 'Schmedtmann' ]
//

const fullName1 = "john yadav";
 const [firstName, lastName] = "john yadav".split(' ')
 console.log([firstName, lastName]);// [ 'john', 'yadav' ]
//
// join-join() is used to convert an array into a string.
 const newName= ['Mr,', firstName, lastName.toUpperCase()].join(' ');
 console.log(newName);// Mr, john YADAV
 
 
//
 console.log('a+very+nice+song'.split('+'));// [ 'a', 'very', 'nice', 'song' ]
 console.log('a+very+nice+song'.split(' '));//[ 'a+very+nice+song' ]
 //

// Padding means adding extra characters to the start or end of a string to make it a certain length.

// JavaScript provides:- padStart(),padEnd();

// Syntax- string.padStart(targetLength, padString)

const message = 'Go to gate 21'

//padStart=  Adds characters to the beginning of a string.
console.log(message.padStart(20, '+').padEnd(30,'+'));// +++++++Go to gate 21++++++++++

// q

const maskCreditCard = function(number){
    const start = number + '';
    const last  = start.slice(-4);
    return last.padStart(start.length, '*')
}


console.log(maskCreditCard(644953456654567765));// **************7800
console.log(maskCreditCard('7644953456654567765'));


// repeat method- repeat same strinh multiple times
