const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("./middleware/cors");

const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const contactRouter = require("./routes/contact");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors.handle);

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/contact", contactRouter);

module.exports = app;
