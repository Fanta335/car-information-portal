const PORT = process.env.PORT;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Express settings
app.set("view engine", "ejs");

// フォームからPOSTデータを受け取るためにミドルウエアをセット
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Static resource routing
app.use("/public", express.static(path.join(__dirname, "/public")));

// Dynamic resource routing
app.use("/form", require("./routes/form"));
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});
