"use strict";
exports.__esModule = true;
var BlogServiceRepository = /** @class */ (function () {
    function BlogServiceRepository() {
    }
    BlogServiceRepository.prototype.fetchBlogs = function (db, req, next) {
        db.db("blogRecord").collection("blogs").find({}).toArray(function (err, result) {
            if (err) {
                next(err, null);
            }
            else {
                next(null, result);
            }
        });
    };
    BlogServiceRepository.prototype.saveBlogs = function (db, blogData, next) {
        db.db("blogRecord").collection("blogs").insertOne(blogData, function (err, result) {
            if (err) {
                next(err, null);
            }
            else {
                next(null, result);
            }
        });
    };
    return BlogServiceRepository;
}());
exports.BlogServiceRepository = BlogServiceRepository;
