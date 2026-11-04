//Express server setup
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.use((req, res) => {
  res.status(404).send("You clicked on the wrong button.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
