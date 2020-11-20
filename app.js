const express = require("express");
const app = express();

app.get("/",(req,res)=>{

    res.send("hello world");
});
app.get("/user",(req,res)=>{
    console.log("user");
    res.send("User route is running");
});
app.get("/customer",(req,res)=>{
    res.send("customer route is running");
});
app.get("/student",(req,res)=>{
    res.send("student route is proccessing...");
});
app.get("/random.text",(req,res)=>{
    res.send("shivam");
});

app.get("/ab?cd",(req,res)=>{
    res.send('This route path will match acd and abcd');
});
app.get("/ab+cd",(req,res)=>{
    res.send("This route will match abcd,abbcd,abbbcd,and so on");
});
app.get("/ab*cd",(req,res)=>{
    res.send("This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on");
});
app.get("/ab(cd)?e",(req,res)=>{
    res.send("This route path will match /abe and /abcde.");
});
app.get("/a/",(req,res)=>{
    res.send("This route path will match anything with an 'a' in it.");
});
app.get("/*fly$/",(req,res)=>{
    res.send("This route path will match butter_fly, dragon_fly, but not butterflyman, dragonflyman and so on.");
});
app.get("/users/:userId/books/:booksId",(req,res)=>{
    res.send(req.params);
});
app.get("/flights/:from-:to",(req,res)=>{
    res.send(req.params);
});

//Route handlers
app.get("/example/a",(req,res)=>{
    res.send("A single callback function can handle a route.");
});

app.get("/example/b",(req,res,next)=>{
    console.log('The response will be sent by the next function...');
    next()
},function(req,res){
    res.send('Hello from B!');
});

//An array of callback functions can handle a route.
var callback0 = (req,res,next)=>{
    console.log("CB0");
    next()
}
var callback1 = (req,res,next)=>{
    console.log("CB1");
    next()
}
var callback2 = (req,res,next)=>{
    console.log("Hello from C!");
    next()
};
app.get("/example/c",[callback0,callback1,callback2]);

//A combination of independent function and arrays of functions can handle a route.
var cb0 = (req,res,next)=>{
    console.log('CB0');
    next()
}
var cb1 = (req,res,next)=>{
    console.log('CB1');
    next()
}
app.get("/example/d",[cb0,cb1],(req,res,next)=>{
    console.log('The response will be sent by the next function...');
    next()
},
(req,res)=>{
    res.send('Hello from D!');
});
app.listen(5000,()=>console.log("Server is running on port 5000"));