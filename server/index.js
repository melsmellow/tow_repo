const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// config

const port = 5000;
const app = express();
// routes here

const towDateRoutes = require("./routes/towdata");
// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`server is running at port ${port}`));

// mongodb connection
mongoose.connect(
  "mongodb+srv://admin:admin131@zuittbootcamp.kkyuv.mongodb.net/towData?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/", towDateRoutes);
let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => console.log("connected to the database"));
