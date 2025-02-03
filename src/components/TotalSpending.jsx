import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";


const TotalSpending = () => {
    const {getTotalSpending, filter}=useContext(ExpenseContext);
    return (
        <div className="container mt-4">
            <h4 className="">Total Spending ({filter}): ${getTotalSpending()}</h4>
            
        </div>
    );
};

export default TotalSpending;