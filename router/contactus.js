const express = require('express');
const path = require('path');

const router = express.Router();
const contactController = require('../controllers/contact');
// Add middleware to parse JSON data
router.use(express.json());

//Get Contacts
router.get("/contactus", contactController.getContacts );

//post contacts
router.post("/contactus", contactController.postContacts);

//get contacts
router.get("/success", contactController.getSucess);

module.exports = router;
