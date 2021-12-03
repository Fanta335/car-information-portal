const router = require("express").Router();

router.post("/", (req, res) => {
  const result = req.body;
  console.log(result);
  res.render("./form.ejs", result);
});

module.exports = router;
