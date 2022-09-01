const mongoose = required('mongoose')

const schema = mongoose.schema

userModel = new schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('userModel', userModel)