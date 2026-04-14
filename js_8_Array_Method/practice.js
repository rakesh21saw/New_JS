// let str = "hello"

// let revs = "";

// for(let i = str.length-1;i>=0;i--){
//  revs= revs+str[i]
// }
// console.log(revs);

// let word = "maihudon"

// let reverse = "";
// for(let i = word.length-1;i>=0;i--){
//    reverse+=word[i]
// }
// console.log(reverse);
// //

// let ulta = function(str1){
//   let rev1="";
//   for(let i = str1.length-1;i>=0;i--){
//     rev1+= str1[i];
//   }
//   return rev1;
// }
// let stri= "dekhte hai kaise nhi hota"
// console.log(ulta(stri));


//  function revosero(str2){
//   let rev2="";
//   for(let i = str2.length-1;i>=0;i--){
//     rev2+= str2[i]
//   }
//   return rev2;
//  }

//  let str2="dekhlunga"
// console.log(revosero(str2));

//////////////////////////////////////////////


let pln = "madam";
let result = "";
for(let i=pln.length-1;i>=0;i--){
 result+=pln[i]
}
if (result===pln) {
  console.log(true); 
}


function checkPln(str3){
  let result1= "".trim()
  for(let i = str3.length-1;i>=0;i--){
    result1+= str3[i]
  }
return result1 === str3;
}
 let str3 = "nursesrun"
 console.log(checkPln(str3));
 
