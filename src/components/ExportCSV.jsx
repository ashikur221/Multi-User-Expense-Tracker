import React, { useContext } from 'react';
import { ExpenseContext } from '../contexts/ExpenseContext';
import {CSVLink} from "react-csv";

const ExportCSV = () => {
    const {expenses}=useContext(ExpenseContext);

    const headers = [
        {label: "ID", key: "id"},
        {label: "Description", key: "text"},
        {label: "Amount", key: "amount"},
        {label: "Category", key: "category"},
    ];
    return (
        <div className='text-end mt-3'>
            <CSVLink
            data={expenses}
            headers={headers}
            filename='expenses.csv'
            className='btn btn-success'
            >
                📥 Export CSV
            </CSVLink>
        </div>
    );
};

export default ExportCSV;