/*
var square = (x) => {
    var res = x * x;
    return res;
};
*/
// var square = (x) => x * x;
var square = x => x * x; // () can be omitted when there is only 1 arg.
console.log(square(5));


var user = {
    name: "Brad",
    sayHi: () => {
        console.log(`Hi ${user.name}.`); 
        console.log(`Hi ${this.name}.`); // undefined. this.name won't work here.
        // console.log(arguments); // global arguments.
    },
    
    // do NOT use Arrow Func. when you need to use "this" and/or "arguments" keyword(s).
    sayHiWithThis() {
        console.log(`Hi ${this.name}.`);
        console.log(arguments);
    }
};
// user.sayHi();
// user.sayHiWithThis();
user.sayHiWithThis(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
// user.sayHi(1, 2, 3);







