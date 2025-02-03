import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const MonthlySumary = () => {
    const { expenses } = useContext(ExpenseContext);

    // Group expenses by month 
    const monthlyTotals = expenses.reduce((acc, expense) => {
        const date = new Date(expense.date);
        const month = date.toLocaleString("default", { month: "long", year: "numeric" });

        acc[month] = (acc[month] || 0) + expense.amount;
        return acc;
    }, {})
    return (
        <div className='mt-4'>
            <h4>📅 Monthly Expense Summary</h4>
            <ul className="list-group">
                {Object.entries(monthlyTotals).map(([month, total]) => (
                    <li key={month} className="list-group-item d-flex justify-content-between">
                        <span>{month}</span>
                        <strong>${total.toFixed(2)}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MonthlySumary;