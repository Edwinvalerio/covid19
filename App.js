const express = require("express");
var bodyParser = require("body-parser");
const diagnosisSym = require("./model");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Covid-19 back-end</h1><p>Copyright © 2010 by Edwin Valerio & Carlos Ramirez</p>"
  );
});

app.post("/diagnosis", (req, res) => {
  console.log(req.query);
  const results = diagnosisSym(req.query);
  res.send(results);
});

app.listen(port, () => {
  console.log(`app listening on Post: ${port}`);
});
