import {Proxy} from "./Service/proxy";

var bodyParser = require('body-parser');
var express = require("express");
var blogProxyObject = new Proxy();
var bodyParser = require('body-parser');



export class Router {
    router: any;
    app: any;

    public requestRouter(apiPath) {
        apiPath.use(bodyParser.urlencoded({ extended: false }))
        apiPath.use(bodyParser.json())
        apiPath.route('/')
            .get((req, res) => {
                blogProxyObject.getBlogs(req, res);
            })
            .post((req, res) => {
                blogProxyObject.postBlogs(req, res);
            })
            .put((req, res) => {
                blogProxyObject.updateBlogs(req, res);
            })
    }

}

