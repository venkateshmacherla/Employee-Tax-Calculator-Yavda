const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const calculatorRoutes = require('./routes/calculator');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', calculatorRoutes);

mongoose.connect('mongodb://localhost:27017/employeeTax')
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
