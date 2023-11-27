const { timeLog, timeStamp } = require('console');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"]
    },
    email: {
        type: String,
        required: [true, "Please add the email address"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please add the  user password"]
    }
}, {
    timestamps: true
}

)

module.exports = mongoose.model('User', userSchema)