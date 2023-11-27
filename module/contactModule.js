const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, 'Please add a contact name'],
    },
    email: {
        type: String,
        required: [true, 'Please add a contact emaill address'],
    },
    phone: {
        type: String,
        required: [true, 'Please add a contact phone number'],
    },
},
    {
        timestamps: true
    },
)

module.exports = mongoose.model('contact', contactSchema)