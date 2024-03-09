const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  docName: {
    type: String,
  },

  mobile: {
    type: Number,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
    required: false,
  },

  gender: {
    type: String,
  },

  Expirence: {
    type: Number,
  },

  address: {
    type: String,
  },

  education: {
    type: String,
  },

  department: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "department",
  },

  details: {
    type: String,
  },

  image: {
    type: String,
    required: true
  }
});

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = { DoctorModel };
