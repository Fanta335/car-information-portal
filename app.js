const PORT = process.env.PORT;
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`);
});