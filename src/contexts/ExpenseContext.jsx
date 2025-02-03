import { createContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({children})=>{

    const [expenses, setExpenses]=useState(()=>{
        return JSON.parse(localStorage.getItem("expenses")) || [];
    });

    useEffect(()=>{
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);


    const addExpense = (title, amount, category)=>{
        const newExpense = {id: Date.now(), title, amount: parseFloat(amount), category};
        setExpenses([...expenses, newExpense]);
    };

    const deleteExpense =(id)=>{
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    const data = {expenses, addExpense, deleteExpense};

    return(
        <ExpenseContext.Provider value={data}>
            {children}
        </ExpenseContext.Provider>
    )
}