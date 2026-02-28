const Client = require("../models/Client");

// CREATE CLIENT
const createClient = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    const client = await Client.create({
      user: req.user._id,
      name,
      email,
      phone,
      address,
    });

    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET CLIENTS
const getClients = async (req, res) => {
  try {
    const clients = await Client.find({ user: req.user._id });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createClient, getClients };