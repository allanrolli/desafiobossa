require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env",
});
const express = require("express");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV !== "production";
    this.middleware();
    this.routes();
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(console.log("Successfully connected"))
      .catch((error) => console.log(error));
  }

  middleware() {
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(express.json());
  }
  routes() {
    this.express.use(require("./router"));
  }
}

module.exports = new App().express;
