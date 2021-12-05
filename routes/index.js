const router = require("express").Router();
const fetch = require("node-fetch");
const { BASEURL } = require("../config/car_query_api.config");

router.get("/", (req, res) => {
  // fetch car-make json
  fetch(BASEURL + "?cmd=getMakes&year=2021")
    .then((response) => response.json())
    .then((data) => {
      // pass json data to render method
      res.render("./index.ejs", data);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
