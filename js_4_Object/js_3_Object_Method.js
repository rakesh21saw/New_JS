/*
 js object methods




*/

const john ={      
    name: "John",
    job: "tester",
    birthyear:   1995,
    city: "delhi",
    friends: ["alice", "bob", "charlie"],
    hasDriverLicense: true,

    calcAge : function(birthyear){
        return 2037 -birthyear;
    }
};
 
console.log(john.calcAge(john.birthyear));//42
console.log(john.calcAge(1995));// 42

console.log(john['calcAge'](1995)); // by bracket notation






