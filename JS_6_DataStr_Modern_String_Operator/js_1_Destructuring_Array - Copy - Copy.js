


// Destructuring is to break a complex data structure into a smaller data structure;

// Normal way (without destructuring)


const arr = [10, 20, 30]; // ⛔ Zyada code

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a);
console.log(b);
console.log(c);


// Destructuring way (BEST)- all the elment we can decleare at same time

const [x,y,z]= arr;
console.log(x,y,z);//10 20 30
console.log(arr);//[ 10, 20, 30 ]


//** Note - by destructing orignal array is not defected

//                               Skip values                  //

const arr1 = [10, 20, 30, 40];

const [a1, , c1] = arr1;

console.log(a1, c1); // 10 30

//

const resturant ={

     name: 'Mama Resturant',
     location:'Patia, BBSR',
     catogries:['indian', 'chinese', 'italian'],
     starterMenu:['Partha','poha','puriSabji'],
     mainMenue:['vegThali','alloPartha','satuPartha']

};

const[first,second]= resturant.catogries // skiped elment in array
console.log(first,second);// indian chinese
//
const[third]= resturant.starterMenu
console.log(third);// Partha



//                                  Swap variables or switching variable                    //

let  [main, , secondary]= resturant.mainMenue;
console.log(main,secondary);// vegThali satuPartha

// const temp = main;
// main = secondary;
// secondary = main;

[main,secondary] = [secondary,main]
console.log(main,secondary);//satuPartha vegThali

//
let x1 = 10;
let y1 = 20;

[x1, y1] = [y1, x1];

console.log(x1, y1); // 20 10


//                    🔹 Function return + destructuring                //


const resturantPatia ={

     name: 'Mama Resturant',
     location:'Patia, BBSR',
     catogries:['indian', 'chinese', 'italian'],
     starterMenu:['butterPartha','pohaJelbi','puriSabjiChola'],
     mainMenu:['vegThali','alloPartha','satuPartha'],



  order: function (starterIndex, mainIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex]
    ];
  }

};


console.log(resturantPatia.order(2,0));// [ 'puriSabjiChola', 'vegThali' ]

//Nested array destructuring


const nested = [2,4,[6,9]]

const [i, ,j]=  nested;

console.log(i, j);//2 [ 6, 9 ]



// destructuring inside destructuring
 const nested1 = [4,7,[8,5]]

 const [i1, ,[j1,k1]]= nested1
 console.log(i1,j1,k1);// 4 8 5
 

//                             Default values                //

const array = [5];

const [a2 = 1, b2 = 2] = array;

console.log(a2, b2); // 5 2