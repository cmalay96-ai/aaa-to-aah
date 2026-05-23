const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/services', require('./routes/services'));
app.use('/api/appointments', require('./routes/appointments'));

// SaaS Admin Routes
app.use('/api/saas/auth', require('./routes/saasAuth'));
app.use('/api/saas/orders', require('./routes/saasOrders'));

// Serve static assets from the public directory (images, pdfs, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// --- AAATOAHH.IN Funnel Routes ---

// 1. Gym Recovery
app.get('/gym-recovery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/gym-recovery.html'));
});
app.get('/thank-you-gym-recovery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/thank-you-gym-recovery.html'));
});

// 2. Leg Recovery
app.get('/leg-recovery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/leg-recovery.html'));
});
app.get('/thank-you-leg-recovery', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/thank-you-leg-recovery.html'));
});

// 3. Joint Pain Relief
app.get('/joint-pain-relief', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/joint-pain-relief.html'));
});
app.get('/thank-you-joint-pain', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/thank-you-joint-pain.html'));
});

// 4. Parents Pain Care
app.get('/parents-pain-care', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/parents-pain-care.html'));
});
app.get('/thank-you-parents-care', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/thank-you-parents-care.html'));
});

// 5. Sleep Relaxation
app.get('/sleep-relaxation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/sleep-relaxation.html'));
});
app.get('/thank-you-sleep-relaxation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/thank-you-sleep-relaxation.html'));
});

// ---------------------------------

// Serve the index.html landing page at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Serve the admin dashboard HTML at /admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running smoothly' });
});

const PORT = process.env.PORT || 5000;

// Since this is a test setup, we will connect to a mock local DB if MongoDB URI is missing
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/heal_massage';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    // Start server anyway for testing purposes without DB
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} (without database)`);
    });
  });
