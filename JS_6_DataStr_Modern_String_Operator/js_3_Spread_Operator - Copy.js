// Spread Operator (...)
// Expands iterable values into individual elements
// Used while creating arrays or passing function arguments



// 1. Spread with Array
const arr1 = [7, 8, 9];

// Not recommended
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);


// Recommended
let arr = [1, 5, 9, 7];
let newArr = [2, 3, ...arr];

console.log(newArr); // [2, 3, 1, 5, 9, 7]



// 2. Individual values
console.log(...newArr); // 2 3 1 5 9 7



// 3. Object containing arrays
const resturantPatia = {
  name: 'Mama Resturant',
  location: 'Patia, BBSR',
  catogries: ['indian', 'chinese', 'italian'],
  starterMenu: ['butterPartha', 'pohaJelbi', 'puriSabjiChola'],
  mainMenu: ['vegThali', 'alloPartha', 'satuPartha'],
};



// 4. Create new array
const newMenu = [...resturantPatia.mainMenu, 'DaalBhatChokha'];



// 5. Copy array
const mainMenuCopy = [...resturantPatia.mainMenu];



// 6. Merge arrays
const menu = [
  ...resturantPatia.starterMenu,
  ...resturantPatia.mainMenu
];

console.log(menu);



// 7. Spread with string
const str = 'rocky';
const letter = [...str, ' ', 's'];

console.log(letter); // ['r', 'o', 'c', 'k', 'y', ' ', 's']



// 8. Spread with function
function add(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];
const result = add(...numbers);

console.log(result); // 60



// Notes:
// Works with: Array, String, Set, Map
// Not with: Plain Object (directly)
// Spread → right side (expand)
// Rest → left side (collect)