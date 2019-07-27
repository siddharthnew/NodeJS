import * as express from "express";

class ExpressApp{
    app:express.Application;
    public constructor() {
        this.app = express();
        this.app.listen(3000,'localhost', ()=>{
            console.log("Server Started")

        })
        }
    }

    let myApp=new ExpressApp();
    //myApp.app.use('/',(req,res)=>{
    //    res.send("Hello world");
   // });
    myApp.app.get('/task',(req,res)=>{
        res.send("Server runs");
        console.log(req.params);
        console.log("Req Query",req.query)
      //  console.log("Req Body",req.body)
    });

    //get all to do
    myApp.app.get('/getAllToDo',(req,res)=>{
        res.send("Server runs");
        console.log(req.params);
        console.log("Req Query",req.query)
      //  console.log("Req Body",req.body)
    });

    //get to do by Id
    myApp.app.get('/getToDoById/:todoId',(req,res)=>{
        res.json({
            todoId: req.params.todoId,
            msg:"TEST JSPN RESPONSE"
        });
      //  res.send("Server runs");
       
        console.log("---------");
        console.log(req.method);
        console.log(req.params);
        console.log("Req Query",req.query)
      //  console.log("Req Body",req.body)
    });