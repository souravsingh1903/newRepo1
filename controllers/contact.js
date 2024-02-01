const path = require('path');
 const rootDir = require('../util/path');
 

 exports.getContacts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
}

 exports.postContacts = (req, res, next) => {
    console.log(req.body);
    
    res.redirect('/success');

}

 exports.getSucess =  (req,res,next) => {
    res.send('<h1>Form Successfully Filled</h1>');
}