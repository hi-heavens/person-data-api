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

exports.getPerson = async (req, res) => {
  let query = Person.findById(req.params.id);
  query = query.select("-__v");
  const person = await query;

  res.status(200).json({
    status: true,
    person,
  });
};
