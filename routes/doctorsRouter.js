const express = require("express");
const doctorsController = require("../controllers/doctorsController");

const router = express.Router();

router.get("/doctors", doctorsController.getDoctors);
router.post("/doctors", doctorsController.createDoctor);
router.put("/doctors/:email", doctorsController.updateDoctor);
router.delete("/doctors/:email", doctorsController.deleteDoctor);

module.exports = router;
