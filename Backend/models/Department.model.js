const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  depName: {
    type: String,
  },

  description: {
    type: String,
  }
});

const DepartmentModel = mongoose.model("department", departmentSchema);

module.exports = { DepartmentModel };
