const express = require("express");
const personRouter = require("./person/person.route");
const AppError = require("./services/AppError");
const globalErrorHandler = require("./services/error.controller");

const app = express();

app.use(express.json());

app.use("/api", personRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exist! 💨`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
