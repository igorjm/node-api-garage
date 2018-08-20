const express = require("express");
const expressPaginate = require("express-paginate");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const knex = require("../config/database/db");

app.use("/static", express.static("static"));
app.use(expressPaginate.middleware(10, 100));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("Server Online");
});

/* Router configuration */
const REST_API_ROOT = "/api";
app.use(REST_API_ROOT, require("./routes/router"));

app.listen(9000);
