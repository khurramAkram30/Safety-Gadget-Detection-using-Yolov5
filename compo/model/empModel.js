const mongoose = require("mongoose");

const EmpSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  dob: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
});

module.exports = mongoose.model("Employe", EmpSchema);
