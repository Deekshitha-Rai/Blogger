import {Router} from "./Router" ;

const express = require("express");
const port = 4000;

export class Server {
    app : any;

    constructor() {
        this.app = express ();
    }

    public startServer(port) {
        this.app.listen(port, () => console.log("Listening to port", port));
        this.execute();
    }

    private execute() {
        let router = new Router();
        router.requestRouter(this.app);
    }
}

var server = new Server();
server.startServer(port);

