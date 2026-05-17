const express = require('express');
const router = express.Router();

// Temporary appointments database stub (Supabase is currently the primary data store)
let appointments = [];

// @route   GET /api/appointments
// @desc    Get all appointments
router.get('/', (req, res) => {
  res.json(appointments);
});

// @route   POST /api/appointments
// @desc    Create a new appointment
router.post('/', (req, res) => {
  try {
    const { name, phone, address, date, time, service, price } = req.body;
    
    const newAppointment = {
      id: (appointments.length + 1).toString(),
      name,
      phone,
      address,
      date,
      time,
      service,
      price,
      bookedAt: new Date().toISOString()
    };
    
    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
