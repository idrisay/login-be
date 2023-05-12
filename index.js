const express = require("express");
const app = express();
const mongoose = require("./db");
const configs = require("./configs");
const { setCorsOptions } = require("./utils");
const router = require("./routes");

mongoose.connection.once("open", function () {});

app.use(setCorsOptions());
app.use(express.json());

const port = configs.backendPort;

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.use("/", router);
app.listen(port, () => {
  console.log(`Listening http://localhost:${port}/`);
});
