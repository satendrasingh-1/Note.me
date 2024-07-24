const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notes.controller");

router.post("/", notesController.createNote);

router.get("/", notesController.getNote);

router.get("/all", notesController.getAllNotes);

router.patch("/", notesController.updateNote);

router.delete("/", notesController.deleteNote);

module.exports = router;
