/* ROUTE USERS */
/* Imports */
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
/* VERBS */
/*router.get("/", userController.viewUser);
router.put("/edit", userController.editUser);*/
/* VERBS */

router.post("/signup", auth, userController.signup);
router.post("/login", auth, userController.login);
module.exports = router;
