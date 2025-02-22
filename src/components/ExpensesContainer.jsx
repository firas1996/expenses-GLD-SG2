import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses">
      {data.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesContainer;
