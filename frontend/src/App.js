import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsTable from './components/ResultsTable';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  const handleCalculate = async (employees, cumulativePay) => {
    const res = await fetch('http://localhost:5000/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ employees, cumulativePay })
    });
    const data = await res.json();
    setResults(data);
  };

  return (
    <div className="app-container">
      <h1>Employee Tax Calculator</h1>
      <CalculatorForm onCalculate={handleCalculate} />
      <ResultsTable results={results} />
    </div>
  );
}

export default App;
