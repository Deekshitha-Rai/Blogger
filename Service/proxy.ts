import {MongoClient} from "../dbLayer/Connection/mongoClient";
import {BlogService} from "./BlogService";
let blogService = new BlogService();
var mongoClient = new MongoClient();


export class Proxy {

    public getBlogs (req, res) {
        mongoClient.getConnection((err, db) => {
            if(err) {
                res.send(err);
            } else {
                blogService.getBlogs(db, req, function (err, result) {
                    if(err) res.send(err);
                    else res.send(result);
                })
            }
        })
    }

    public postBlogs(req, res) {
        mongoClient.getConnection((err, db) => {
            if(err) {
                res.send(err);
            } else {
                blogService.postBlogs(db, req.body, function (err, result) {
                    if(err) res.send(err)
                    else res.send(result);
                })
            }
        })
    }

    public updateBlogs(req, res) {
        mongoClient.getConnection((err, db) => {
            if(err) {
                res.send(err);
            } else {
                blogService.updateBlogs(db, req.body, function (err, result) {
                    if(err) res.send(err)
                    else res.send(result);
                })
            }
        })
    }
}