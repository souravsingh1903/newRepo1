const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');
// Add middleware to parse JSON data
router.use(express.json());

router.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

router.post("/contactus", (req, res, next) => {
    console.log(req.body);
    
    res.redirect('/success');

});

router.get("/success", (req,res,next) => {
    res.send('<h1>Form Successfully Filled</h1>');
});

module.exports = router;
