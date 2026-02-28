const Invoice = require("../models/Invoice");

// ================= GET INVOICES =================

const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user._id });
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ================= CREATE INVOICE =================

const createInvoice = async (req, res) => {
  try {
    const { clientName, items, amount, status } = req.body;

    if (!clientName || !items || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const invoice = await Invoice.create({
      user: req.user._id,   // 🔥 IMPORTANT
      clientName,
      items,
      amount,
      status,
    });

    res.status(201).json(invoice);
  } catch (error) {
    console.error("CREATE INVOICE ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInvoices,
  createInvoice,
};