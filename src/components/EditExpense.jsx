import { useContext, useState } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const EditExpense = ({expense, onClose}) => {
    const {editExpense}=useContext(ExpenseContext);
    const [title, setTitle]=useState(expense.title);
    const [amount, setAmount]=useState(expense.amount);
    const [category, setCategory]=useState(expense.category);

    const handleSubmit=(e)=>{
        e.preventDefault();
        editExpense(expense.id, title, amount, category);
        onClose();
    }

    return (
        <div className='modal d-block' tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Expense</h5>
                        <button type='button' className='btn-close' onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className='form-label'>Title</label>
                                <input type="text" className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Amount</label>
                                <input type="number" className='form-control' value={amount} onChange={(e)=>setAmount(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Category</label>
                                <select className='form-label' value={category} onChange={(e)=>setCategory(e.target.value)}>
                                    <option value="Food">Food</option>
                                    <option value="Transport">Transport
                                   </option>
                                   <option value="Shopping">Shopping</option>
                                   <option value="Entertainment">Entertainment</option>
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditExpense;
