import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(4001, () => {
  console.log("API running on port 3001");
});