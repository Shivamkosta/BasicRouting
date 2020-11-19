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
app.listen(5000,()=>console.log("Server is running on port 5000"));