const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter Name"]
    },
    email: {
        type: String,
        required: [true, "please Enter email"]
    },
    password: {
        type: String,
        required: [true, "please Enter password"]
    },
    profile: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("user", userSchema)