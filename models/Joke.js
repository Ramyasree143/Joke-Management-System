const mongoose = require("mongoose")

const jokeSchema = new mongoose.Schema({

    joke:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},
{
    timestamps:true
})

module.exports = mongoose.model("Joke",jokeSchema)