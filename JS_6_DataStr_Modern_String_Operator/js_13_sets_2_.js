

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// here garlic and tomatoes are present in both

// Intersection = Common elements- Intersection means the elements that are present in both sets.

const commonFood = italianFoods.intersection(mexicanFoods);
console.log('intersection:',commonFood);// intersection: Set(2) { 'tomatoes', 'garlic' }
//// array format
console.log([...commonFood]);// [ 'tomatoes', 'garlic' ]- in arry format


// union - Union means all elements from both sets without duplicates.

const  allFoods  = italianFoods.union(mexicanFoods);

console.log(allFoods);
// // array format
console.log([...allFoods]);

// other way to do ==== not more useful
console.log(new Set([...italianFoods,...mexicanFoods]));
// aaray format
console.log([...new Set([...italianFoods,...mexicanFoods])]);


//  diffrence- Difference means elements that are in the first set but not in the second set.

const uniqueItalianFoods = italianFoods.difference(mexicanFoods)
console.log(uniqueItalianFoods);// Set(4) { 'pasta', 'gnocchi', 'olive oil', 'basil' }
// arra y format
console.log([...uniqueItalianFoods]);// [ 'pasta', 'gnocchi', 'olive oil', 'basil' ]




