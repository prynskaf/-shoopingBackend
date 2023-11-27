const asyncHandler = require('express-async-handler');
const Contact = require('../module/contactModule');

//@desc get all contact
//@route GET /api/contacts
//@acesss private
const getContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find({ user_id: req.user.id })
    res.status(200).json(contact);
})

//@desc Create New  contact
//@route POST /api/contacts
//@acesss private
const createContact = asyncHandler(async (req, res) => {
    console.log('The request body is:', req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required')
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })

    res.status(201).json(contact);
})




//@desc Get   contact
//@route GET /api/contacts/:id
//@acesss previte
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found')
    }
    res.status(200).json(contact);
})

//@desc Update   contact
//@route PUT /api/contacts/:id
//@acesss private
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found')
    }
    //update conact 
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User dont have permission to update other contacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedContact);
})

//@desc delete   contact
//@route DELETE /api/contacts/:id
//@acesss private
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found')
    }

    // to check if the contact found  matches with  the user id
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User dont have permission to update other contacts")
    }

    await Contact.deleteOne({ _id: req.params.id })
    res.status(200).json(contact);
})

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};