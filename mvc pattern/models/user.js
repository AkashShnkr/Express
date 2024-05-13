const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
    }
},
{
    timestamps:true
});

const mondayUser = mongoose.model("MondayUser", userSchema);

module.exports= mondayUser;
