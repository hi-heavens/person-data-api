const express = require("express");

const app = express();

app.use(express.json());

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

module.exports = app;
