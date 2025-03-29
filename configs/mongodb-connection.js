const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://joungeun0825:dongdong810!@cluster0.dkudmf1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
};