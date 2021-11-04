const express = require("express");
const ejs = require("ejs");
const app = express();
const methodOverride = require("method-override");

const mongoose = require("mongoose");
const PageRoute=require("./Routes/PageRoute")
const PostRoute=require("./Routes/postRoute")


const Post = require("./models/Post");
const port = process.env.PORT || 5000;

//DB connect
mongoose.connect("mongodb+srv://cleanbg:748159263@cluster0.noxda.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
  console.log('Db connected')})
.catch((err)=>{
  console.log(err)
})
// middleware
app.use(express.static("puplic"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

//TEMPLATE ENGINE
app.set("view engine", "ejs");

// Router

app.use("/", PageRoute);
app.use("/posts", PostRoute);

// port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
