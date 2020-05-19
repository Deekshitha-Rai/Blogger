var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/blogRecord";

export class MongoClient {

    public getConnection(response) {
        mongoClient.connect(url, function(err, db) {
            response(err, db)
        });
    }
}
