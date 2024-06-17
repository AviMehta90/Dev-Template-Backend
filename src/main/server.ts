import "module-alias/register";
import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 2000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Hello Test");
});
