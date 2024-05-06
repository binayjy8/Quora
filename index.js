const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        username : "Khuntapingu",
        content : "Village Type"
    },
     {
        username : "BinayBhusan",
        content : "I Love Coding"
     },
     {
        username : "Baby",
        content : "i'm also love coding"
     }
];

app.get("/posts", (req, res) =>{
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.send("post request working");
});

app.listen(port, ()=> {
    console.log(`listening to the port ${port}`);
});