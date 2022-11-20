const express = require("express");
const diseasesController = require("../controllers/diseasesController");

const router = express.Router();

router.get("/diseases", diseasesController.getDiseases);
router.post("/diseases", diseasesController.createDisease);
router.put("/diseases/:disease_code", diseasesController.updateDisease);
router.delete("/diseases/:disease_code", diseasesController.deleteDisease);

module.exports = router;


