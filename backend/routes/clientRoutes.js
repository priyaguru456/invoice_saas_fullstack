const express = require("express");
const protect = require("../middleware/authMiddleware"); // ✅ import as function
const { createClient, getClients } = require("../controllers/clientController");

const router = express.Router();

// GET + POST clients
router.route("/")
  .get(protect, getClients)
  .post(protect, createClient);

module.exports = router;