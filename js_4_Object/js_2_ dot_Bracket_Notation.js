

const john ={      // object which  contain 5 key value pair or properties
    name: "John",
    job: "tester",
    age: 2005-1995,
    city: "delhi",
    friends: ["alice", "bob", "charlie"]
}

// dot notation is used to access the value of the key
console.log(john.name)// John
console.log(john.age)// 10
console.log(john.friends);// [ 'alice', 'bob', 'charlie' ]

// bracket notation is uded for dynamic property access

console.log(john['name']);// john
console.log(john['friends']);//[ 'alice', 'bob', 'charlie' ]

const namekey = 'name';
console.log(john[namekey]);// john

console.log(john.namekey);// undefined

/*
 when we use  bracket notation or dot notation?
Ans- when we know the property name at the time of coding then we use dot notation
    
    when we dont know the property name at the time of coding then we use bracket notation
    or when property name is stored in a variable then we use bracket notation
    or when property name is having special character or space then we use bracket notation
    or when property name is number then we use bracket notation
    or when property name is dynamic then we use bracket notation
    or when property name is not valid identifier then we use bracket notation
    or when property name is reserved word then we use bracket notation
*/


