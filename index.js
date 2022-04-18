const express = require("express");
const app = express;
app.request(express.json());

app.get("/books", (request,response,next)=>{
    console.log("Fetching all Books");

});
app.get("/book/:name",(request,response,next)=>{
    let b=request.params;
    response.status(200).json({
        status:"success",
        bookName:params.book,
    })
});
const PORT=9008;
app.listen(PORT,()=>{
    console.log("Sever is started");
});

