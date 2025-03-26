const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://<아이디>:<패스워드>@<010825>/board";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
};