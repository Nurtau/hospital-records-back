const express = require("express");
const discoversController = require("../controllers/discoversController");

const router = express.Router();

router.get("/discovers", discoversController.getDiscovers);
router.post("/discovers", discoversController.createDiscover);
router.put("/discovers/:id", discoversController.updateDiscover);
router.delete("/discovers/:id", discoversController.deleteDiscover);

module.exports = router;
