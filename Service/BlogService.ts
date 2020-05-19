import {BlogServiceRepository} from "../dbLayer/BlogServiceRepository";

var blogRepository = new BlogServiceRepository();

export class BlogService {

    public getBlogs(db, req, next) {
        blogRepository.fetchBlogs(db, req, function (error, result) {
            next(error, result);
        })
    }

    public postBlogs(db, req, next) {
        let blogRequest = BlogService.createRequest(req);
        blogRepository.saveBlogs(db, blogRequest, function (error, result) {
            next(error, result);
        })
    }

    public updateBlogs(db, req, next) {
        let blogRequest = BlogService.createRequest(req);
        blogRepository.updateBlog(db, blogRequest, function (error, result) {
            next(error, result);
        })
    }

    private static createRequest(req) {
        return {
            
            "blogData": req.blogData,
            "createdOn": new Date(req.createdOn),
            "lastModified": new Date(req.lastModified),
            "likes" : req.likes ? req.likes : 0,
        }
    }
}