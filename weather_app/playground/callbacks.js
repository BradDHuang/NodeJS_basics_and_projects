
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Ben"
    };
    // callback(user);
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(24, (userObj) => {
    console.log(userObj);
});
// $ node playground/callbacks.js 
// { id: 24, name: 'Ben' }




