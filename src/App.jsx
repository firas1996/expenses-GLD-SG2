import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesContainer from "./components/ExpensesContainer";

function App() {
  const data = [
    {
      id: 1,
      title: "New TV",
      price: 799.99,
      date: new Date("2025-02-12"),
    },
    {
      id: 2,
      title: "Voyage",
      price: 2799.99,
      date: new Date("2023-10-19"),
    },
    {
      id: 3,
      title: "Education",
      price: 5000,
      date: new Date("2024-09-20"),
    },
    {
      id: 4,
      title: "Phone",
      price: 1500,
      date: new Date("2025-02-7"),
    },
  ];
  return (
    <div>
      <AddExpenseForm />
      <ExpensesContainer data={data} />
    </div>
  );
}

export default App;
