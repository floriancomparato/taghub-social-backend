/*CONTROLLERS CONTACT*/

/*Import Model*/
const Contact = require("../models/Contact");

const contactController = {
  contactSend: (req, res, next) => {
    const contactForm = req.body;
    const newContactForm = new Contact({
      email: contactForm.email,
      message: contactForm.message,
    });
    /* save form in db*/
    newContactForm.save((err) => {
      if (err) {
        console.log(err);
        res.status(500).send("Erreur!");
      } else {
        res.send("Envoyé!");
      }
    });
  },
};

module.exports = contactController;
