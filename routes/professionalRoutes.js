const express = require("express");
const router = new express.Router();
const professionalController = require("../controllers/professional");

router.get("/professional", professionalController.getData);

module.exports = router;

