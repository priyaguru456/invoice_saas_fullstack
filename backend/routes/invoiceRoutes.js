const express = require("express");
const protect = require("../middleware/authMiddleware"); // ✅ import as function
const { getInvoices, createInvoice } = require("../controllers/invoiceController");

const router = express.Router();

// GET + POST invoices
router.route("/")
  .get(protect, getInvoices)
  .post(protect, createInvoice);

module.exports = router;