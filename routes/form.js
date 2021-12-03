const router = require("express").Router();
const fetch = require("node-fetch");

const BASE_URL = "https://www.carqueryapi.com/api/0.3/";

router.post("/", async (req, res) => {
  const query = req.body;
  console.log(query.text);

  const url = BASE_URL + query.text;
  const result = await fetch(url);
  const json = await result.json();
  console.log(json);

  res.render("./form.ejs", json);
});

module.exports = router;
