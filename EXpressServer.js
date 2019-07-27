"use strict";
exports.__esModule = true;
var express = require("express");
var ExpressApp = /** @class */ (function () {
    function ExpressApp() {
        this.app = express();
        this.app.listen(3000, 'localhost', function () {
            console.log("Server Started");
        });
    }
    return ExpressApp;
}());
var myApp = new ExpressApp();
//myApp.app.use('/',(req,res)=>{
//    res.send("Hello world");
// });
myApp.app.get('/task', function (req, res) {
    res.send("Server runs");
    console.log(req.params);
    console.log("Req Query", req.query);
    //  console.log("Req Body",req.body)
});
//get all to do
myApp.app.get('/getAllToDo', function (req, res) {
    res.send("Server runs");
    console.log(req.params);
    console.log("Req Query", req.query);
    //  console.log("Req Body",req.body)
});
//get to do by Id
myApp.app.get('/getToDoById/:todoId', function (req, res) {
    res.json({
        todoId: req.params.todoId,
        msg: "TEST JSPN RESPONSE"
    });
    //  res.send("Server runs");
    console.log("---------");
    console.log(req.method);
    console.log(req.params);
    console.log("Req Query", req.query);
    //  console.log("Req Body",req.body)
});
