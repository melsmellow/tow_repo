const TowData = require("../models/TowData");

module.exports.createData = (reqBody) => {
  console.log(reqBody);
  const { year, make, model, color, vin, licenseNo, licenseState, towDate } =
    reqBody;

  let newData = new TowData({
    year,
    make,
    model,
    color,
    vin,
    licenseNo,
    licenseState,
    towDate,
  });

  return newData.save().then((data, error) => {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("data added successfully");
      return true;
    }
  });
};

module.exports.getAllData = () => {
  return TowData.find().then((result) => {
    return result;
  });
};

module.exports.updateDate = (reqParams, reqBody) => {
  const { year, make, model, color, vin, licenseNo, licenseState, towDate } =
    reqBody;

  let newData = {
    year,
    make,
    model,
    color,
    vin,
    licenseNo,
    licenseState,
    towDate,
  };

  return TowData.findByIdAndUpdate(reqParams.id, newData).then(
    (update, error) => {
      if (error) {
        return false;
      } else {
        console.log("updated successfully");
        return true;
      }
    }
  );
};

module.exports.deleteData = (reqParams, reqBody) => {
  return TowData.deleteOne({ _id: reqParams.id }).then((result) => {
    return result;
  });
};
