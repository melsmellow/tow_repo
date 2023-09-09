const mongoose = require("mongoose");
const towDataSchema = new mongoose.Schema({
  year: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  color: {
    type: String,
  },
  vin: {
    type: String,
  },
  licenseNo: {
    type: String,
  },
  licenseState: {
    type: String,
  },
  towDate: {
    type: Date,
  },
});

module.exports = mongoose.model("TowData", towDataSchema);
