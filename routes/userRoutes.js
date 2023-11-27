const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router()

// register endpoints to register
router.post('/register', registerUser)

//login endpints to login 
router.post('/login', loginUser)

//current endpints to current 
router.get('/current', validateToken, currentUser)

module.exports = router;










//current endpints to current 
// router.get('/current', (req, res) => {
//     res.json({ message: "current user information" });
// })