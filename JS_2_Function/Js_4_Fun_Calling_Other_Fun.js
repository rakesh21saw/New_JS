
 function cutFruitPieces(fruit){
    return  fruit*4
 }



function fruitJuicer(apple, orange){
    //console.log(apple, orange);//  it not return anything , it only print the message to develpoer console//////
    
   const applePieces = cutFruitPieces(apple);
   const orangePieces = cutFruitPieces(orange);

    const juice = ` juice with ${applePieces} apples and ${orangePieces} oranges.`

    return juice;
}

console.log(fruitJuicer(2,4));
