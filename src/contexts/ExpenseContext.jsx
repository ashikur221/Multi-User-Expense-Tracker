import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {

    const [expenses, setExpenses] = useState(() => {
        return JSON.parse(localStorage.getItem("expenses")) || [];
    });

    const [filter, setFilter] = useState("All"); //New state for filtering

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);


    const addExpense = (title, amount, category) => {
        const newExpense = { id: Date.now(), title, amount: parseFloat(amount), category };
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const getTotalSpending = () => {
        const filteredExpenses = filter === "All" ? expenses :
            expenses.filter(expense => expense.category === filter);
        return filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
    };

    const data = { expenses, addExpense, deleteExpense, filter, setFilter, getTotalSpending };

    return (
        <ExpenseContext.Provider value={data}>
            {children}
        </ExpenseContext.Provider>
    )
}