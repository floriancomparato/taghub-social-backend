/*Users Model*/
/* Imports */
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
/*--------*/

/* Model */
const usersSchema = mongoose.Schema({
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
});
usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", usersSchema);
