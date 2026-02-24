function distributeSalaries(employees, cumulativePay) {
  let salaries = Array(employees).fill(0);

  let base = Math.floor(cumulativePay / employees);
  let remainder = cumulativePay % employees;

  for (let i = 0; i < employees; i++) {
    salaries[i] = base;
    if (remainder > 0) {
      salaries[i] += 1; 
      remainder--;
    }
  }

  return salaries;
}

module.exports = distributeSalaries;
