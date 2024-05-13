const express = require("express");
const { BSONType } = require("mongodb");
const mongoose = require("mongoose");
const { type } = require("os");

const app = express();
conn
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
})

const mondayUser = mongoose.model("MondayUser", userSchema);

const firstdoc = new mondayUser({
    firstName: "Akash",
    lastName: "Shankar",
    email: "aksh21is@cmrit.ac.inaa",
    gender: "Male",
});
firstdoc.save().then(() => console.log("Entry Done.")).catch((err) => console.log(err));
app.get("/mongodb", (req, res) => {
    mondayUser.find({}, (err, res) => {
        if (!err) {
            res.send(res);
        }
        else {
            console.log(err);
        }
    }).then(() => console.log("s")).catch((err) => console.log("err"));
})

app.listen(8000, (req, res) => {
    console.log(`Server running at port 8000`);
})