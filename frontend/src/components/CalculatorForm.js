import React, { useState } from 'react';
import './styles/Form.css';

function CalculatorForm({ onCalculate }) {
  const [employees, setEmployees] = useState('');
  const [cumulativePay, setCumulativePay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employees || !cumulativePay) return;
    onCalculate(Number(employees), Number(cumulativePay));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Number of Employees"
        value={employees}
        onChange={e => setEmployees(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cumulative Pay"
        value={cumulativePay}
        onChange={e => setCumulativePay(e.target.value)}
      />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default CalculatorForm;
