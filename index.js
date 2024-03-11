const express = require("express");
const app = express();
const port = 8080;
const path=require("path");

app.use(express.urlencoded({ extended: true}));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = 
[
    {
        username : "pankaj",
        content: "I love coding"
    },
    
    {
        username : "raghuraj",
        content: "I love my life"
    },
    
    {
        username : "kuchu",
        content: "I love food"
    }
]


app.get("/posts", (req,res)=>{
    res.render("index.ejs",{posts});
});

app.listen(port, () => {
    console.log("listening to port :8080");
});