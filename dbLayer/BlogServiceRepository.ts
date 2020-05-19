

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
        db.db("blogRecord").collection("blogs").insertOne(blogData, function (err, result) {
            if(err) {
                next(err, null);
            } else {
                next(null, result);
            }
        })
    }

    public updateBlog(db, blogData, next) {
        db.db("blogRecord").collection("blogs").insertOne(blogData, function (err, result) {
            if(err) {
                next(err, null);
            } else {
                next(null, result);
            }
        })
    }
}