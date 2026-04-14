const friend1 = 'Sikash';
const friend2 = "Sanket";
const friend3 = "Ankit";
const friend4 = "BABA";
const friend5 = 'Guutu';

const frnds = ['Sikash','Sanket','Ankit','BABA','Guutu']
console.log(frnds[0]);//Sikash
console.log(frnds[1]);//Sanket
console.log(frnds[2])//Ankit
console.log(frnds[3])//BABA
console.log(frnds[4])//Guutu

// actual no of elements in the array.

console.log(frnds.length);//5

//** how to get  last element in aaray
console.log(frnds[frnds.length-1]);// Guutu

// let change the array

frnds[4] = 'rahul'; // not gd way to  add array 
console.log(frnds);// [ 'Sikash', 'Sanket', 'Ankit', 'BABA', 'rahul' ]

// another way to write array
const years = new Array(1991,1007,6679);// array function


// 
const firstName = 'RajaBabu'
const raja = [firstName,'PM', 2026-1950,frnds]

console.log(raja.length);
////////////////////////////////////////////////////////

//
const calAge =function(birthYear){
    return 2037-birthYear;
}

const year1 = [2000,1995,1997,1998,1999];

calAge(year1);
console.log(calAge(year1));// Nan, bz we cant subtract with whole array

const age = calAge(year1[1])
console.log(age);// 42
const age1 = calAge(year1[year1.length-1]);
console.log(age1);// 38
//
console.log(age,age1);//42 38

// 

const ages = [calAge(year1[0]),calAge(year1[1]),calAge(year1[2]),calAge(year1[year1.length-1])];
console.log(ages);//[ 37, 42, 40, 38 ]








