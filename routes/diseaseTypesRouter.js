const express = require("express");
const diseaseTypesController = require("../controllers/diseaseTypesController");

const router = express.Router();

router.get("/disease-types", diseaseTypesController.getDiseaseTypes);
router.post("/disease-types", diseaseTypesController.createDiseaseType);
router.put("/disease-types/:id", diseaseTypesController.updateDiseaseType);
router.delete("/disease-types/:id", diseaseTypesController.deleteDiseaseType);

module.exports = router;
