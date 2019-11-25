"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var config = {
    dbName: '',
    url: 'mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/dgo?retryWrites=true&w=majority',
};
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
mongodb_1.MongoClient.connect(config.url, options, function (err, mongoConnection) {
    if (err) {
        console.log('🔥 Mongodb connected');
        return;
    }
    exports.mongoClient = mongoConnection.db(config.dbName);
});
