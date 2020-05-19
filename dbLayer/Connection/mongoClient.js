"use strict";
exports.__esModule = true;
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/blogRecord";
var MongoClient = /** @class */ (function () {
    function MongoClient() {
    }
    MongoClient.prototype.getConnection = function (response) {
        mongoClient.connect(url, function (err, db) {
            response(err, db);
        });
    };
    return MongoClient;
}());
exports.MongoClient = MongoClient;
