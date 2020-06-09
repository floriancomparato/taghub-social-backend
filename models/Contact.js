/* Contact model */
/* Imports*/
const mongoose = require("mongoose");

/* Model*/
const Contact = mongoose.model("Contact", {
  email: String,
  message: String,
});

module.exports = Contact;
