
const utils = require("./utils.js");
const expect = require("expect");

it("Add 2 numbers.", () => {
    var sum = utils.add(3, 2);
    
    // expect(sum).toBe(5);
// expect(object).toBe(value, [message])
// Asserts that object is strictly equal to value using ===.
    // expect(sum).toBeA('number');
// expect(object).toBeA(string, [message])
// expect(object).toBeAn(string, [message])
// Asserts the typeof the given object is string.
    expect(sum).toBe(5).toBeA('number');

    // throw new Error("Wrong answer!");
    /*
    if (sum !== 5) {
        throw new Error(`Wrong answer: expected 5 but got ${sum}.`);
    }
    */
});

it("Square of a num.", () => {
    var res = utils.square(9);
    
    expect(res).toBe(81).toBeA('number');
    
    /*
    if (res !== 81) {
        throw new Error(`Wrong answer: expected 81 but got ${res}.`);
    }
    */
});

it("expect with ***()", () => {
    expect(4).toNotBe(10);
    
    // .toBe() Not working with Objects.
    // expect({name: "Brad"}).toBe({name: "Brad"});
    
    // instead, we use toEqual().
    expect({name: "Brad"}).toEqual({name: "Brad"});
    // Asserts that the given object equals value using is-equal.
    expect({name: "Brad"}).toNotEqual({name: "brad"});

    expect([ 1, 2, 3 ]).toInclude(2);
    expect([ 1, 2, 3 ]).toExclude(4);
// expect(array).toInclude(value, [comparator], [message])
// expect(object).toInclude(value, [comparator], [message])
// expect(string).toInclude(value, [message])
    expect({
        name: "Brad",
        age: 24
    }).toInclude({
        age: 24
    }).toExclude({
        age: 20
    });
});

it("set fullName properly", () => {
    var user = {
        name: "Brad",
        age: 24
    };
    var res = utils.setName(user, "Brad H");
    expect(user).toEqual(res);
    expect(res).toBeAn("object").toInclude({
       firstName: "Brad",
       lastName: "H"
    });
});










