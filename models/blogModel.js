const mongoose = required('mongoose')

const schema = mongoose.schema

blogModel = new schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('blogModel', blogModel)