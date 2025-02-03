import  { useContext, useState } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const AddExpense = () => {
    const {addExpense} = useContext(ExpenseContext);
    const [title, setTitle]=useState("");
    const [amount, setAmount]=useState("");
    const [category, setCategory]=useState("Food");

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!title || !amount) return;
        addExpense(title, amount, category);
        setTitle("");
        setAmount("");
    }

    return (
        <div className='container mt-4'>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Expense Title' value={title} 
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
                
                <div className="mb-3">
                    <input type="number" className='form-control'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)} />
                </div>

                <div className="mb-3">
                    <select className='form-control' value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option>Food</option>
                        <option>Transport</option>
                        <option>Shopping</option>
                        <option>Entertainment</option>
                    </select>
                </div>

                <button type='submit' className='btn btn-primary'>Add Expense</button>
            </form>
            
        </div>
    );
};

export default AddExpense;