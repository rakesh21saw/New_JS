
// lowerCase and uperCase
const airline = "Air India";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// q- fix captialization in name

const passanger = 'jonas'; // Print Jonas
const passengerLower = passanger.toLowerCase();
const  passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);// jonas

// comparing emails

const email = 'hello@jonas.com'
const loginEmail = '  Hello@jonas.com \n'

const lowerEmail = loginEmail.toLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);// hello@jonas.com
console.log(email===trimEmail);// true

// in one line
const normalisedEmail = loginEmail.toLowerCase().trim()
console.log(normalisedEmail);// hello@jonas.com
console.log(email===normalisedEmail);// true


// replace()

const priceIndia = '999.99rs';
const priceUs = priceIndia.replace('rs','$')
console.log(priceUs);// 999.99$
// 
const announcement = 'All passenger are requested to come at bording door 21';
console.log(announcement.replace('door', 'gate'));// All passenger are requested to come at bording gate 21

// Method with return boolean.


// includes();
const plane = 'Airbus Air324neo';
console.log(plane.includes(324));//true
console.log(plane.includes('indigo'));//false
//
console.log(plane.includes('Air'));// true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {

    console.log('part of nre airbus family');// part of nre airbus family
       
}

// q- 

 const checkBaggage = function(items) {
 const baggage = items.toLowerCase();
  
 if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log("Not allowed")  
 }  else {

    console.log('welcome!, you are allowed');
    
 }
 }
checkBaggage('I have a laptop , some food and a pocket knife');//checkBaggage
checkBaggage('socks anf cemra');// welcome!, you are allowed
checkBaggage(' fet some snacks anf a gun for me')// checkBaggage


   



