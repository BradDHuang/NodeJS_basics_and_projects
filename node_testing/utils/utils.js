
/*
module.exports.add = (a, b) => {
    return a + b;
};
*/
module.exports.add = (a, b) => a + b; // implicitly return.

module.exports.square = (a) => a * a;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}; 







