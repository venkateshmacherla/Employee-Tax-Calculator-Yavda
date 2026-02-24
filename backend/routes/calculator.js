const express = require('express');
const router = express.Router();
const calculateTax = require('../utils/tax');
const distributeSalaries = require('../utils/distribute');
const Calculation = require('../models/Calculation');

router.post('/calculate', async (req, res) => {
  const { employees, cumulativePay } = req.body;
  let salaries = distributeSalaries(employees, cumulativePay);

  let results = salaries.map((salary, index) => {
    let tax = calculateTax(salary);
    return {
      employeeId: index + 1,
      salary,
      tax,
      takeHome: salary - tax
    };
  });

  const calc = new Calculation({
    employees,
    cumulativePay,
    results
  });
  await calc.save();

  res.json(results);
});

module.exports = router;
