//Express server setup
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const publicFolder = path.join(__dirname, "public");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(publicFolder));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicFolder, "index.html"));
});
 
 
// 404: if nothing above matched, send the error page.
// This MUST stay at the bottom, below every other route.
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicFolder, "404.html"));
});
 
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 
module.exports = app;
 