// ridejoin-backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Route to accept email
app.post('/email', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Invalid email' });
  }

  // Append to file
  fs.appendFile('emails.txt', email + '\n', (err) => {
    if (err) return res.status(500).json({ success: false });
    res.json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
