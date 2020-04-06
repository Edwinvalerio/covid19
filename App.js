const express = require("express");
var bodyParser = require("body-parser");
const diagnosisSym = require("./model");
const app = express();
require("dotenv").config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Covid-19 back-end</h1><p>Copyright © 2010 by Edwin Valerio & Carlos Ramirez</p>"
  );
});

app.post("/diagnosis", async (req, res) => {
  console.log(req.body);
  const results = await diagnosisSym(req.body);
  res.send(await results);
});

app.listen(port, () => {
  console.log(`app listening on Post: ${port}`);
});
