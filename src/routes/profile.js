const express = require("express");
const router = express.Router();

const ProfileController = require("../app/controllers/ProfileController");

router.post("/store", ProfileController.store);
router.get("/create", ProfileController.create);
router.get("/:slug", ProfileController.show);

module.exports = router;
