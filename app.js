const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Akshu Kubernetes 🚀");
});

app.listen(3000);
