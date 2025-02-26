import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";
import ExpensesFilter from "./ExpensesFilter";
import StatContainer from "./StatContainer";

const ExpensesContainer = ({ data }) => {
  const years = [
    "All",
    ...new Set(data.map((el) => el.date.getFullYear()).sort()),
  ];
  const [filtredYear, setFiltredYear] = useState(years[0]);
  const filredExpenses = data.filter((item) => {
    return filtredYear == "All" ? true : item.date.getFullYear() == filtredYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        years={years}
        filtredYear={filtredYear}
        setFiltredYear={setFiltredYear}
      />
      <StatContainer data={filredExpenses} />
      {filredExpenses.map((expense) => {
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
