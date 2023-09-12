const express = require("express");
const personController = require("./person.controller");

const router = express.Router();

router.post("/", personController.createPerson);
// router.get("/", personController.getAllPersons);
router.get("/:id", personController.getPerson);

module.exports = router;
