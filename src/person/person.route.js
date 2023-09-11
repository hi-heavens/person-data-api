const express = require("express");
const personController = require("./person.controller");

const router = express.Router();

router.post("/", personController.createPerson);

module.exports = router;
