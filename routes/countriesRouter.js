const express = require("express");
const countriesController = require("../controllers/countriesCountroller");

const router = express.Router();

router.get("/countries", countriesController.getCountries);
router.post("/countries", countriesController.createCountry);
router.put("/countries/:cname", countriesController.updateCountry);
router.delete("/countries/:cname", countriesController.deleteCountry);

module.exports = router;
