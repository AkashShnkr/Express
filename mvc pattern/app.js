const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const { connectionMongoDB } = require("./connection");

connectionMongoDB("mongodb://127.0.0.1:27017/mondaymongodb")
.then(() => {
   console.log(`MongoDB connection`);
 })
 .catch((err) => console.log("MongoDB Error", err));

app.use("/user", userRoute);

app.listen(8000, (req, res) => {
  console.log(`Server is running at port 8000`);
});
