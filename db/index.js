const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/student", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Student Database is connected successfully"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;
module.exports = db;
