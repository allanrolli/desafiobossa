const express = require("express");

const app = express();

const server = require("http").Server(app);

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:123@cluster0-wp6tn.mongodb.net/bossabox?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Conectado com sucesso"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./router"));

server.listen(3000);
