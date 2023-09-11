const express = require("express");
const personRouter = require("./person/person.route");

const app = express();

app.use(express.json());

app.use("/api", personRouter);

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
