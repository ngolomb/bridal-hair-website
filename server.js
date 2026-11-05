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

const MY_EMAIL_ADDRESS = "info@hairbynechama.com";
 
app.post("/contact", (req, res) => {
  const { bookingType, name, phone, date } = req.body;
 
  if (!bookingType || !name || !phone || !date) {
    return res
      .status(400)
      .send("Please go back and choose an option, then fill in your name, phone number and date.");
  }
 
  // Turn 2027-06-14 into 14/06/2027
  const [year, month, day] = date.split("-");
  const niceDate = `${day}/${month}/${year}`;
 
  const message =
    `Hi Nechama! I'd like to book ${bookingType}.\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Date: ${niceDate}`;
 
  // Opens email with the message already typed in
  res.redirect(`mailto:info@hairbynechama.com?subject=${encodeURIComponent("New booking request")}&body=${encodeURIComponent(message)}`);
 });