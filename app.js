const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my Node.js app running on GitHub Actions!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});