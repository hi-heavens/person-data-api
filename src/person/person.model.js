const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, provide a valid name"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "Please, provide a valid age"],
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  occupation: {
    type: String,
    required: [true, "Please, provide a valid occupation"],
  },
  employmentStatus: {
    type: String,
    enum: ["employed", "unemployed", "self-employed", "student"],
    required: true,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
