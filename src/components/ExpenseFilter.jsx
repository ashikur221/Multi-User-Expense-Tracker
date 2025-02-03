import  { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const ExpenseFilter = () => {
    const {filter, setFilter}=useContext(ExpenseContext);
    return (
        <div className='container mt-4'>
            <h4>Filter by Category: </h4>
            <select className='form-select' value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
            </select>
            
        </div>
    );
};

export default ExpenseFilter;