const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const prescriptionSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    Doctor:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})

module.exports= mongoose.model("prescription",prescriptionSchema);