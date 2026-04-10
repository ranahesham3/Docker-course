const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello!!");
});

const PORT = 4000;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
