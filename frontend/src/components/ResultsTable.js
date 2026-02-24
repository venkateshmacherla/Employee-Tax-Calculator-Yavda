import React from 'react';
import '../components/styles/Table.css';

function ResultsTable({ results }) {
  if (!results.length) return null;

  const totalSalary = results.reduce((sum, r) => sum + r.salary, 0);
  const totalTax = results.reduce((sum, r) => sum + r.tax, 0);
  const totalTakeHome = results.reduce((sum, r) => sum + r.takeHome, 0);

  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Salary</th>
          <th>Tax</th>
          <th>Take Home</th>
        </tr>
      </thead>
      <tbody>
        {results.map(r => (
          <tr key={r.employeeId}>
            <td>{r.employeeId}</td>
            <td>{r.salary.toLocaleString()}</td>
            <td>{r.tax.toLocaleString()}</td>
            <td>{r.takeHome.toLocaleString()}</td>
          </tr>
        ))}
        <tr className="summary-row">
          <td><strong>Total</strong></td>
          <td><strong>{totalSalary.toLocaleString()}</strong></td>
          <td><strong>{totalTax.toLocaleString()}</strong></td>
          <td><strong>{totalTakeHome.toLocaleString()}</strong></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsTable;
