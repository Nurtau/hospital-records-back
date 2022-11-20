const express = require("express");
const recordsController = require("../controllers/recordsController");

const router = express.Router();

router.get("/records", recordsController.getRecords);
router.post("/records", recordsController.createRecord);
router.put("/records/:record_id", recordsController.updateRecord);
router.delete("/records/:record_id", recordsController.deleteRecord);

module.exports = router;
