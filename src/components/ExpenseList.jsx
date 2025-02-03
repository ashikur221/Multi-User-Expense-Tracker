import  { useContext, useState } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import EditExpense from './EditExpense';

const ExpenseList = () => {
    const {expenses, deleteExpense, filter}=useContext(ExpenseContext);
    const [editingExpense, setEditingExpense]=useState(null);
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

                                <div className="">
                                    <button className="btn btn-warning btn-sm me-2" onClick={()=>setEditingExpense(expense)}>Edit</button>
                                    <button className='btn btn-danger btn-sm' onClick={() => deleteExpense(expense.id)}>Delete</button>
                                </div>
                            </li>
                        ))
                   ):
                   (
                    <li className="list-group-item text-center">No expenses found for this category</li>
                   )
                }
            </ul>

            {/* Show edit modal if an expense is selected for editing  */}
            {editingExpense && <EditExpense expense={editingExpense} onClose={()=>setEditingExpense(null)}/>}
            
        </div>
    );
};

export default ExpenseList;