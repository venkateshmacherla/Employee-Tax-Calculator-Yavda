# Employee Tax Calculator

## 📌 Overview
This project is a **MERN stack application** (MongoDB, Express, React, Node.js) designed to help the Employee Welfare Head minimize total income tax outgo for company employees.

The calculator accepts:
- **Number of Employees**
- **Cumulative yearly pay of all employees**

It then distributes salaries fairly and applies **hypothetical government tax rules** to compute:
- Salary per employee
- Tax outgo per employee
- Take-home salary per employee

---

## ⚖️ Tax Rules Implemented
- **Slab A:** Income ≤ ₹250,000 → Tax = 0  
- **Slab B:** ₹250,000 – ₹500,000 → Tax = 10% of income  
- **Slab C:** ₹500,000 – ₹1,000,000 → Tax = 20% of income  
- **Slab D:** Income > ₹1,000,000 → Tax = 25% of income  
- **Surcharge:** If tax > ₹50,000, the excess is taxed an additional 5%  

**Example:**  
For income ₹1,400,000 → Total tax = ₹233,750 (including surcharge).

---

## 🛠️ Tech Stack
- **Frontend:** React.js (with plain CSS, no frameworks)  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (for storing calculation history)  
- **Styling:** Plain CSS (`App.css`, `Form.css`, `Table.css`)  

---


---

## 🚀 How to Run

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd employee-tax-calculator

**## Fronted **
cd frontend
npm install

**##Backend:**
cd backend
npm install

**## Start MongoDB**
mongod

**## Run backend**
node server.js
Backend runs on http://localhost:5000

**## Run frontend**
npm start

**## Features**
- Input number of employees and cumulative pay.
- Distributes salaries fairly to minimize tax.
- Calculates tax per employee based on slabs.
- Displays results in a table with summary totals.
- Stores calculation history in MongoDB (optional extension).
- Input number of employees and cumulative pay.
- Distributes salaries fairly to minimize tax.
- Calculates tax per employee based on slabs.
- Displays results in a table with summary totals.
