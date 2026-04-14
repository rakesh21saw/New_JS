/*
<> let = use let keyword to create tha variable that can change later or during execution of programm

<> const = use const keyword to create tha variable that  not suppose to change later or during execution of programm.

Q> which to prefer let or const?

Ans- To  as best practice  to write clean code to use const, let use only when value need to be change at some 
     point of  future.

<>  var = var is old way to define the variable

*/

// let
let age = 30;
 age = 31;     // reassigen, we muted here 30
 console.log(age);// 31

 // const
 const birthYear = 1999;
 //birthYear = 2000; // // will not run bz  const can not be muted or bithyear never be change.
 console.log(birthYear);// 1999
 
 // var
  var job = "PM";
  job = "cm";
  console.log(job);
  