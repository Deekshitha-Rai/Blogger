"use strict";
exports.__esModule = true;
var mongoClient_1 = require("../dbLayer/Connection/mongoClient");
var BlogService_1 = require("./BlogService");
var blogService = new BlogService_1.BlogService();
var mongoClient = new mongoClient_1.MongoClient();
var Proxy = /** @class */ (function () {
    function Proxy() {
    }
    Proxy.prototype.getBlogs = function (req, res) {
        mongoClient.getConnection(function (err, db) {
            if (err) {
                res.send(err);
            }
            else {
                blogService.getBlogs(db, req, function (err, result) {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send(result);
                    }
                });
            }
        });
    };
    Proxy.prototype.postBlogs = function (req, res) {
        mongoClient.getConnection(function (err, db) {
            if (err) {
                res.send(err);
            }
            else {
                blogService.postBlogs(db, req.body, function (err, result) {
                    if (err)
                        res.send(err);
                    else
                        res.send(result);
                });
            }
        });
    };
    return Proxy;
}());
exports.Proxy = Proxy;
