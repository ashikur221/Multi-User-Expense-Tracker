import  { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const ExpenseList = () => {
    const {expenses, deleteExpense, filter}=useContext(ExpenseContext);

    // Filtered expenses 
    const filteredExpenses = filter === "All" ? expenses 
    : 
    expenses.filter(expense => expense.category === filter);
    return (
        <div className='container mt-4'>
            <h2>Expense List</h2>
            <ul className="list-group">
                {
                   filteredExpenses.length > 0 ? (
                        filteredExpenses.map((expense) => (
                            <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>
                                    {expense.title} - ${expense.amount} ({expense.category})
                                </span>

                                <button className='btn btn-danger btn-sm' onClick={() => deleteExpense(expense.id)}>Delete</button>
                            </li>
                        ))
                   ):
                   (
                    <li className="list-group-item text-center">No expenses found for this category</li>
                   )
                }
            </ul>
            
        </div>
    );
};

export default ExpenseList;