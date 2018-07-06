
const utils = require("./utils.js");

it("Add 2 numbers.", () => {
    var sum = utils.add(3, 2);
    // throw new Error("Wrong answer!");
    if (sum !== 5) {
        throw new Error(`Wrong answer: expected 5 but got ${sum}.`);
    }
});

it("Square of a num.", () => {
    var res = utils.square(9);
    if (res !== 81) {
        throw new Error(`Wrong answer: expected 81 but got ${res}.`);
    }
});










