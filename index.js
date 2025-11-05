const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("That's All Folks!");
  console.log("clicked");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
