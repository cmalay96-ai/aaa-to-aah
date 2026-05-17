const express = require('express');
const router = express.Router();

// Mock service data
const premiumServices = [
  {
    id: '1',
    name: 'Head Massage for Stress Relief',
    duration: '45 Min',
    price: 350,
    description: 'Targeted therapy to release tension in the head, neck, and shoulders. Perfect for relieving modern stress and headaches.'
  },
  {
    id: '2',
    name: 'Full Body Fitness Recovery',
    duration: '90 Min',
    price: 500,
    description: 'Deep tissue and sports massage techniques to accelerate muscle recovery and improve flexibility.'
  }
];

// @route   GET /api/services
// @desc    Get all premium services
router.get('/', (req, res) => {
  res.json(premiumServices);
});

module.exports = router;
