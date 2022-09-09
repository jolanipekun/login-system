const express = require('express')
const router = express.Router()

// To mock-up a database
const credentials = {
    email: "admin@gmail.com",
    password: "admin123"
}

// Login user route
router.post('/login', (req, res) => {
    if(req.body.email !== credentials.email && req.body.password !== credentials.password){
        res.end("Invalid credential")
    } else {
        req.session.user = req.body.email;
        //res.redirect('/dashboard')
        res.end('login successfull')
        
    }
})


module.exports = router;