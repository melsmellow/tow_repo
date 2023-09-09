const express = require("express");
const router = express.Router();
const towDataController = require("../controllers/towdata");

router.post("/create", (req, res) => {
  try {
    towDataController.createData(req.body).then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.get("/get", (req, res) => {
  try {
    towDataController.getAllData().then((result) => res.send(result));
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id/update", (req, res) => {
  try {
    towDataController
      .updateDate(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {
    console.log("error");
  }
});

router.delete("/:id/delete", (req, res) => {
  try {
    towDataController
      .deleteData(req.params, req.body)
      .then((result) => res.send(result));
  } catch (error) {}
});
module.exports = router;
