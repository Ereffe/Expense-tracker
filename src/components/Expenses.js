import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card";

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

  return <Card className="expenses">{renderExpenses}</Card>;
}

export default Expenses;
