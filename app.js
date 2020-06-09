//Getting all the requirements for this page
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Importing All The Routes
const AuthRoute = require("./routes/Auth");
const HomeRoute = require("./routes/Home");
const PanelRoute = require("./routes/panel");
const ErrorRoute = require("./routes/error");

//Middlewares
dotenv.config();
app.use(express.urlencoded());
app.use(express.static("public"));

//connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//Handling Routes
app.use("/", HomeRoute);
app.use("/api/auth", AuthRoute);
app.use("/panel", PanelRoute);
app.use("*", ErrorRoute);

const port = process.env.port || 3000;
app.listen(port, () => console.log("Server is running "));
