require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env",
});

const express = require("express");

const app = express();

const server = require("http").Server(app);

const mongoose = require("mongoose");

mongoose
  .connect(`${MONGO_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Successfully connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./router"));

server.listen(process.env.PORT || 3000);
