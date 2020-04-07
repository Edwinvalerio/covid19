const express = require("express");
var bodyParser = require("body-parser");
const diagnosisSym = require("./model");
const app = express();
require("dotenv").config();

const apiKey = process.env.APIKEY;

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
    `<div>
    <h1>Covid-19 back-end</h1><p>Copyright © 2010 by Edwin Valerio </p>
    <p>You need an API key to use this service. Please contact me for a free API key at <a href="xvestudiox@gmail.com"> Edwin Valerio</a></p>
    </div>`
  );
});

app.post("/diagnosis/:apikey", async (req, res) => {
  const userKey = req.params.apikey;
  if (userKey == apiKey) {
    const results = await diagnosisSym(req.body);
    res.send(await results);
  } else {
    res.json({
      code: 404,
      message: "invalid API Key",
    });
  }
});

app.listen(port, () => {
  console.log(`app listening on Post: ${port}`);
});
