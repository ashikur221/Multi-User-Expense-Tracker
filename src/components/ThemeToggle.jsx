import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useContext(ExpenseContext);
    return (
        <div className='text-end mt-3'>
            <button className="btn btn-secondary" onClick={toggleDarkMode}>
                {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>

        </div>
    );
};

export default ThemeToggle;