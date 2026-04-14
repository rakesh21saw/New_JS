/*
The at() method is used to get an element at a specific index — and it supports negative indexing.

✅ Returns the element
❌ Does NOT modify the original array.

Syntax
array.at(index)
index → Position of element

Supports negative values



*/

const arr = [10, 20, 30, 40];
console.log(arr[1]); // 20
console.log(arr.at(1)); //20
console.log(arr.at(3));//40

//bracket notation does NOT support negative indexing but at methos support
console.log(arr[-3]);// indefined
console.log(arr.at(-3));//20

//
// getting last  array elment 

console.log(arr[arr.length-1]);//40
console.log(arr.slice(-1));//[ 40 ]- It returns an array, not the value.
console.log(arr.slice(-1)[0]);// 40
console.log(arr.at(-1));// 40
/* Notes-

When to Use at()
Getting last element → arr.at(-1)
Cleaner and more readable code
Avoid writing arr[arr.length - 1]


🆚                              at()                        vs                                 []
Feature	                      arr[index]	                                            arr.at(index)
Negative index support	          ❌ No	                                                   ✅ Yes
Modifies array	                  ❌	                                                        ❌
Returns element	                   ✅	                                                    ✅

*/


//Works on Strings Too

const str = "hello";
console.log(str.at(-1));// "o"







