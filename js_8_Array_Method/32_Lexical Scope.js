//Lexical scope- A variable defined outside a function can be accessible inside another function defined after the variavle decleration.

// The opposoite is NOT true.

function outerfunc() {
    let x= 5;
    let y= 10;
     function innerfunc() {
        console.log(x);  
        console.log(y);
            
     }
     innerfunc();      
}

outerfunc();//5,10

// 

function outerfunc() {
    let x= 5;
    let y= 10;
     function innerfunc() {
        let a=115
        console.log(x);  
        console.log(y);
            
     }
     console.log(a);
     innerfunc();      
}
outerfunc();// throw error bz a is not defined 


//

function outerfunc() {
    let x= 5;
    let y= 10;
     function innerfunc() {
        let a=115
        console.log(x);  
        console.log(y);
        console.log(a);   
     }
     
     innerfunc();      
}
outerfunc();// 115