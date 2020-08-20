const mongoose = require('mongoose')

const classSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String
    },
    length: {
        type: Number
    },
    instructor: {
        type: String,
        required: true
    },
    current: {
        type: Boolean
    }
})

classSchema.methods.getClassInfo = async () => {
    const currentClass = this;
    const classInfo = await currentClass.find({})
    if (!classInfo){
        let outputInfo = {
            name: 'YMCA Class',
            category: 'fitness',
            length: 60,
            instructor: 'John Doe'
        }
    } else {
        let outputInfo = classInfo
    }
    return outputInfo
}

const Class = mongoose.model('Class', classSchema)

module.exports = Class