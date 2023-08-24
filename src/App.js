import ExpeseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpeseItem expense={expenses[0]}></ExpeseItem>
      <ExpeseItem expense={expenses[1]}></ExpeseItem>
      <ExpeseItem expense={expenses[2]}></ExpeseItem>
      <ExpeseItem expense={expenses[3]}></ExpeseItem>
    </div>
  );
}

export default App;
