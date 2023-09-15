// step-1 =>  require nongoose , express , and also define the routes
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const todosRoute = require("./routes/todos");
const usersRoute = require("./routes/users");

// step-2 =>  define your middle ware and then connect to the router

app.use(express.json());
app.use("/todos", todosRoute);
app.use("/users", usersRoute);

// step-3 =>  connect to mongo and also creat server

mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => {
    console.log("success connect to database");
  })
  .catch((err) => {
    console.log(err);
  });
// start the server to listen to port 4000
app.listen(4000, () => {
  console.log("listining to port 4000");
});
