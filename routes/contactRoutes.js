const express = require('express')
const router = express.Router()
const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact } = require('../controllers/contactController')
const validateToken = require('../middleware/validateTokenHandler')


// validate token for all routes
router.use(validateToken)

//to get all contact       //to post contact
router.route('/').get(getContacts).post(createContact)

// to get individual contact         //update contact     // delete contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)


module.exports = router;