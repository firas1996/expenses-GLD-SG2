import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";
import StatContainer from "./StatContainer";

const ExpensesContainer = ({ data }) => {
  return (
    <div className="expenses">
      <ExpensesFilter />
      <StatContainer data={data} />
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
