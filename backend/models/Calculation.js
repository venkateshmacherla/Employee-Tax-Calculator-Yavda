const mongoose = require('mongoose');

const CalculationSchema = new mongoose.Schema({
  employees: {
    type: Number,
    required: true
  },
  cumulativePay: {
    type: Number,
    required: true
  },
  results: [
    {
      employeeId: Number,
      salary: Number,
      tax: Number,
      takeHome: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Calculation', CalculationSchema);
