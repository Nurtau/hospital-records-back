const express = require("express");
const specializationsController = require("../controllers/specializationsController");

const router = express.Router();

router.get("/specializations", specializationsController.getSpecializations);
router.post("/specializations", specializationsController.createSpecializtion);
router.put("/specializations/:specialize_id", specializationsController.updateSpecialization);
router.delete("/specializations/:specialize_id", specializationsController.deleteSpecialization);

module.exports = router;
