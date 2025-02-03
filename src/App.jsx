import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from './components/ExpenseFilter'
import TotalSpending from './components/TotalSpending'
import ThemeToggle from './components/ThemeToggle'
import ExpenseChart from './components/ExpenseChart'
import ExportCSV from './components/ExportCSV'
import MonthlySumary from './components/MonthlySumary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <ThemeToggle/>
        <h1 className="text-center mt-4">💰 Expense Tracker</h1>
        <AddExpense/>
        <ExpenseFilter/>
        <TotalSpending/>
        <ExpenseList/>
        <ExpenseChart/>
        <ExportCSV/>
        <MonthlySumary/>
      </div>
    </>
  )
}

export default App
