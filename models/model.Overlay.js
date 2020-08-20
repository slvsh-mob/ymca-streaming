const mongoose = require('mongoose')

const overlaySchema = mongoose.Schema({
    graphicsColor: {
        type: String,
        required: true,
    },
    source: {
        type: Boolean,
        default: false
    }
})

const Overlay = mongoose.model('Overlay', overlaySchema)
module.exports = Overlay;