const mongoose = require("mongoose");
const Person = require("./person.model");
const catchAsync = require("../services/catchAsync");

exports.createPerson = catchAsync(async (req, res) => {
  const person = new Person(req.body);

  const newPerson = await person.save();

  res.status(201).json({
    status: true,
    savedPerson: newPerson,
  });
});

exports.getPerson = catchAsync(async (req, res) => {
  let identifier = req.params.id;
  let query;
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    query = Person.findById(paraidentifierm);
  } else {
    const name = identifier.replace(/\s+/g, " ").trim();
    query = Person.findOne({ name });
  }

  query = query.select("-__v -_id");
  const person = await query;

  res.status(200).json({
    status: true,
    person,
  });
});

exports.updatePerson = catchAsync(async (req, res) => {
  let param = req.params.id;
  let query;
  if (mongoose.Types.ObjectId.isValid(param)) {
    query = Person.findByIdAndUpdate(param, req.body, {
      new: true,
    });
  } else {
    const name = param.replace(/\s+/g, " ").trim();
    query = Person.findOneAndUpdate({ name }, req.body, { new: true });
  }

  query = query.select("-__v -_id");
  const updatedPerson = await query;

  return res.status(200).json({
    status: true,
    updatedPerson,
  });
});

exports.deletePerson = catchAsync(async (req, res) => {
  const param = req.params.id;
  const isId = mongoose.Types.ObjectId.isValid(param);
  const query = isId
    ? Person.findByIdAndDelete(param)
    : Person.findOneAndDelete({ name: param.replace(/\s+/g, " ").trim() });

  await query;

  res.status(204).json();
});
