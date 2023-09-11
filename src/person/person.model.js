const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  gender: String,
  occupation: String,
  employmentStatus: String,
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
