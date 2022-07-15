const express = require("express");
const router = express.Router();

const UpdateController = require("../app/controllers/UpdateController");

router.put("/:id", UpdateController.save);
router.patch("/:id/restore", UpdateController.patch);
router.delete("/:id/force", UpdateController.deleteForce);
router.delete("/:id", UpdateController.delete);
router.get("/:id/edit", UpdateController.edit);
router.get("/trash", UpdateController.trash);
router.get("/", UpdateController.update);

module.exports = router;
