const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    name: { type: String },
    admission_no: { type: Number },
    class: { type: String },
    section: { type: String },
    roll_no: { type: Number },
    dob: { type: Date },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
