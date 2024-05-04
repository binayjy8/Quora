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
        username : "Binay",
        content : "I Love Coding"
     }
];

app.get("/posts", (req, res) =>{
    res.render("index.ejs", { posts });
});

app.listen(port, ()=> {
    console.log(`listening to the port ${port}`);
});