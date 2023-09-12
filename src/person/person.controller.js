const Person = require("./person.model");

exports.createPerson = async (req, res) => {
  const person = new Person(req.body);

  const newPerson = await person.save();

  res.status(201).json({
    status: true,
    message: "Person created successfully",
    savedPerson: newPerson,
  });
};
