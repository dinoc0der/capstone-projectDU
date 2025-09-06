// backend/src/routes/api.js
const express = require('express');
const router = express.Router();

// Simple contact route
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Log message to backend console
    console.log('--- New Contact Message ---');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('---------------------------');

    // Respond success to frontend
    res.status(200).json({ success: true, message: 'Message received successfully!' });

  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).json({ success: false, message: 'Failed to send message, please try again.' });
  }
});

module.exports = router;