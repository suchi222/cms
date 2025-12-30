const express = require("express");
const app = express();

const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

//  node js lai form bata aako data parse gar vaneko
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// database connection function
connectDatabase();

// get api -> /

app.get("/", (req, res) => {
  res.json({
    message: "success",
  });
});
// get api => blogs(all blogs)
app.get("/blogs", async (req, res) => {
  //fetching/reading all blohs from blog model
  const blogs = await Blog.find(); //find returns array
  if (blogs.length == 0) {
    res.json({
      status: 404,
      message: "Empty blogs",
    });
  } else {
    res.json({
      status: 200,
      message: "BLOG fetched successfully",
      data: blogs,
    });
  }
});

// get api ->blogs/:id(single data)
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  const blog = await Blog.findById(id );
  res.json({
    status: 200,
    message: "blog fetched sucessfully",
    data: blog,
  });
});

// create blog api
app.post("/createBlog", async (req, res) => {
  const title = req.body.title;
  const subTitle = req.body.subTitle;
  const description = req.body.description;

  // insert to database logic
  await Blog.create({
    title: title,
    subTitle: subTitle,
    description: description,
  });
  res.json({
    status: 200,
    message: "Blog created sucessfully",
  });
});

app.listen(2000, () => {
  console.log("Nodejs has started at port 2000");
});
