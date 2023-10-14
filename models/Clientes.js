const mongoose= require('mongoose');
const Shema = mongoose.Schema;

const clientesSchema  = new Shema({
    nombre:{
        type: String,
        trim: true
    },
    apellido:{
        type: String,
        trim: true
    },
    empresa:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telefono:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        trim: true
    },
    admin:{
        type: Boolean,
        trim: true
    }
});

module.exports = mongoose.model('Clientes', clientesSchema);