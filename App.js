const express = require("express");
var bodyParser = require("body-parser");
const diagnosisSym = require("./model");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  console.log("app active");
});

app.post("/diagnosis", (req, res) => {
  console.log(req.query);
  const results = diagnosisSym(req.query);
  res.send(results);
});

app.listen(port, () => {
  console.log(`app listening on Post: ${port}`);
});
