const mongoose = require("mongoose");
const schema = mongoose.Schema
const userschema = new schema (
    {
        name : { 
            type : String,
            required : true
        },

        lastname : { 
            type : String,
            required : true
        },
        email : { 
            type : String,
            required : true
        },
        password : { 
            type : String,
            required : true
        },
    }
)

module.exports=mongoose.model("User",userschema);
