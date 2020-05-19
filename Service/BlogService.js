"use strict";
exports.__esModule = true;
var BlogServiceRepository_1 = require("../dbLayer/BlogServiceRepository");
var blogRepository = new BlogServiceRepository_1.BlogServiceRepository();
var BlogService = /** @class */ (function () {
    function BlogService() {
    }
    BlogService.prototype.getBlogs = function (db, req, next) {
        blogRepository.fetchBlogs(db, req, function (error, result) {
            if (error) {
                next(error, null);
            }
            else {
                next(null, result);
            }
        });
    };
    BlogService.prototype.postBlogs = function (db, req, next) {
        var blogRequest = this.createRequest(req);
        blogRepository.saveBlogs(db, blogRequest, function (error, result) {
            if (error) {
                next(error, null);
            }
            else {
                next(null, result);
            }
        });
    };
    BlogService.prototype.createRequest = function (req) {
        return {
            "blogData": req.blogData,
            "createdOn": new Date(req.createdOn),
            "lastModified": new Date(req.lastModified)
        };
    };
    return BlogService;
}());
exports.BlogService = BlogService;
