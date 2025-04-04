const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const postService = require("./services/post-service");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongodbConnection = require("./configs/mongodb-connection");

let collection;
app.listen(3000, async () => {
    console.log("Server started");

    const mongoClient = await mongodbConnection();

    collection = mongoClient.db().collection("post");
    console.log("MongoDB connected");
})

app.engine("handlebars", 
    handlebars.create({
        helpers: require("./configs/handlebars-helpers"),
    }).engine,
);
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("home", { title: "테스트 게시판"});
});

app.get("/write", (req, res) => {
    res.render("write", { title: "테스트 게시판"});
});

app.post("/write", async(req, res) => {
    const post = req.body;
    const result = await postService.writePost(collection, post);
    res.redirect(`/detail/${result.insertedId}`);
});

app.get("/detail/:id", async (req, res) => {
    res.render("detail", {
        title: "테스트 게시판",
    });
});

app.listen(3001);