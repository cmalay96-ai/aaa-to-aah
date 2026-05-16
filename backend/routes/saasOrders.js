const express = require('express');
const router = express.Router();
const SaaSOrder = require('../models/SaaSOrder');
const { protect, admin } = require('../middleware/authMiddleware');

// Get all orders (Admin only)
router.get('/', protect, admin, async (req, res) => {
  try {
    const orders = await SaaSOrder.find({}).populate('user', 'id name email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user orders (Customer)
router.get('/myorders', protect, async (req, res) => {
  try {
    const orders = await SaaSOrder.find({ user: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
