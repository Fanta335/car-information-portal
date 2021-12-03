const PORT = process.env.PORT;
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

// Dynamic resource routing
app.use("/form", require("./routes/form"));
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});
