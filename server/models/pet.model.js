const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Adoptable pets must have a name."],
        minlength:[3,"Name must be at least 3 characters."],
    },
    type:{
        type:String,
        required:[true,"Type is required."],
        minlength:[3,"Type must be at least 3 characters."]
    },
    description:{
        type:String,
        required:[true,"Tell us something about this pet."],
        minlength:[3,"Description must be at least 3 characters."]
    },
    skill1:{
        type:String,
        default:""
    },
    skill2:{
        type:String,
        default:""
    },
    skill3:{
        type:String,
        default:""
    },
},{timestamps:true})

module.exports.Pet = mongoose.model("Pet",PetSchema)