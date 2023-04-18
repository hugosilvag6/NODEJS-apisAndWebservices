const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const indexRoute = require("./routers/index");
const indexRoute2 = require("./routers/index2");
const todoRoute = require("./routers/todo");

app.use("/", indexRoute);
app.use("/v2", indexRoute2);
app.use("/todos", todoRoute);


module.exports = app;