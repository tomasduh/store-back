const mongoose = require("mongoose")
const Schema  = mongoose.Schema;

const productosSchema = new Schema({
    name : {
        type:String,
        trim: true
    },
    img: {
        type: String
    },
    precio: {
        type: Number
    }
})

module.exports = mongoose.model('Productos', productosSchema)