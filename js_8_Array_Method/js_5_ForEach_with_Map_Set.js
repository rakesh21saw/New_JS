// A Map stores key-value pairs.

const currencies =  new Map([

    ['rs', 'India'],
    ['usd', 'Usa'],
    ['EUR', 'England']

])

// 
 currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
  
 })

 //Set- A Set stores unique values.

 const currenciesUnique =  new Set(['rs','usd','rs','Eur','usd'])

 console.log(currenciesUnique);

 currenciesUnique.forEach(function(value,key,map){
     //console.log(`${key}: ${value}`);
     // here  we will get key and value data is same.well set does not have key and indexes either

    console.log(`${value}: ${value}`)
     

 })
 
