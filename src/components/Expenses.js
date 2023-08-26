import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";

function Expenses({ expenses }) {
  const renderExpenses = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <div className="expenses">{renderExpenses}</div>;
}

export default Expenses;
