function computeIncomeTax(amount) {
  let totalTax = 0;

  if (amount <= 250000) {
    return 0;
  }

  if (amount > 250000) {
    const taxableAt10 = Math.min(amount, 500000) - 250000;
    totalTax += taxableAt10 * 0.10;
  }

  if (amount > 500000) {
    const taxableAt20 = Math.min(amount, 1000000) - 500000;
    totalTax += taxableAt20 * 0.20;
  }

  if (amount > 1000000) {
    const taxableAt25 = amount - 1000000;
    totalTax += taxableAt25 * 0.25;
  }

  if (totalTax > 50000) {
    const extra = totalTax - 50000;
    totalTax += extra * 0.05;
  }

  return totalTax;
}

module.exports = computeIncomeTax;