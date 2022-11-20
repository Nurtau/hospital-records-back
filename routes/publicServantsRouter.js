const express = require("express");
const publicServantsController = require("../controllers/publicServantsController");

const router = express.Router();

router.get("/public-servants", publicServantsController.getPublicServants);
router.post("/public-servants", publicServantsController.createPublicServant);
router.put(
  "/public-servants/:email",
  publicServantsController.updatePublicServant
);
router.delete(
  "/public-servants/:email",
  publicServantsController.deletePublicServant
);

module.exports = router;
