/* ROUTE CONTACT */
/* Imports */
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

/* VERBS */
router.post("/", contactController.contactSend);

module.exports = router;
