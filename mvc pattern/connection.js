const mongoose = require("mongoose");

async function connectionMongoDB(){
return mongoose
  .connect(url)
  .then(() => {
    console.log(`MongoDB connection`);
  })
  .catch((err) => console.log("MongoDB Error", err));
}


module.exports = {connectionMongoDB};