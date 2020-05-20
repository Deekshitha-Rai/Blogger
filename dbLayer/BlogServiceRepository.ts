

export class BlogServiceRepository {

    public fetchBlogs(db, req, next) {
        db.db("blogRecord").collection("blogs").find({}).toArray(function (err, result) {
            if(err) {
                next(err, null);
            } else {
                next(null, result);
            }
        })
    }

    public saveBlogs(db, blogData, next) {
        blogData.createdOn = new Date();
        db.db("blogRecord").collection("blogs").insertOne(blogData, function (err, result) {
            if(err) {
                next(err, null);
            } else {
                next(null, result);
            }
        })
    }

    public async fetchBlogById(db, blogId) {
        let query = {
            "blogId" : blogId
        }
        db.db("blogRecord").collection("blogs").find(query).toArray((err, result) => {
            if(err) return err;
            return result;
        })
    }
    public async updateBlog(db, blogData, next) {
        let query = { "blogID" : blogData.blogID};
        let updateValue = {
            $set: {
                "blogData": blogData.blogData,
                "lastModified": new Date()
            }};
        db.db("blogRecord").collection("blogs").updateOne({"blogID" : blogData.blogID}, updateValue, function (err, result) {
            if(err) {
                next(err, null);
            } else {
                next(null, result);
            }
        })
    }
}