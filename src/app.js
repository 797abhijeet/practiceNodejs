const express = require("express");
const app = express();

app.use("/test", (req, res) => {
  res.send("Helo from the test server");
});
app.use("/hello", (req, res) => {
  res.send("Helo from the hello server");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
