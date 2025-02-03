import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
    const { expenses } = useContext(ExpenseContext);

    // Group expenses by category 
    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
            {
                data: Object.values(categoryTotals),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9966FF"],
                hoverBackgroundColor: ["#FF4D6D", "#2B8ACB", "#E6B800", "#2E8E41", "#7B4FB3"],
            },
        ],
    };

    return (
        <div className="container mt-4">
            <h4 className="">Expense Breakdown by Category</h4>
            {expenses.length > 0 ? <Doughnut data={data}/>: <p>No expenses to show</p>}

        </div>
    );
};

export default ExpenseChart;